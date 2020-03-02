import Component from '@glimmer/component';
// @ts-ignore
import { tracked } from '@glimmer/tracking';

interface RentalsArgs {
    rentals: any;
}

export default class Rentals extends Component<RentalsArgs> {
    @tracked query = '';
}
