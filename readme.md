# tape-catch
tape-catch is a wrapper around [tape](https://github.com/substack/tape) that reports uncaught errors in your tests. It re-adds functionality that was removed from tape in version 3.0.0.

[![Build status](https://travis-ci.org/michaelrhodes/tape-catch.png?branch=master)](https://travis-ci.org/michaelrhodes/tape-catch)

## install
```sh
$ npm install tape-catch
```
**note: tape is not installed alongside tape-catch.**

tape-catch works with any and all versions of tape, so it leaves this choice to the user.

## example
```js
var test = require('tape-catch')

test('cause an exception', function (assert) {
  asdf
})

test('still run this test', function (assert) {
  assert.equal(1 + 1, 2, 'this still ran')
  assert.end() 
})
```

```
TAP version 13
# cause an exception
not ok 1 ReferenceError: asdf is not defined
  ---
    operator: error
    expected: undefined
    actual:   {}
    stack:
      ReferenceError: asdf is not defined
        at Test.<anonymous> (/path/to/example.js:4:3)
        at Test.bound [as _cb] (/path/to/node_modules/tape/lib/test.js:59:32)
        at Test.exports.Test.run (/path/to/index.js:17:10)
        at Test.bound [as run] (/path/to/node_modules/tape/lib/test.js:59:32)
        at Object.next [as _onImmediate] (/path/to/node_modules/tape/lib/results.js:66:15)
        at processImmediate [as _immediateCallback] (timers.js:345:15)
  ...
# still run this test
ok 2 this still ran

1..2
# tests 2
# pass  1
# fail  1
```

## license
[MIT](http://opensource.org/licenses/MIT)
