/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

var twoSum = function(nums, target) {
	const numsClone = [];
	for (let item in nums) {
		numsClone[item] = nums[item]
	}
	
	let currNums;
	
	outer: for (let i=0; i<numsClone.length; i++) {

		for (let x=1; x<numsClone.length; x++) {

			let sum = numsClone[0] + numsClone[x];

			if (sum === target) {
				currNums = [numsClone[0], numsClone[x]];
				break outer;
			}
		};

		numsClone.push(numsClone[0]);
		numsClone.splice(0, 1);
	};
	
	let indexNums = [nums.indexOf(currNums[0]), nums.lastIndexOf(currNums[1])];
	return indexNums;
};