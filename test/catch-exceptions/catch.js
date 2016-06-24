var tape = require('../../');

tape('cause an exception', function (assert) {
    asdf;
});

tape('cause an exception within a callback', function (assert) {
  setTimeout(function () {
    async;
  }, 0);
});

tape('cause an exception within a nested callback', function (assert) {
  setTimeout(function () {
    setTimeout(function () {
      async_deep;
    }, 0);
  }, 0);
});

tape('still run this test', function (assert) {
    assert.equal(1 + 1, 2, 'this still ran');
    assert.end();
});

eval('cause an exception outside of a tape block');
