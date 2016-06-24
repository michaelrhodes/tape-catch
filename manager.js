function Manager () {
  if (!(this instanceof Manager))
    return new Manager

  this.tests = []
}

Manager.prototype.add = function (test) {
  this.tests.push(test)
}

Manager.prototype.remove = function (test) {
  var tests = this.tests
  var l = tests.length

  while (l--)
    if (tests[l].name === test.name)
      tests.splice(l, 1)
}


Manager.prototype.killall = function (err) {
  var test
  var tests = this.tests.slice()
  if (!tests.length) return false

  var single = tests.length === 1
  while (test = tests.shift()) {
    if (single) test.error(err)
    test._end()
  }

  return true
}

module.exports = Manager
