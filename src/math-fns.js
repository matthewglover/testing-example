function add(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function rem(b, a) {
  return a - (Math.floor(a / b) * b);
}

module.exports = {
  add,
  mult,
  div,
  rem,
};
