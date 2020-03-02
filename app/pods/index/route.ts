import Route from '@ember/routing/route';
import Store from 'ember-data/store';
import { inject as service } from '@ember/service';
import {Router} from "@ember/routing"


export default class Index extends Route{

  @service store!: Store;
  async model() {
    return this.store.findAll('rental');
  }
}
