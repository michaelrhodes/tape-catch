var test = require('tap').test;
var concat = require('concat-stream');
var run = require('run-series');
var spawn = require('child_process').spawn;

test('catch exceptions', function (t) {
    t.plan(10);

    var tests = [];
    ['catch', 'catch-harness.js'].forEach(function (file) {
        tests.push(function (next) {
            var ps = spawn(process.execPath, [ __dirname + '/catch-exceptions/' + file ]);
            ps.on('exit', function (code) {
                t.equal(code, 1);
                next();
            });
            ps.stdout.pipe(concat(function (body) {
              var results = body.toString();
              if (/(Reference|Syntax)Error/.test(results)) {
                  t.pass('reported exception');
              }
              var tests = (/# tests\s+([0-9]+)/.exec(results) || [])[1];
              var pass = (/# pass\s+([0-9]+)/.exec(results) || [])[1];
              var fail = (/# fail\s+([0-9]+)/.exec(results) || [])[1];
              t.equal(tests, '5');
              t.equal(pass, '1'); 
              t.equal(fail, '4');
            }));
        });
    });
    run(tests);
});
