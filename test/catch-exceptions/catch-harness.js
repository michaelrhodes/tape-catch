var tape = require('../../');

var test = tape.createHarness();

test.createStream().on('end', function () {
    process.exit(test._exitCode);
}).pipe(process.stdout);

test('cause an exception', function (assert) {
    asdf
});

test('still run this test', function (assert) {
    assert.equal(1 + 1, 2, 'this still ran');
    assert.end();
});
