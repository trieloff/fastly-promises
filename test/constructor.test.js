'use strict';

/* eslint-env mocha */

const expect = require('expect');
const fastlyPromises = require('../src/index');

describe('#constructor', () => {
  const instance = fastlyPromises('923b6bd5266a7f932e41962755bd4254', 'SU1Z0isxPaozGVKXdv0eY');

  it('class instance should exist', () => {
    expect(instance).toBeTruthy();
  });

  it('class instance should have service_id and request properties', () => {
    ['service_id', 'request'].forEach((e) => {
      expect(Object.keys(instance)).toContain(e);
    });
  });

  it('class instance should have logging functions', () => {
    ['s3',
      's3canary',
      'azureblob',
      'cloudfiles',
      'digitalocean',
      'ftp',
      'bigquery',
      'gcs',
      'honeycomb',
      'logshuttle',
      'logentries',
      'loggly',
      'heroku',
      'openstack',
      'papertrail',
      'scalyr',
      'splunk',
      'sumologic',
      'syslog']
      .map((e) => e.replace(/(^|\s)\S/g, (l) => l.toUpperCase()))
      .forEach((e) => {
        ['read'].forEach((f) => {
          expect(typeof instance[f + e]).toBe('function');
        });
      });
  });
});
