import Service from '@ember/service';
import ClimbingGrade from 'climbing-grade';
import ClimbingGradeRecognizer from 'climbing-grade-recognizer';
import { storageFor } from 'ember-local-storage';

export default class GradeSearchService extends Service {
  @storageFor('selected-grade-systems')
  selectedGradeSystems;

  recognizedGradeSystems(grade) {
    try {
      let recognized = ClimbingGradeRecognizer.recognize(grade);
      // The following systems does not seem to be supported by the converter
      recognized = recognized.filter(
        (system) => system !== 'kurtyki' && system !== 'british'
      );
      return recognized;
    } catch {
      return [];
    }
  }

  parseGrade(grade, gradeSystem) {
    try {
      return new ClimbingGrade(grade, gradeSystem);
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
