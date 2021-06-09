import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | app-updater', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:app-updater');
    assert.ok(service);
  });
});
