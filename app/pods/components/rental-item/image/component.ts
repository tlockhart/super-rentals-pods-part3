import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

interface RentalImageArgs {}

export default class RentalImage extends Component<RentalImageArgs> {
  //Option1: Constructor initialization
  // constructor(...args) {
  //   super(...args);
  //   @tracked this.isLarge = false;
  // }

  //Option2: Instance Variable Initialization
  @tracked isLarge = false;

  //Use action decorator when passing a method to a component to bind to the components context.
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
