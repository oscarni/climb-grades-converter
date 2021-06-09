import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class InfoPopupWButtonComponent extends Component {
  @service
  appUpdater;

  @tracked
  displayPopup = false;

  @action
  togglePopup() {
    this.displayPopup = !this.displayPopup;
  }
}
