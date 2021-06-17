import Component from '@glimmer/component';

export default class GradeDisplayComponent extends Component {
  get currentGrade() {
    try {
      return Object.values(
        this.args.currentGradeMap?.to(this.args.gradeSystem)
      )[0];
    } catch {
      return null;
    }
  }
}
