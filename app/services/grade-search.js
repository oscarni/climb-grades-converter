import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';
import IRCRA from 'ircra';
import { inject as service } from '@ember/service';

export default class GradeSearchService extends Service {
  @storageFor('selected-grade-systems')
  selectedGradeSystems;

  @service
  climbingGradeRecognizer;

  ircra;

  constructor() {
    super(...arguments);
    this.ircra = new IRCRA();
  }

  recognizedGradeSystems(grade) {
    return this.climbingGradeRecognizer.recognize(grade);
  }

  parseGrade(grade, gradeSystem) {
    try {
      return this.ircra.convert(gradeSystem, grade);
    } catch {
      return null;
    }
  }

  storeGradeSystemSelection(gradeSystemValue) {
    this.selectedGradeSystems.unshiftObject(gradeSystemValue);
    if (this.selectedGradeSystems.length > 10) {
      this.selectedGradeSystems.length = 10;
    }
  }

  getPreferredGradeSystem(gradeSystemObjectsArray) {
    if (!gradeSystemObjectsArray.length) return;
    const matchedSystem = this.selectedGradeSystems.find((gradeSystemValue) => {
      return gradeSystemObjectsArray.filter(
        (gradeSystem) => gradeSystem.value === gradeSystemValue,
      )[0];
    });
    return gradeSystemObjectsArray.find(
      (gradeSystem) => gradeSystem.value === matchedSystem,
    );
  }

  getGradesBySystem(gradeSystemValue) {
    try {
      return this.ircra.get(gradeSystemValue);
    } catch {
      return [];
    }
  }
}
