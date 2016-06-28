const tape = require('tape');
const mathFns = require('../src/math-fns');

tape('add', t => {
  t.equal(mathFns.add(10, 11), 21, 'adds two number');
  t.end();
});
