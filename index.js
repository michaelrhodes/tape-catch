var tape = require('tape')
var slice = Array.prototype.slice

exports = module.exports = function () {
  var args = slice.call(arguments)
  var fn = args.pop()
  tape.apply(tape, args.concat(test))

  function test (t) {
    if (typeof fn != 'function') {
      return t.end()
    }
    try {
      fn.apply(this, arguments)
    }
    catch (err) {
      t.error(err)
      t.end()
    }
  }
}

// Maintain tape compatibility
for (var exp in tape) {
  if (tape.hasOwnProperty(exp)) {
    exports[exp] = tape[exp]
  }
}
