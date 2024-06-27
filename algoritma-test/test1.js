const reverseAlphabet = (word) => {
  let result = '';
  const lastChar = word[word.length - 1];
  for (let i = word.length - 2; i >= 0; i--) {
    result += word[i];
  }
  return result + lastChar;
};

const word = 'NEGIE1';
console.log(reverseAlphabet(word));
