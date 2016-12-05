import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('route:day/index', 'Unit | Route | day/index',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    it('exists', function() {
      let route = this.subject();
      expect(route).to.be.ok;
    });
  }
);
