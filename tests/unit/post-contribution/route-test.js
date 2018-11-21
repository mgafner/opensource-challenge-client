import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | post contribution', function() {
  setupTest()

  it('exists', function() {
    let route = this.owner.lookup('route:post-contribution')
    expect(route).to.be.ok
  })
})
