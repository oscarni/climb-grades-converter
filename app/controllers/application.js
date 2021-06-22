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

  get gradeSystem() {
    return (
      this.gradeSearch.getPreferredGradeSystem(this.recognizedGradeSystems) ??
      this.recognizedGradeSystems[0]
    );
  }

  get parsedGradeMap() {
    return this.gradeSearch.parseGrade(
      this.inputGrade.trim(),
      this.gradeSystem?.value
    );
  }

  @action
  setGradeSystem(gradeSystemValue) {
    this.gradeSearch.storeGradeSystemSelection(gradeSystemValue);
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

  @action
  setGradeAndSystem(grade, gradeSystemValue) {
    if (
      gradeSystemValue !== this.gradeSearch.selectedGradeSystems.firstObject
    ) {
      this.setGradeSystem(gradeSystemValue);
    }
    this.inputGrade = grade;
  }
}
