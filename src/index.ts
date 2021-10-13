interface Partition {
  lower: number[];
  upper: number[];
}

const random = (max: number): number => {
  const result = Math.floor(Math.random() * max);
  return result;
};

const doPartitioning = (
  acc: Partition,
  value: number,
  pivot: number,
): Partition => {
  if (value > pivot) {
    const newArr = [...acc.upper, value];
    const result = { ...acc, upper: newArr };
    return result;
  }
  if (value < pivot) {
    const newArr = [...acc.lower, value];
    const result = { ...acc, lower: newArr };
    return result;
  }
  return acc;
};

export const partition = (array: number[], pivot: number): Partition => {
  const emptyArr: number[] = [];
  const result = array.reduce(
    (acc, value) => doPartitioning(acc, value, pivot),
    { lower: emptyArr, upper: emptyArr },
  );
  return result;
};

export const quickSort = (array: number[]): number[] => {
  if (array.length === 1 || array.length === 0) return array;

  const emptyArr = [] as number[];
  const pivot = array[random(array.length)];
  const { lower, upper } = partition(array, pivot);
  const result = emptyArr.concat(quickSort(lower), [pivot], quickSort(upper));
  return result;
};
