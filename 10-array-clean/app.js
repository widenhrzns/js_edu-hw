const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function leaveOdd(num) {
  return num % 2 !== 1;
}

function leaveEven(num) {
  return num % 2 !== 0;
}

function leaveTens(num) {
  return num % 10 !== 0;
}

function delFunction(arr, filter) {
  const resultArr = [];
  for (let i in arr) {
    const isDel = filter(arr[i]);
    if (!isDel) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

console.log(delFunction(array, leaveTens));
