import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | grade-search', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:grade-search');
    assert.ok(service);
  });
});
