var test = require('tape')

exports = module.exports = function (name, fn) {
  test(name, function (t) {
    try {
      fn.apply(this, arguments)
    }
    catch (err) {
      t.error(err)
      t.end()
    }
  })
}

// Maintain tap compatibility
exports.test = exports
