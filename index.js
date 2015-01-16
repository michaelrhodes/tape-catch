var tape = require('tape')

exports = module.exports = tape
exports.Test.prototype.run = function () {
  if (!this._cb || this._skip) {
    return this._end()
  }

  this.emit('prerun')

  try {
    this._cb(this)
  }
  catch (err) {
    this.error(err)
    this._end()
    return
  }

  this.emit('run') 
}
