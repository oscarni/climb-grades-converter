import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service
  gradeSearch;

  @tracked
  inputGrade = '';

  get recognizedGradeSystems() {
    return this.gradeSearch.recognizedGradeSystems(this.inputGrade.trim());
  }

  get selectableGradeSystems() {
    return this.recognizedGradeSystems.filter(
      (system) => system !== this.gradeSystem
    );
  }

  get hasManyGradeSystems() {
    return this.recognizedGradeSystems.length > 1;
  }

  get gradeSystem() {
    return (
      this.gradeSearch.getPreferredGrade(this.recognizedGradeSystems) ??
      this.recognizedGradeSystems[0]
    );
  }

  get parsedGrade() {
    return this.gradeSearch.parseGrade(
      this.inputGrade.trim(),
      this.gradeSystem
    );
  }

  get frenchGrade() {
    return this.parsedGrade?.format('french');
  }

  get southAfricanGrade() {
    return this.parsedGrade?.format('south_african');
  }

  get uiaaGrade() {
    return this.parsedGrade?.format('uiaa');
  }

  get huecoGrade() {
    return this.parsedGrade?.format('hueco');
  }

  get fontGrade() {
    return this.parsedGrade?.format('font');
  }

  get ydsGrade() {
    return this.parsedGrade?.format('yds');
  }

  get australianGrade() {
    return this.parsedGrade?.format('australian');
  }

  @action
  setGradeSystem(value) {
    this.gradeSearch.storeGradeSystemSelection(value);
  }

  @action
  blurInputGrade() {
    document.getElementById('input-grade').blur();
  }

  @action
  clearInputGrade() {
    this.inputGrade = '';
    document.getElementById('input-grade').focus();
  }
}
