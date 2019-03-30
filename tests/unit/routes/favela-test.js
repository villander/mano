import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | favela', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:favela');
    assert.ok(route);
  });
});
