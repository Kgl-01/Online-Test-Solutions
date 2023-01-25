const numberArr = [1, 2, 3, 5];

const getNumberArr = (arr, target) => {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [...arr, arr[i], arr[j]];
      } else {
        return -1;
      }
    }
  }
};

console.log(getNumberArr(numberArr, 7));
