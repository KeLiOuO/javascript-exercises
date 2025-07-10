const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function (arr) {
  let sum = 1;
  for (num of arr) {
    sum *= num;
  }
  return sum;
};

const power = function (num, pow) {
  let res = 1;
  while (pow > 0) {
    res *= num;
    pow--;
  }
  return res;
};

const factorial = function (num) {
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
