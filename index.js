var tape = require('tape')

exports = module.exports = function (name, fn) {
  tape(name, function (assert) {
    try {
      fn.apply(this, arguments)
    }
    catch (err) {
      assert.error(err)
      assert.end()
    }
  })
}

// Maintain tap compatibility
exports.test = exports
exports.tape = tape
