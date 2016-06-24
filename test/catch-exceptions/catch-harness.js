var tape = require('../../');

var test = tape.createHarness();

test.createStream().on('end', function () {
    process.exit(test._exitCode);
}).pipe(process.stdout);

test('cause an exception', function (assert) {
    asdf;
});

test('cause an exception within a callback', function (assert) {
  setTimeout(function () {
    async;
  }, 0);
});

test('cause an exception within a nested callback', function (assert) {
  setTimeout(function () {
    setTimeout(function () {
      async_deep;
    }, 0);
  }, 0);
});

test('still run this test', function (assert) {
    assert.equal(1 + 1, 2, 'this still ran');
    assert.end();
});

eval('cause an exception outside of a tape block');
