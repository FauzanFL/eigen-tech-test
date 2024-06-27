const longest = (sentence) => {
  let words = sentence.split(' ');
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

const sentence = 'Saya sangat senang mengerjakan soal algoritma';

const longestWord = longest(sentence);
console.log(longestWord + ': ' + longestWord.length + ' character');
