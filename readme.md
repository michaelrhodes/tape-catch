# tape-catch
tape-catch is a wrapper around [tape](https://github.com/substack/tape) that reports uncaught errors in your tests. It re-adds functionality that was removed from tape in version 3.0.0.

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
})```

## license
[MIT](http://opensource.org/licenses/MIT)
