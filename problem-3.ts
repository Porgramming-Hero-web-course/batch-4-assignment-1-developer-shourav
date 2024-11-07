const countWordOccurrences = (sentence: string, word: string): number => {
  return sentence.toLocaleLowerCase().split(word).length - 1;
};

const totalAppears = countWordOccurrences(
  "TypeScript is great. I love TypeScript!",
  "typescript"
);

