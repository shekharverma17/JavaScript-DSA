/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let tempArr = [...nums];
    let smallerCount = {};
    let count = [];
   
    tempArr.sort((a,b)=> b-a)

    for(i=0; i<tempArr.length; i++){     
        if(tempArr[i] > tempArr[i+1] ){
            smallerCount[tempArr[i]] = (tempArr.length-1-i);      
        } 
        if(i == tempArr.length-1){
            smallerCount[tempArr[i]] = 0;    
        }
    }
    for(let k=0; k<nums.length; k++){
        count.push(smallerCount[nums[k]])
    }
    return count;
};


https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/525004/JavaScript-Clean-solution-using-array-sort

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function smallerNumbersThanCurrent(nums) {
    const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
    const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
    return nums.map(num => map.get(num));
  }
  Complexity:
  
  Time O(NlogN)
  Space O(N)
  
  Example:
  nums [8,1,2,2,3]
  
  Sort nums by descending order
  sorted [8,3,2,2,1]
  Create map with counts
  map: {8:4,3:3,2:1,1:0}
  Return an array with counts stored in map
  result: [4,0,1,1,3]

https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/526266/O(N)-O(NlogN)-O(n2)-3-%2B-a-different-solutions-in-Go


https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/1419341/JavaScript-Elegant-O(n)-solution
JavaScript - Elegant O(n) solution
7
guyariely's avatar
guyariely
10
Last Edit: August 22, 2021 9:59 PM

546 VIEWS

The key thing to understand here is that the numbers are in the range of 0 to 100.
This allows us to compute the amount of smaller numbers for every possible number in constant time.

Let's define: smaller(n) = amount of numbers smaller than n in nums.

We start off by initializing two arrays:

const frequencies = new Array(101).fill(0);
const smaller = new Array(101).fill(0);
Then we want to compute what is the frequency of any given 0 <= n <= 100 in the array:

nums.forEach(num => frequencies[num]++);
Now for the important part:

We will compute smaller(n) for every 0 <= n <= 100.

The value of smaller(n) is how many numbers are smaller than the number before it plus the frequency of that number in nums.

(If that sentence didn't make sense to you, read it again or try playing with some examples. Continue reading after you're comfortable with the idea)

Notice how this is exactly the definition from the beginning.
"how many numbers are smaller than the number before it" is just smaller(n-1).

So in other words: smaller(n) = smaller(n-1) + frequency(n-1)

This is great, we can now just compute smaller(n) on the go:

 for (let i = 1; i < 101; i++) {
   smaller[i] = smaller[i - 1] + frequencies[i - 1];
}
At last, we actually don't want every smaller(n), just the ones from the nums array, and in the same order. So we will map every num in nums to smaller(num):

return nums.map(num => smaller[num]);
And this is the entire code:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const frequencies = new Array(101).fill(0);
  const smaller = new Array(101).fill(0);

  nums.forEach(num => frequencies[num]++);

  for (let i = 1; i < 101; i++) {
    smaller[i] = smaller[i - 1] + frequencies[i - 1];
  }

  return nums.map(num => smaller[num]);
}
Side note: this method is often described as "dynamic programming". Basically, we broke down the value of smaller(n) to a simpler sub-problem and used it to optimize the computation of smaller(n).






O(N), O(NlogN), O(n^2) 3 + α different solutions in Go
8
usk83's avatar
usk83
28
Last Edit: March 2, 2020 10:10 AM

485 VIEWS

1. Count the number of occurrences
Time Complexity: O(N) (N + 100 + N)
Space Complexity: O(1) (101 + answer)
Runtime: 4 ms (faster than 100.00%)
Memory Usage: 3.1 MB (less than 100.00%)

func smallerNumbersThanCurrent(nums []int) []int {
  occurrences := [101]int{}
  for _, num := range nums {
    occurrences[num]++
  }
  prevOccurrences := occurrences[0]
  occurrences[0] = 0
  for i := range occurrences[1:] {
    occurrences[i+1], prevOccurrences = prevOccurrences, prevOccurrences+occurrences[i+1]
  }
  counts := make([]int, len(nums))
  for i, num := range nums {
    counts[i] = occurrences[num]
  }
  return counts
}
2-1. Sort and binary search
Time Complexity: O(NlogN) (N + NlogN + NlogN)
Space Complexity: O(N) (N + logN + answer)
Runtime: 4 ms (faster than 100.00%)
Memory Usage: 3.2 MB (less than 100.00%)

func smallerNumbersThanCurrent(nums []int) []int {
 sortedNums := make([]int, len(nums))
 copy(sortedNums, nums)
 sort.Ints(sortedNums)
 counts := make([]int, len(nums))
 for i, num := range nums {
   counts[i] = sort.Search(len(sortedNums), func(j int) bool {
     return num <= sortedNums[j]
   })
 }
 return counts
}
2-2. Sort and binary search with cache
Time Complexity: O(NlogN) (N + NlogN + NlogN)
Space Complexity: O(N) (N + logN + N + answer)
Runtime: 4 ms (faster than 100.00%)
Memory Usage: 3.5 MB (less than 100.00%)

func smallerNumbersThanCurrent(nums []int) []int {
 sortedNums := make([]int, len(nums))
 copy(sortedNums, nums)
 sort.Ints(sortedNums)
 counts := make([]int, len(nums))
 cache := map[int]int{}
 for i, num := range nums {
   if count, ok := cache[num]; ok {
     counts[i] = count
     continue
   }
   counts[i] = sort.Search(len(sortedNums), func(j int) bool {
     return num <= sortedNums[j]
   })
   cache[num] = counts[i]
 }
 return counts
}
2-3. Sort and pre-calculate the index of each number as map
ref: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/525004/JavaScript-Clean-solution-using-array-sort

Time Complexity: O(NlogN) (N + NlogN + N + N)
Space Complexity: O(N) (N + logN + N + answer)
Runtime: 4 ms (faster than 95.08%)
Memory Usage: 3.5 MB (less than 100.00%)

func smallerNumbersThanCurrent(nums []int) []int {
  sortedNums := make([]int, len(nums))
  copy(sortedNums, nums)
  sort.Ints(sortedNums)
  countMap := map[int]int{}
  for i, num := range sortedNums {
    if _, ok := countMap[num]; !ok {
      countMap[num] = i
    }
  }
  counts := make([]int, len(nums))
  for i, num := range nums {
    counts[i] = countMap[num]
  }
  return counts
}
3-1. Brute force
Time Complexity: O(N^2)
Space Complexity: O(1)
Runtime: 12 ms (faster than 100.00%)
Memory Usage: 3.1 MB (less than 100.00%)

func smallerNumbersThanCurrent(nums []int) []int {
 counts := make([]int, len(nums))
 for i, current := range nums {
   for _, target := range nums {
     if current > target {
       counts[i]++
     }
   }
 }
 return counts
}
3-2. Brute force with cache
Time Complexity: O(N^2)
Space Complexity: O(N) (N + answer)
Runtime: 4 ms (faster than 100.00%)
Memory Usage: 3.4 MB (less than 100.00%)

func smallerNumbersThanCurrent(nums []int) []int {
 counts := make([]int, len(nums))
 cache := map[int]int{}
 for i, current := range nums {
   if count, ok := cache[current]; ok {
     counts[i] = count
     continue
   }
   for _, target := range nums {
     if current > target {
       counts[i]++
     }
   }
   cache[current] = counts[i]
 }
 return counts
}