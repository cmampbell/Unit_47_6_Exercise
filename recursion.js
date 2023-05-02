/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === i) return 1;

  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {

  // base case
  if (words.length === i) return 0;

  if (words[i].length > longest(words, i + 1)) {
    return words[i].length
  }
  else {
    return longest(words, i + 1)
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  // base case
  if (str.length === i) return ''

  if (i % 2 === 0) {
    return str[i] + everyOther(str, i + 1)
  } else {
    return everyOther(str, i + 1)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, j = str.length - 1) {

  // base case
  if (i >= j) return true

  if (str[i] === str[j]) {
    return isPalindrome(str, i + 1, j - 1)
  }

  return false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {

  // base case

  if (i === arr.length) return -1

  if (arr[i] === val) {
    return i
  } else {
    return findIndex(arr, val, i + 1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  //base case
  if (i === str.length) return ''

  return revString(str, i + 1) + str[i]
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = []

  function _searchValues(obj) {
    for (let key in obj) {
      // if value is string append to strings
      if (typeof obj[key] === 'string') {
        strings.push(obj[key])
      }
      // if value is an object recur deeper
      else if (typeof obj[key] === 'object') {
        _searchValues(obj[key])
      }
    }
  }
  _searchValues(obj)
  return strings
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx > rightIdx) return -1

  let midIdx = Math.floor((leftIdx + rightIdx) / 2)
  if (arr[midIdx] === val) return midIdx

  if (arr[midIdx] < val) {
    leftIdx = midIdx + 1
    return binarySearch(arr, val, leftIdx, rightIdx)
  } else if (arr[midIdx] > val) {
    rightIdx = midIdx - 1
    return binarySearch(arr, val, leftIdx, rightIdx)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
