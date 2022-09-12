/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy(sentence) {
  // your code here...
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arrSent = sentence.split(' ');
  let newSent = []

  for (let i = 0; i < arrSent.length; i++) {
    let tempWord = arrSent[i].split('');

    for (let i = tempWord.length - 1; i >= 0; i--) {
      if (vowels.includes(tempWord[i])) {
        tempWord.splice(i, 1);
        break;
      }
    }

    newSent.push(tempWord.join(''));
  }

  return newSent.join(' ');
}

hipsterfy("proper tonic panther"); // => "propr tonc panthr"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
