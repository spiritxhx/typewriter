const sentence = "hello there from lighthouse labs";
const typeWriter = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, 70 * i);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 70 * sentence.length);
};

typeWriter(sentence);