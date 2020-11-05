/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // Can't have a negative factorial
  if (n < 0) {
    return null;
  }
  // Base case
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // Base case
  // When array is empty
  if (array.length === 0) {
    return 0;
  }
  // Recursive Case
  // Array has elements left in it
  // Copy the array
  // Remove last element
  // add it to result of calling this function on remaining array
  let copy = array.slice();
  return copy.pop() + sum(copy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // Create sum variable
  let sum = 0;
  // Iterate over the array
  for (let i = 0; i < array.length; i++) {
    // Base Case
    // Element is not an array/object
    if ( typeof array[i] !== 'object') {
      // add element to sum
      sum += array[i];
    } else {  // Recursive Case
      // Element is an array
      sum += arraySum(array[i]);
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  //Base Case
  if (n < 2) {
    return n === 0 ? true : false;
  } else {
    //Recursive Case
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return n;
  }
  if (n > 0) n--;
  else if (n < 0) n++;
  return n + sumBelow(n);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (Math.abs(x - y) <= 1) {
    return [];
  }
  x - y < 0 ? x++ : x--;
  return [x].concat(range(x,y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base case
  if (exp === 0) {
    return 1;
  }

  // Optimize for positive even exp
  if (exp % 2 === 0 && exp > 0) {
    let temp = exponent(base, exp/2);
    return temp * temp;
  }

  // Recursive case
  if (exp < 0) {
    exp++;
    return exponent(base,exp) / base;
  } else {
    exp --;
    return base * exponent(base,exp);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n < 2) {
    return n === 1 ? true : false;
  }
  n = n / 2;
  return powerOfTwo(n)
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // Base Case
  // string length === 1
  if (string.length === 1) {
    return string;
  }
  // Recursive Case
  let lastIndex = string.length - 1;
  return  string[lastIndex] + reverse(string.substring(0,lastIndex));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  if (string.length <= 1) {
    return true;
  }

  // If first and last are equal
  let lastIndex = string.length - 1;
  if (string[0] === string[lastIndex]) {
    // recurse - first & last chars
    return palindrome(string.substring(1,lastIndex));
  } else {// otherwise
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y === 0) {
    return NaN;
  }

  let absY = y < 0 ? 0 - y : y;
  let absX = x < 0 ? 0 - x : x;

  if (absX < absY) {
    return x;
  }

  let newX = x >= 0 ? x - y : x + y;
  return modulo(newX, absY);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0 || x === 0) {
    return 0;
  }

  let absY = y < 0 ? 0 - y : y;
  let absX = x < 0 ? 0 - x : x;
  let newY = y < 0 ? y + 1 : y - 1;

  if ((x < 0 && y < 0) || (x > 0 && y > 0)) {
    return absX + multiply(x, newY);
  } else if (x < 0 || y < 0) {
    return -absX + multiply(x, newY);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  let absY = y < 0 ? 0 - y : y;
  let absX = x < 0 ? 0 - x : x;

  if (absX - absY < 0) {
    return 0;
  }

  let newX = x < 0 ? x + absY : x - absY;
  if ((x < 0 && y < 0) || (x > 0 && y > 0)) {
    return 1 + divide(newX,y);
  } else if (x < 0 || y < 0) {
    return -1 - divide(newX,y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }

  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }

  let newX = y;
  let newY = x % y;
  return gcd(newX,newY);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) {
    return false;
  }
  if ((str1.length + str2.length < 2)) {
    return true;
  }
  str1 = str1.substring(1);
  str2 = str2.substring(1);

  return compareStr(str1, str2);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  let newStr = str.substring(1);
  let firstChar = [str[0]];
  return firstChar.concat(createArray(newStr));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }
  let lastIndex = array.length - 1;
  let lastEl = [array[lastIndex]];
  let newArray = array.slice(0,lastIndex);
  return lastEl.concat(reverseArr(newArray));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  length--;
  return [value].concat(buildList(value, length));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  }
  let value = (n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '');
  value = value === '' ? value + n : value;
  n--;
  return fizzBuzz(n).concat([value]);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }

  let newSlice = array.slice(1);
  if (array[0] === value) {
    return 1 + countOccurrence(newSlice, value);
  } else  {
    return 0 + countOccurrence(newSlice, value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  let newSlice = array.slice(1);
  return [callback(array[0])].concat(rMap(newSlice, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  for (let prop in obj) {
    // If value is an object
    if ((typeof obj[prop] === 'object') && !(Array.isArray(obj[prop])))
      // call this again and add to counter
      count += countKeysInObj(obj[prop], key);
    // If prop === key
    if (prop === key) {
      // increment counter
      count++;
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for (let prop in obj) {
    // If value is an object
    if ((typeof obj[prop] === 'object') && !(Array.isArray(obj[prop])))
      // call this again and add to counter
      count += countValuesInObj(obj[prop], value);
    // If prop === key
    if (obj[prop] === value) {
      // increment counter
      count++;
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let prop in obj) {
    if ((typeof obj[prop] === 'object') && !(Array.isArray(obj[prop]))) {
      // run this again
      replaceKeysInObj(obj[prop], oldKey, newKey);
    }
    if (prop === oldKey) {
      let value = obj[prop];
      Object.assign(obj, {[newKey]: obj[oldKey] });
      delete obj[oldKey];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  }
  let fib = fibonacci(n - 1);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return nthFibo(n -1 ) + nthFibo(n - 2 < 0 ? 0 : n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let newSlice = array.slice(0,array.length - 1);
  let capitalized = capitalizeWords(newSlice);
  capitalized.push(array[array.length - 1].toUpperCase());
  return capitalized;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  // 'colin'[0].toUpperCase() + 'colin'.substring(1)
  if (array.length === 1) {
    let word = array[0];
    return [word[0].toUpperCase() + word.substring(1)];
  }
  let newSlice = array.slice(0,array.length - 1);
  let capitalized = capitalizeFirst(newSlice);
  let word = array[array.length - 1];
  capitalized.push(word[0].toUpperCase() + word.substring(1));
  return capitalized;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  // if its not an object
  let sum = 0;
  if (typeof obj !== 'object') {
    if (obj % 2 === 0) {
      return obj;
    } else {
      return 0;
    }
  }
  // Ohterwise
  for (let key in obj) {
    // Iterate over it and sum the result of this function
    sum += nestedEvenSum(obj[key]);
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  let flattened = [];
  if (!Array.isArray(array)) {
    return [array];
  }
  for (let i = 0; i < array.length; i++) {
    flattened = flattened.concat(flatten(array[i]));
  }
  return flattened;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  // Return empty object if empty string passed in
  obj = obj || {};
  if (str.length === 0) {
    return {};
  }
  // grab first char
  let char = str[0];
  // Test if it exists in obj
  if (obj[char] === undefined) {
    // Add if it doesn't exit and set to 1
    obj[char] = 1;
  } else {
  // Incrse value of key value by 1
  obj[char]++;
  }

  // Recursive Case
  // str has more than 1 character
  if (str.length > 1) {
    // increse count or add key and set value to 1
    letterTally(str.substring(1), obj);
  }
  // Base Case
  return obj;

};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  //Base Case
  // list length ===0
  if (list.length === 0) {
    return [];
  }
  // get first element
  let el = list[0];
  // If it does not equal the next element
  if (el !== list[1]) {
    // Add it and make recursive call removing 1st element
    return [el].concat(compress(list.slice(1)));
  } else { // Otherwise
    // return recursive call without adding element
    return compress(list.slice(1));
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }
  let auged = array[0]
  auged.push(aug);
  if (array.length === 1) {
    return [auged];
  }
  let result = augmentElements(array.slice(1), aug);
  result.unshift(auged);
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 1) {
    return array[0];
  } else if (array.length === 0) {
    return [];
  }

  let first = array[0];
  if (first === 0 && array[1] === 0) {
    return minimizeZeroes(array.slice(1));
  } else {
    return [first].concat(minimizeZeroes(array.slice(1)));
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return [Math.abs(array[0])];
  }
  let inputCopy = array.slice();
  let currentEl = Math.abs(inputCopy.pop());
  let previousNums = alternateSign(inputCopy);
  let lastPrevious = previousNums[previousNums.length - 1];
  currentEl = (- lastPrevious * currentEl) / Math.abs(lastPrevious);
  return previousNums.concat(currentEl);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
