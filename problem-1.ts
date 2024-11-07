const sumArray = (arrayOfNum: number[]): number => {
  const result = arrayOfNum.reduce((acc, num) => acc + num, 0);
  return result;
};

const sumArrayOutput = sumArray([1, 2, 3, 4, 5]);
