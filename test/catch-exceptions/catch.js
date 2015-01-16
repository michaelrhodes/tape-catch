var tape = require('../../');

tape('cause an exception', function (assert) {
    asdf
});

tape('still run this test', function (assert) {
    assert.equal(1 + 1, 2, 'this still ran');
    assert.end();
});
