import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | climbing-grade-recognizer', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    assert.ok(service);
  });

  test('it recognizes YDS', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const ydsCompareFn = (grades) => grades.value === 'yds';
    assert.ok(service.recognize('5.').some(ydsCompareFn));
    assert.ok(service.recognize('5.0').some(ydsCompareFn));
    assert.ok(service.recognize('5.1').some(ydsCompareFn));
    assert.ok(service.recognize('5.2').some(ydsCompareFn));
    assert.ok(service.recognize('5.3').some(ydsCompareFn));
    assert.ok(service.recognize('5.4').some(ydsCompareFn));
    assert.ok(service.recognize('5.5').some(ydsCompareFn));
    assert.ok(service.recognize('5.6').some(ydsCompareFn));
    assert.ok(service.recognize('5.7').some(ydsCompareFn));
    assert.ok(service.recognize('5.8').some(ydsCompareFn));
    assert.ok(service.recognize('5.9').some(ydsCompareFn));
    assert.ok(service.recognize('5.10').some(ydsCompareFn));
    assert.ok(service.recognize('5.10a').some(ydsCompareFn));
    assert.ok(service.recognize('5.10b').some(ydsCompareFn));
    assert.ok(service.recognize('5.10c').some(ydsCompareFn));
    assert.ok(service.recognize('5.10d').some(ydsCompareFn));
    assert.ok(service.recognize('5.11').some(ydsCompareFn));
    assert.ok(service.recognize('5.11a').some(ydsCompareFn));
    assert.ok(service.recognize('5.11b').some(ydsCompareFn));
    assert.ok(service.recognize('5.11c').some(ydsCompareFn));
    assert.ok(service.recognize('5.11d').some(ydsCompareFn));
    assert.ok(service.recognize('5.12').some(ydsCompareFn));
    assert.ok(service.recognize('5.12a').some(ydsCompareFn));
    assert.ok(service.recognize('5.12b').some(ydsCompareFn));
    assert.ok(service.recognize('5.12c').some(ydsCompareFn));
    assert.ok(service.recognize('5.12d').some(ydsCompareFn));
    assert.ok(service.recognize('5.13').some(ydsCompareFn));
    assert.ok(service.recognize('5.13a').some(ydsCompareFn));
    assert.ok(service.recognize('5.13b').some(ydsCompareFn));
    assert.ok(service.recognize('5.13c').some(ydsCompareFn));
    assert.ok(service.recognize('5.13d').some(ydsCompareFn));
    assert.ok(service.recognize('5.14').some(ydsCompareFn));
    assert.ok(service.recognize('5.14a').some(ydsCompareFn));
    assert.ok(service.recognize('5.14b').some(ydsCompareFn));
    assert.ok(service.recognize('5.14c').some(ydsCompareFn));
    assert.ok(service.recognize('5.14d').some(ydsCompareFn));
    assert.ok(service.recognize('5.15').some(ydsCompareFn));
    assert.ok(service.recognize('5.15a').some(ydsCompareFn));
    assert.ok(service.recognize('5.15b').some(ydsCompareFn));
    assert.ok(service.recognize('5.15c').some(ydsCompareFn));
    assert.ok(service.recognize('5.15d').some(ydsCompareFn));
  });

  test('it does not recognizes YDS', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const ydsCompareFn = (grades) => grades.value === 'yds';
    assert.notOk(service.recognize('5').some(ydsCompareFn));
    assert.notOk(service.recognize('5.1a').some(ydsCompareFn));
    assert.notOk(service.recognize('5.a').some(ydsCompareFn));
    assert.notOk(service.recognize('5.10bc').some(ydsCompareFn));
    assert.notOk(service.recognize('5.16a').some(ydsCompareFn));
    assert.notOk(service.recognize('5.15e').some(ydsCompareFn));
  });

  test('it recognizes sport/french', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'sport';
    assert.ok(service.recognize('2').some(gradeCompareFn));
    assert.ok(service.recognize('3').some(gradeCompareFn));
    assert.ok(service.recognize('4a').some(gradeCompareFn));
    assert.ok(service.recognize('4b').some(gradeCompareFn));
    assert.ok(service.recognize('4c').some(gradeCompareFn));
    assert.ok(service.recognize('5a').some(gradeCompareFn));
    assert.ok(service.recognize('5b').some(gradeCompareFn));
    assert.ok(service.recognize('5c').some(gradeCompareFn));
    assert.ok(service.recognize('6a').some(gradeCompareFn));
    assert.ok(service.recognize('6a+').some(gradeCompareFn));
    assert.ok(service.recognize('6b').some(gradeCompareFn));
    assert.ok(service.recognize('6b+').some(gradeCompareFn));
    assert.ok(service.recognize('6c').some(gradeCompareFn));
    assert.ok(service.recognize('6c+').some(gradeCompareFn));
    assert.ok(service.recognize('7a').some(gradeCompareFn));
    assert.ok(service.recognize('7a+').some(gradeCompareFn));
    assert.ok(service.recognize('7b').some(gradeCompareFn));
    assert.ok(service.recognize('7b+').some(gradeCompareFn));
    assert.ok(service.recognize('7c').some(gradeCompareFn));
    assert.ok(service.recognize('7c+').some(gradeCompareFn));
    assert.ok(service.recognize('8a').some(gradeCompareFn));
    assert.ok(service.recognize('8a+').some(gradeCompareFn));
    assert.ok(service.recognize('9a').some(gradeCompareFn));
    assert.ok(service.recognize('9a+').some(gradeCompareFn));
    assert.ok(service.recognize('9b').some(gradeCompareFn));
    assert.ok(service.recognize('9b+').some(gradeCompareFn));
    assert.ok(service.recognize('9c').some(gradeCompareFn));
    assert.ok(service.recognize('9c+').some(gradeCompareFn));
  });

  test('it does not recognizes sport/french', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'sport';
    assert.notOk(service.recognize('10a').some(gradeCompareFn));
    assert.notOk(service.recognize('4b+').some(gradeCompareFn));
    assert.notOk(service.recognize('6a++').some(gradeCompareFn));
    assert.notOk(service.recognize('6d').some(gradeCompareFn));
  });

  test('it recognizes ewbank', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'ewbank';
    assert.ok(service.recognize('1').some(gradeCompareFn));
    assert.ok(service.recognize('2').some(gradeCompareFn));
    assert.ok(service.recognize('3').some(gradeCompareFn));
    assert.ok(service.recognize('4').some(gradeCompareFn));
    assert.ok(service.recognize('5').some(gradeCompareFn));
    assert.ok(service.recognize('6').some(gradeCompareFn));
    assert.ok(service.recognize('7').some(gradeCompareFn));
    assert.ok(service.recognize('8').some(gradeCompareFn));
    assert.ok(service.recognize('9').some(gradeCompareFn));
    assert.ok(service.recognize('10').some(gradeCompareFn));
    assert.ok(service.recognize('11').some(gradeCompareFn));
    assert.ok(service.recognize('12').some(gradeCompareFn));
    assert.ok(service.recognize('13').some(gradeCompareFn));
    assert.ok(service.recognize('14').some(gradeCompareFn));
    assert.ok(service.recognize('15').some(gradeCompareFn));
    assert.ok(service.recognize('16').some(gradeCompareFn));
    assert.ok(service.recognize('17').some(gradeCompareFn));
    assert.ok(service.recognize('18').some(gradeCompareFn));
    assert.ok(service.recognize('19').some(gradeCompareFn));
    assert.ok(service.recognize('20').some(gradeCompareFn));
    assert.ok(service.recognize('21').some(gradeCompareFn));
    assert.ok(service.recognize('22').some(gradeCompareFn));
    assert.ok(service.recognize('23').some(gradeCompareFn));
    assert.ok(service.recognize('24').some(gradeCompareFn));
    assert.ok(service.recognize('25').some(gradeCompareFn));
    assert.ok(service.recognize('26').some(gradeCompareFn));
    assert.ok(service.recognize('27').some(gradeCompareFn));
    assert.ok(service.recognize('28').some(gradeCompareFn));
    assert.ok(service.recognize('29').some(gradeCompareFn));
    assert.ok(service.recognize('30').some(gradeCompareFn));
    assert.ok(service.recognize('31').some(gradeCompareFn));
    assert.ok(service.recognize('33').some(gradeCompareFn));
    assert.ok(service.recognize('34').some(gradeCompareFn));
    assert.ok(service.recognize('35').some(gradeCompareFn));
    assert.ok(service.recognize('36').some(gradeCompareFn));
    assert.ok(service.recognize('37').some(gradeCompareFn));
    assert.ok(service.recognize('38').some(gradeCompareFn));
    assert.ok(service.recognize('39').some(gradeCompareFn));
  });

  test('it does not recognizes ewbank', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'ewbank';
    assert.notOk(service.recognize('0').some(gradeCompareFn));
    assert.notOk(service.recognize('40').some(gradeCompareFn));
    assert.notOk(service.recognize('366').some(gradeCompareFn));
    assert.notOk(service.recognize('6d').some(gradeCompareFn));
  });

  test('it recognizes swedish', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'swedish';
    assert.ok(service.recognize('1').some(gradeCompareFn));
    assert.ok(service.recognize('2').some(gradeCompareFn));
    // assert.ok(service.recognize('3-').some(gradeCompareFn));
    assert.ok(service.recognize('3').some(gradeCompareFn));
    // assert.ok(service.recognize('3+').some(gradeCompareFn));
    assert.ok(service.recognize('4-').some(gradeCompareFn));
    assert.ok(service.recognize('4').some(gradeCompareFn));
    assert.ok(service.recognize('4+').some(gradeCompareFn));
    assert.ok(service.recognize('5-').some(gradeCompareFn));
    assert.ok(service.recognize('5').some(gradeCompareFn));
    assert.ok(service.recognize('5+').some(gradeCompareFn));
    assert.ok(service.recognize('6-').some(gradeCompareFn));
    assert.ok(service.recognize('6').some(gradeCompareFn));
    assert.ok(service.recognize('6+').some(gradeCompareFn));
    assert.ok(service.recognize('7-').some(gradeCompareFn));
    assert.ok(service.recognize('7').some(gradeCompareFn));
    assert.ok(service.recognize('7+').some(gradeCompareFn));
    assert.ok(service.recognize('8-').some(gradeCompareFn));
    assert.ok(service.recognize('8').some(gradeCompareFn));
    assert.ok(service.recognize('8+').some(gradeCompareFn));
    assert.ok(service.recognize('9-').some(gradeCompareFn));
    assert.ok(service.recognize('9').some(gradeCompareFn));
    assert.ok(service.recognize('9+').some(gradeCompareFn));
    assert.ok(service.recognize('10-').some(gradeCompareFn));
    assert.ok(service.recognize('10').some(gradeCompareFn));
    assert.ok(service.recognize('10+').some(gradeCompareFn));
    assert.ok(service.recognize('11-').some(gradeCompareFn));
    assert.ok(service.recognize('11').some(gradeCompareFn));
    assert.ok(service.recognize('11+').some(gradeCompareFn));
  });

  test('it does not recognizes swedish', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'swedish';
    assert.notOk(service.recognize('0').some(gradeCompareFn));
    assert.notOk(service.recognize('2+').some(gradeCompareFn));
    assert.notOk(service.recognize('12').some(gradeCompareFn));
    assert.notOk(service.recognize('8++').some(gradeCompareFn));
  });

  test('it recognizes uiaa', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'uiaa';
    assert.ok(service.recognize('I').some(gradeCompareFn));
    assert.ok(service.recognize('II').some(gradeCompareFn));
    assert.ok(service.recognize('III').some(gradeCompareFn));
    assert.ok(service.recognize('III+').some(gradeCompareFn));
    assert.ok(service.recognize('IV').some(gradeCompareFn));
    assert.ok(service.recognize('IV+').some(gradeCompareFn));
    assert.ok(service.recognize('V-').some(gradeCompareFn));
    assert.ok(service.recognize('V').some(gradeCompareFn));
    assert.ok(service.recognize('V+').some(gradeCompareFn));
    assert.ok(service.recognize('VI-').some(gradeCompareFn));
    assert.ok(service.recognize('VI').some(gradeCompareFn));
    assert.ok(service.recognize('VI+').some(gradeCompareFn));
    assert.ok(service.recognize('VII-').some(gradeCompareFn));
    assert.ok(service.recognize('VII').some(gradeCompareFn));
    assert.ok(service.recognize('VII+').some(gradeCompareFn));
    assert.ok(service.recognize('VIII-').some(gradeCompareFn));
    assert.ok(service.recognize('VIII').some(gradeCompareFn));
    assert.ok(service.recognize('VIII+').some(gradeCompareFn));
    assert.ok(service.recognize('IX-').some(gradeCompareFn));
    assert.ok(service.recognize('IX').some(gradeCompareFn));
    assert.ok(service.recognize('IX+').some(gradeCompareFn));
    assert.ok(service.recognize('X-').some(gradeCompareFn));
    assert.ok(service.recognize('X').some(gradeCompareFn));
    assert.ok(service.recognize('X+').some(gradeCompareFn));
    assert.ok(service.recognize('XI-').some(gradeCompareFn));
    assert.ok(service.recognize('XI').some(gradeCompareFn));
    assert.ok(service.recognize('XI+').some(gradeCompareFn));
    assert.ok(service.recognize('XII-').some(gradeCompareFn));
    assert.ok(service.recognize('XII').some(gradeCompareFn));
    assert.ok(service.recognize('XII+').some(gradeCompareFn));
  });

  test('it does not recognizes uiaa', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'uiaa';
    assert.notOk(service.recognize('VIIII').some(gradeCompareFn));
    assert.notOk(service.recognize('XIII').some(gradeCompareFn));
    assert.notOk(service.recognize('IIII+').some(gradeCompareFn));
  });

  test('it recognizes font', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'font';
    assert.ok(service.recognize('2').some(gradeCompareFn));
    assert.ok(service.recognize('3').some(gradeCompareFn));
    assert.ok(service.recognize('4').some(gradeCompareFn));
    assert.ok(service.recognize('4+').some(gradeCompareFn));
    assert.ok(service.recognize('5').some(gradeCompareFn));
    assert.ok(service.recognize('5+').some(gradeCompareFn));
    assert.ok(service.recognize('6a').some(gradeCompareFn));
    assert.ok(service.recognize('6a+').some(gradeCompareFn));
    assert.ok(service.recognize('6b').some(gradeCompareFn));
    assert.ok(service.recognize('6b+').some(gradeCompareFn));
    assert.ok(service.recognize('6c').some(gradeCompareFn));
    assert.ok(service.recognize('6c+').some(gradeCompareFn));
    assert.ok(service.recognize('7a').some(gradeCompareFn));
    assert.ok(service.recognize('7a+').some(gradeCompareFn));
    assert.ok(service.recognize('7b').some(gradeCompareFn));
    assert.ok(service.recognize('7b+').some(gradeCompareFn));
    assert.ok(service.recognize('7c').some(gradeCompareFn));
    assert.ok(service.recognize('7c+').some(gradeCompareFn));
    assert.ok(service.recognize('8a').some(gradeCompareFn));
    assert.ok(service.recognize('8a+').some(gradeCompareFn));
    assert.ok(service.recognize('8b').some(gradeCompareFn));
    assert.ok(service.recognize('8b+').some(gradeCompareFn));
    assert.ok(service.recognize('8c').some(gradeCompareFn));
    assert.ok(service.recognize('8c+').some(gradeCompareFn));
    assert.ok(service.recognize('9a').some(gradeCompareFn));
  });

  test('it does not recognizes font', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'font';
    assert.notOk(service.recognize('5a').some(gradeCompareFn));
    assert.notOk(service.recognize('5-').some(gradeCompareFn));
    assert.notOk(service.recognize('6a++').some(gradeCompareFn));
    assert.notOk(service.recognize('6a-').some(gradeCompareFn));
    assert.notOk(service.recognize('9b').some(gradeCompareFn));
    assert.notOk(service.recognize('9a+').some(gradeCompareFn));
  });

  test('it recognizes vermin', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'vermin';
    assert.ok(service.recognize('V').some(gradeCompareFn));
    assert.ok(service.recognize('VB').some(gradeCompareFn));
    assert.ok(service.recognize('V0-').some(gradeCompareFn));
    assert.ok(service.recognize('V0').some(gradeCompareFn));
    assert.ok(service.recognize('V0+').some(gradeCompareFn));
    assert.ok(service.recognize('V1').some(gradeCompareFn));
    assert.ok(service.recognize('V2').some(gradeCompareFn));
    assert.ok(service.recognize('V3').some(gradeCompareFn));
    assert.ok(service.recognize('V4').some(gradeCompareFn));
    assert.ok(service.recognize('V5').some(gradeCompareFn));
    assert.ok(service.recognize('V6').some(gradeCompareFn));
    assert.ok(service.recognize('V7').some(gradeCompareFn));
    assert.ok(service.recognize('V8').some(gradeCompareFn));
    assert.ok(service.recognize('V9').some(gradeCompareFn));
    assert.ok(service.recognize('V10').some(gradeCompareFn));
    assert.ok(service.recognize('V11').some(gradeCompareFn));
    assert.ok(service.recognize('V12').some(gradeCompareFn));
    assert.ok(service.recognize('V13').some(gradeCompareFn));
    assert.ok(service.recognize('V14').some(gradeCompareFn));
    assert.ok(service.recognize('V15').some(gradeCompareFn));
    assert.ok(service.recognize('V16').some(gradeCompareFn));
    assert.ok(service.recognize('V17').some(gradeCompareFn));
  });

  test('it does not recognizes vermin', function (assert) {
    let service = this.owner.lookup('service:climbing-grade-recognizer');
    const gradeCompareFn = (grades) => grades.value === 'vermin';
    assert.notOk(service.recognize('V01').some(gradeCompareFn));
    assert.notOk(service.recognize('V2+').some(gradeCompareFn));
    assert.notOk(service.recognize('V18').some(gradeCompareFn));
    assert.notOk(service.recognize('12').some(gradeCompareFn));
    assert.notOk(service.recognize('9a+').some(gradeCompareFn));
  });
});
