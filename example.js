var test = require('./')

test('cause an exception', function (assert) {
  assert.plan(5)
  asdf
})

test('still run this test', function (assert) {
  assert.equal(1 + 1, 2, 'this still ran')
  assert.end() 
})
