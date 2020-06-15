/* eslint-env mocha */

const nock = require('nock');
const expect = require('expect');
const assert = require('assert');
const httpclient = require('../src/httpclient');

describe('#httpclient.caches', () => {
  it('Status 200 can get cached', async () => {
    const scope = nock('http://www.example.com/')
      .get('/foo')
      .reply(200, 'first')
      .get('/foo')
      .reply(200, 'second');

    const client = httpclient.create({
      baseURL: 'http://www.example.com',
      headers: {},
      timeout: 1000,
    });

    const first = await client.get('/foo');
    const second = await client.get('/foo');

    expect(first.data).toEqual(second.data);
    expect(scope.isDone()).toBeFalsy();
  });

  it('Status 404 will not get cached', async () => {
    const scope = nock('http://www.example.com/')
      .get('/bar')
      .reply(404, 'foo')
      .get('/bar')
      .reply(200, 'second');

    const client = httpclient.create({
      baseURL: 'http://www.example.com',
      headers: {},
      timeout: 1000,
    });

    try {
      const first = await client.get('/bar');
      expect(first).not.toBeDefined();
    } catch (e) {
      expect(e.name).toEqual('FastlyError');
    }
    const second = await client.get('/bar');
    expect(second.data).toEqual('second');

    expect(scope.isDone()).toBeTruthy();
  });
});

describe('#httpclient.retries', () => {
  it('Error 429 triggers a retry', async () => {
    const scope = nock('http://www.example.com/')
      .get('/')
      .reply(429)
      .get('/')
      .reply(429)
      .get('/')
      .reply(200, 'thanks for trying again');

    const client = httpclient.create({
      baseURL: 'http://www.example.com',
      headers: {},
      timeout: 1000,
    });

    const res = await client.get('/');
    expect(res.data).toEqual('thanks for trying again');

    expect(scope.isDone()).toBeTruthy();
  });

  it('Hard errors trigger a retry', async () => {
    const scope = nock('http://www.example.com/')
      .get('/bang')
      .replyWithError('nope')
      .get('/bang')
      .replyWithError('still nope')
      .get('/bang')
      .reply(200, 'thanks for trying again');

    const client = httpclient.create({
      baseURL: 'http://www.example.com',
      headers: {},
      timeout: 1000,
    });

    const res = await client.get('/bang');
    expect(res.data).toEqual('thanks for trying again');

    expect(scope.isDone()).toBeTruthy();
  });

  it('Error 502 and 503 trigger a retry', async () => {
    const scope = nock('http://www.example.com/')
      .get('/gateway')
      .reply(502)
      .get('/gateway')
      .reply(503)
      .get('/gateway')
      .reply(200, 'thanks for trying again');

    const client = httpclient.create({
      baseURL: 'http://www.example.com',
      headers: {},
      timeout: 1000,
    });

    const res = await client.get('/gateway');
    expect(res.data).toEqual('thanks for trying again');

    expect(scope.isDone()).toBeTruthy();
  });

  it('Error 500 does not trigger a reply', async () => {
    const scope = nock('http://www.example.com/')
      .get('/boom')
      .reply(500, '500');

    const client = httpclient.create({
      baseURL: 'http://www.example.com',
      headers: {},
      timeout: 1000,
    });

    try {
      await client.get('/boom');
      assert.fail();
    } catch (e) {
      expect(scope.isDone()).toBeTruthy();
    }
  });
});
