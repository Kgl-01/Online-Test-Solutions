const numberArr = [1, 2, 3, 5];

var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    const diffIndex = nums.indexOf(diff);
    if (diffIndex !== -1 && diffIndex !== index) {
      return [nums[index], nums[diffIndex]];
    }
  }
};

console.log(twoSum(numberArr, 7));
