#!/usr/bin/env node

var path = require('path')
var mkdirp = require('mkdirp')
var cpr = require('cpr')

var src = path.resolve(__dirname, '../node_modules/tape/test')
var dest = path.resolve(__dirname, '../test')

mkdirp(dest, function (err) {
  if (err) process.exit(1)
  cpr(src, dest, function (err, files) {
    process.exit(err ? 1 : 0)
  })
})
