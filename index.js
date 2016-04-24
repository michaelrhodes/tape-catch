var tape = require('tape')
var global = require('global')
var tests = require('./manager')()

exports = module.exports = tape

// Maintain tape@1 compatibility
var _end = (
  exports.Test.prototype._end ||
  exports.Test.prototype.end
)

exports.Test.prototype._end = function () {
  tests.remove(this)
  _end.apply(this, arguments)
}

exports.Test.prototype.run = function () {
  if (!this._cb || this._skip) {
    return this._end()
  }
  this.emit('prerun')
  try {
    tests.add(this)
    this._cb(this)
  }
  catch (err) {
    this.error(err)
    this._end()
    return
  }
  this.emit('run') 
}

process.browser ?
  global.onerror = killall :
  process.on('uncaughtException', killall)

function killall (err) {
  tests.killall(err)
}
