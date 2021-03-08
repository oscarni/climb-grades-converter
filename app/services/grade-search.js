import Service from '@ember/service';
import ClimbingGrade from 'climbing-grade';
import ClimbingGradeRecognizer from 'climbing-grade-recognizer';

export default class GradeSearchService extends Service {
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
}
