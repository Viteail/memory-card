export const generateUniqueRandomNumbers = (
  min: number,
  max: number,
  count: number,
): number[] => {
  if (max - min + 1 < count)
    throw new Error("Range too small to generate unnique numbers");

  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
};
