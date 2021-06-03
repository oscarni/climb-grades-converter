import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InfoPopupWButtonComponent extends Component {
  @tracked
  displayPopup = false;

  @action
  togglePopup() {
    this.displayPopup = !this.displayPopup;
  }
}
