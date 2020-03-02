import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {Router} from "@ember/routing"
import Store from 'ember-data/store';
import Rental from './model';
// import Rental from '../components/rental-item/component';
export default class RentalRoute extends Route {

  @service store!: Store;

  async model(params: Rental) {
    return this.store.find('rental', params.rental_id);
  }
}
