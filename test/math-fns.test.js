const tape = require('tape');
const mathFns = require('../src/math-fns');

tape('add', t => {
  t.equal(mathFns.add(10, 11), 21, 'adds two number');
  t.end();
});

tape('mult', t => {
  t.equal(mathFns.mult(2, 2), 4, 'multiplies two numbers');
  t.end();
});
