import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class Application extends JSONAPIAdapter{
  // add namespace prefix
  namespace = 'api';

  //override Ember data's build URL
  buildURL(...args) {
    // build the URL and add the json extension
    return `${super.buildURL(...args)}.json`;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    'application': Application;
  }
}
