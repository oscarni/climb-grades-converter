import Service from '@ember/service';
import ClimbingGradeRecognizer from 'climbing-grade-recognizer';
import { storageFor } from 'ember-local-storage';
import IRCRA from 'ircra';

export default class GradeSearchService extends Service {
  @storageFor('selected-grade-systems')
  selectedGradeSystems;

  ircra;

  constructor() {
    super(...arguments);
    this.ircra = new IRCRA();
  }

  recognizedGradeSystems(grade) {
    try {
      let recognized = ClimbingGradeRecognizer.recognize(grade);
      // The following systems does not seem to be supported by the converter
      recognized = recognized.filter(
        (system) => system !== 'kurtyki' && system !== 'british'
      );
      recognized = recognized.map((system) => {
        if (system === 'french') {
          system = 'sport';
        }
        if (system === 'hueco') {
          system = 'vermin';
        }
        return system;
      });
      return recognized;
    } catch {
      return [];
    }
  }

  parseGrade(grade, gradeSystem) {
    try {
      return this.ircra.convert(gradeSystem, grade);
    } catch {
      return null;
    }
  }

  storeGradeSystemSelection(grade) {
    this.selectedGradeSystems.unshiftObject(grade);
    if (this.selectedGradeSystems.length > 10) {
      this.selectedGradeSystems.length = 10;
    }
  }

  getPreferredGrade(gradesArray) {
    if (!gradesArray) return;
    return this.selectedGradeSystems.find((grade) =>
      gradesArray.includes(grade)
    );
  }
}
