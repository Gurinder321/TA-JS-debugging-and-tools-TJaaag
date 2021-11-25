function addNum(numA, numB) {
  return numA + numB;
}

function mulNum(numA, numB) {
  return numA * numB;
}

let result, excepted;

function testFn(message, callback) {
  try {
    callback();
    console.log(`🟢`, message);
  } catch (error) {
    console.error(error);
    console.log(`🔴`, message);
  }
}

function addFn() {
  result = addNum(10, 10);
  expected = 20;
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

testFn("Adding 10 and 2", addFn);

function mulFn() {
  result = mulNum(10, 10);
  expected = 100;
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

testFn("Multiple 10 and 10", mulFn);
