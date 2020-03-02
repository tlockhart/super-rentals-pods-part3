import DS from 'ember-data';
import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default class Rental extends Model{
  @attr title!: string;
  @attr owner!: string;
  @attr city!: string;
  @attr location!: string;
  @attr category!: string;
  @attr image!: string;
  @attr bedrooms!: string;
  @attr description!: string;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'rental': Rental;
  }
}
