import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
export default class GradeDisplayComponent extends Component {
  @service
  gradeSearch;

  initWidth;

  get currentGrade() {
    try {
      return Object.values(
        this.args.currentGradeMap?.to(this.args.gradeSystem),
      )[0];
    } catch {
      return null;
    }
  }

  get gradesArray() {
    let systemArray = this.gradeSearch.getGradesBySystem(this.args.gradeSystem);
    if (this.currentGrade && this.currentGrade.includes('/')) {
      const index = systemArray.indexOf(this.currentGrade.split('/')[0]);
      systemArray.splice(index + 1, 0, this.currentGrade);
    }
    return systemArray;
  }

  get selectWidth() {
    let element = document.getElementById(
      `grade-select-${this.args.gradeSystem}`,
    );
    if (this.currentGrade && this.gradesArray.length && element) {
      // make sure to trigger on currentGrade and gradesArray change
      return htmlSafe(`width: ${this.getSelectWidth(element)}`);
    } else if (element) {
      return htmlSafe(`width: ${this.getSelectWidth(element)}`);
    }
    return null;
  }

  getSelectWidth(element) {
    let tempSelect = document.createElement('select');
    let tempOption = document.createElement('option');

    tempOption.textContent = this.currentGrade || '–';
    tempSelect.className = element.className;
    tempSelect.style.cssText += `visibility: hidden; position: fixed;`;
    tempSelect.appendChild(tempOption);
    element.after(tempSelect);

    const additionalPadding = 2;
    const tempSelectWidth =
      tempSelect.getBoundingClientRect().width + additionalPadding;
    tempSelect.remove();
    return `${tempSelectWidth}px`;
  }

  @action
  setGrade(e) {
    e.preventDefault();
    let selectedGrade = e.target.value;
    return this.args.setGradeAndSystem(selectedGrade, this.args.gradeSystem);
  }

  @action
  setSize(e) {
    if (e.target) {
      // is event
      e.preventDefault();
      e.target.style.width = this.getSelectWidth(e.target);
    }
    // is element
    e.style.width = this.getSelectWidth(e);
  }
}
