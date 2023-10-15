function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        // Swap elements arr[i] and arr[i+1]
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const numbers = [10, 25, 5, 42, 8, 50, 15];
const sortedNumbers = bubbleSort(numbers);

console.log("Sorted numbers (in descending order):", sortedNumbers);
