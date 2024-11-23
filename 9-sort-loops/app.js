const array = [1, 40, -5, 10, 0];
const way = "decrease";

function sort(numbers, way) {
  const arr = [...numbers];
  switch (true) {
    case way === "increase":
      for (let index in arr) {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          }
        }
      }
      return arr;
    case way === "decrease":
      for (let index in arr) {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] < arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          }
        }
      }
      return arr;
    default:
      return `Сортировка ${way} не предусмотрена`;
  }
}

console.log(sort(array, way));
