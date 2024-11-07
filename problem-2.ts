function removeDuplicates(arrayOfNumbers: number[]): number[] {
  const uniqueNumber: Set<number> = new Set(arrayOfNumbers);
  const arrayOfUniqueNumbers: number[] = [...uniqueNumber];

  return arrayOfUniqueNumbers;
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
