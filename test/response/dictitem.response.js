module.exports = {
  dict: {
    list: [
      {
        created_at: '2016-04-29T22:16:23+00:00',
        deleted_at: null,
        id: '3vjTN8v1O7nOAY7aNDGOL',
        name: 'my_dictionary',
        service_id: 'SU1Z0isxPaozGVKXdv0eY',
        updated_at: '2016-04-29T22:16:23+00:00',
        version: 1,
        write_only: false,
      },
    ],
    get: {
      created_at: '2016-05-03T16:11:41+00:00',
      deleted_at: null,
      id: '5clCytcTJrnvPi8wjqPH0q',
      name: 'my_dictionary',
      service_id: 'SU1Z0isxPaozGVKXdv0eY',
      updated_at: '2016-05-03T16:20:35+00:00',
      version: 1,
      write_only: false,
    },
    getsecret: {
      created_at: '2016-05-03T16:11:41+00:00',
      deleted_at: null,
      id: '5clCytcTJrnvPi8wjqPH0q',
      name: 'my_dictionary',
      service_id: 'SU1Z0isxPaozGVKXdv0eY',
      updated_at: '2016-05-03T16:20:35+00:00',
      version: 1,
      write_only: true,
    },
    post: {
      created_at: '2016-05-03T16:11:41+00:00',
      deleted_at: null,
      id: '5clCytcTJrnvPi8wjqPH0q',
      name: 'my_dictionary',
      service_id: 'SU1Z0isxPaozGVKXdv0eY',
      updated_at: '2016-05-03T16:11:41+00:00',
      version: 1,
      write_only: false,
    },
    put: {
      created_at: '2016-05-03T16:11:41+00:00',
      deleted_at: null,
      id: '5clCytcTJrnvPi8wjqPH0q',
      name: 'updated_dictionary',
      service_id: 'SU1Z0isxPaozGVKXdv0eY',
      updated_at: '2016-05-03T16:11:41+00:00',
      version: 1,
      write_only: false,
    },
    delete: {
      status: 'ok',
    },
  },
  item: {
    bulk: {
      status: 'ok',
    },
    get: {
      dictionary_id: '5clCytcTJrnvPi8wjqPH0q',
      service_id: 'SU1Z0isxPaozGVKXdv0eY',
      item_key: 'some_key',
      item_value: 'some_value',
      created_at: '2016-04-21T18:14:32+00:00',
      deleted_at: null,
      updated_at: '2016-04-21T18:14:32+00:00',
    },
    post: {
      dictionary_id: '5clCytcTJrnvPi8wjqPH0q',
      service_id: 'SU1Z0isxPaozGVKXdv0eY',
      item_key: 'some_key',
      item_value: 'some_value',
      created_at: '2016-04-21T18:14:32+00:00',
      deleted_at: null,
      updated_at: '2016-04-21T18:14:32+00:00',
    },
    put: {
      dictionary_id: '5clCytcTJrnvPi8wjqPH0q',
      service_id: 'SU1Z0isxPaozGVKXdv0eY',
      item_key: 'some_key',
      item_value: 'new_value',
      created_at: '2016-04-21T18:14:32+00:00',
      deleted_at: null,
      updated_at: '2016-04-21T18:14:32+00:00',
    },
    delete: {
      status: 'ok',
    },
    missing: {
      msg: 'Record not found',
      detail:
        "Couldn't find dict item '{ deleted =\u003e 0000-00-00 00:00:00, name =\u003e test-s3-does-not-exist, service =\u003e SU1Z0isxPaozGVKXdv0eY, version =\u003e 1 }'",
    },
    bist: { foo: 'bar' },
    list: [
      {
        dictionary_id: '5clCytcTJrnvPi8wjqPH0q',
        service_id: 'SU1Z0isxPaozGVKXdv0eY',
        item_key: 'some_key',
        item_value: 'some_value',
        created_at: '2016-04-21T18:14:32+00:00',
        deleted_at: null,
        updated_at: '2016-04-21T18:14:32+00:00',
      },
    ],
  },
};