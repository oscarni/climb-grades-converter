import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ClimbingGrade from 'climbing-grade';
import ClimbingGradeRecognizer from 'climbing-grade-recognizer';

export default class SearchFieldComponent extends Component {
  @tracked
  inputValue = '';

  @tracked
  selectedGradeSystem;

  get recognizedGradeSystems() {
    try {
      let recognized = ClimbingGradeRecognizer.recognize(
        this.inputValue.trim()
      );
      // The following systems does not seem to be supported by the converter
      recognized = recognized.filter(
        (system) => system !== 'kurtyki' && system !== 'british'
      );
      return recognized;
    } catch {
      return [];
    }
  }

  get selectableGradeSystems() {
    return this.recognizedGradeSystems?.filter(
      (system) => system !== this.gradeSystem
    );
  }

  get hasManyGradeSystems() {
    return this.recognizedGradeSystems?.length > 1;
  }

  get gradeSystem() {
    return this.selectedGradeSystem ?? this.recognizedGradeSystems[0];
  }

  get parsedGrade() {
    try {
      return new ClimbingGrade(this.inputValue.trim(), this.gradeSystem);
    } catch {
      return null;
    }
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

  get britishhGrade() {
    return this.parsedGrade?.format('british');
  }

  get ydsGrade() {
    return this.parsedGrade?.format('yds');
  }

  get australianGrade() {
    return this.parsedGrade?.format('australian');
  }

  @action
  setGradeSystem(value) {
    this.selectedGradeSystem = value;
  }

  @action
  resetGradeSystem() {
    if (!this.inputValue) {
      return;
    }
    if (
      this.recognizedGradeSystems.includes(this.selectedGradeSystem) === false
    ) {
      this.selectedGradeSystem = null;
    }
  }
}
