import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppUpdaterService extends Service {
  @tracked
  hasUpdate;

  update;

  @action
  resetUpdateFunction() {
    this.update = () => {
      window.location.reload();
    };
  }
}
