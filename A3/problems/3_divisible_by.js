/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/

function divisibleByFivePairSum(array){
  // your code here...
  let allPairs = [];

  for (let i = 0; i < array.length - 1; i++) { // length - 1 is necessary to avoid adding next (which doesn't exists)
    for (let j = i + 1; j < array.length; j++) {  // to the last element
  
      let tempSum = array[i] + array[j];

      if (tempSum % 5 === 0) {
        allPairs.push([i, j]);
      }
    }
  }

  return allPairs;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
