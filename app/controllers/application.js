import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class ApplicationController extends Controller {
  @service
  gradeSearch;

  @storageFor('settings')
  settings;

  get inputGrade() {
    return this.settings.get('gradeCache');
  }

  set inputGrade(value) {
    this.settings.set('gradeCache', value);
  }

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
