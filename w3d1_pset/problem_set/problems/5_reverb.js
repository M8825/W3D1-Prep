/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = word.length - 2; i >= 0; i--) {
    if(vowels.includes(word[i])) {
      return word.concat(word.slice(i));
    }
  }

  return word
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
