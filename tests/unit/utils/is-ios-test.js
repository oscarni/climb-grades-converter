import isIOS from 'climb-grades-converter/utils/is-ios';
import { module, test } from 'qunit';

module('Unit | Utility | isIOS', function () {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let result = isIOS();
    assert.notOk(result); // unless ios device it should always be false
  });
});
