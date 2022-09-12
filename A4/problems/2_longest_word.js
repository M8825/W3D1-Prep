/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  // your code here...
  if (sentence.length === 0) return ''
  let arrSentence = sentence.split(' ');
  let logestWord = arrSentence[0];

  for (let i = 1; i < arrSentence.length; i++) {
    if (arrSentence[i].length >= logestWord.length) {
      logestWord = arrSentence[i];
    }
  }

  return logestWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
