var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}
};

// loop through the nums array twice 
// first time at index 0 
// second at index 1 
// then you check if the sum of values equals the target 
