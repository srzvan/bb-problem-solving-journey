/*
  Se dă string-ul "110110011".
  Care este lungimea celui mai lung
    substring care conține numai "1" și
    îl putem obține făcând flip la un singur "0"?
*/

export function longestBinarySubstring(str: string) {
  console.log(str);
  throw new Error("Not implemented");
}

/*
  input: nums [1, 2, 5, 6, 7]
  k = 15

  What is the length of the longest
    sub-array where the product
    of its elements is less than k?
*/

export function maxLen(nums: number[], compare: number) {
  let start = 0;
  let maxLen = 0;
  let product = 1;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      return nums.length;
    }

    product *= nums[end];

    while (product >= compare) {
      product /= nums[start];
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

/*
  input: nums [10, 5, 2, 6]
  k = 100

  What is the number of subarrays
    where the product of all the elements
    is less than k?
*/
export function numOfSubarrays(nums: number[], compare: number) {
  let start = 0;
  let count = 0;
  let product = 1;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      return (nums.length * (nums.length + 1)) / 2;
    }

    product *= nums[end];

    while (product >= compare) {
      product /= nums[start];
      start++;
    }

    let length = end - start + 1;

    count += length;
  }

  return count;
}
