type PositionalValue<T> = {
  value: T;
  index: number;
};

function findSmallest<T>(arr: T[]): PositionalValue<T> {
  let [smallest, ...rest] = arr;
  let smallestIndex = 0;
  if (rest.length === 0) {
    return {
      index: 0,
      value: smallest,
    };
  }
  for (let idx = 0; idx < rest.length; idx++) {
    if (rest[idx] < smallest) {
      smallest = rest[idx];
      smallestIndex = idx + 1;
    }
  }
  return {
    index: smallestIndex,
    value: smallest,
  };
}

export function selectionSort<T>(arr: T[]): T[] {
  const sorted = Array.from(arr);

  for (let idx = 0; idx < arr.length; idx++) {
    const { index, value } = findSmallest(sorted.slice(idx));
    sorted[index + idx] = sorted[idx];
    sorted[idx] = value;
  }
  return sorted;
}

export function selectionSortAlt<T>(arr: T[]): T[] {
  const sorted = Array.from(arr);

  for (let sortedIndex = 0; sortedIndex < arr.length; sortedIndex++) {
    let smallestIndex = sortedIndex;
    for (let innerIndex = sortedIndex + 1; innerIndex < arr.length; innerIndex++) {
      if (sorted[innerIndex] < sorted[smallestIndex]) {
        smallestIndex = innerIndex;
      }
    }
    const smallestValue = sorted[smallestIndex];
    sorted[smallestIndex] = sorted[sortedIndex];
    sorted[sortedIndex] = smallestValue;
  }
  return sorted;
}

export default {
  selectionSort,
  selectionSortAlt,
};
