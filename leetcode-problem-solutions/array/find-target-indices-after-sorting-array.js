/**
 * 
 * Leetcode : https://leetcode.com/problems/find-target-indices-after-sorting-array/submissions/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
   if(nums.length == 1 && nums[0] == target) return [0];
   if(nums.length == 1 && nums[0] != target) return [];
   nums.sort((a, b) => a - b)
   return binarySearch2(nums, target);
};


function binarySearch2(arr, target) {
	let l = 0
	let r = arr.length - 1

	while(l <= r) {
		let middle = Math.floor((l + r) / 2)

		if (arr[middle] === target) {
			return middle
		} else if (target < arr[middle]) {
			r = middle - 1
		} else {
			l = middle + 1
		}
	}

	return -1
}
function   binarySearch(arr, target){
 //if(arr.length < 1) return -1;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex){
   let middleIndex = Math.floor( (leftIndex + rightIndex) / 2 );
   if(arr[middleIndex] === target) return middleIndex;
   if(target < arr[middleIndex]){
     rightIndex = middleIndex - 1;
   }else{
     leftIndex = middleIndex + 1;
   }
  }
  return -1
}
function searchTarget(arr, target){
    if(arr.length < 2) return arr;
    let result = []
    
   for(i=0; i< arr.length; i++){
       if(arr[i] === target){
            result.push(i);
       }
   }
    return result;
}


function quickSort(arr){
  if(arr.length < 2) return arr;
  let pivot = arr[arr.length - 1]
  let leftArr = []
  let rightArr = []
  
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] < pivot){
      leftArr.push(arr[i]);
    }else{
      rightArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}


console.log(targetIndices([1,2,5,2,3],5))
