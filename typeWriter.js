const sentence = "hello there from lighthouse labs";
const typeWriter = (sentence) => {
  for (let i = 0; i <= sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(i === sentence.length ? '\n' : sentence[i]);
    }, 80 * i);
  }
};

typeWriter(sentence);