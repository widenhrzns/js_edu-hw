const arr = [1, 40, -5, 10, 0];
const way = "decrease";

function sort(numbers, way) {
  switch (true) {
    case way === "increase":
      for (let index in numbers) {
        for (let i = 0; i < numbers.length - 1; i++) {
          if (numbers[i] > numbers[i + 1]) {
            let temp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = temp;
          }
        }
      }
      return numbers;
    case way === "decrease":
      for (let index in numbers) {
        for (let i = 0; i < numbers.length - 1; i++) {
          if (numbers[i] < numbers[i + 1]) {
            let temp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = temp;
          }
        }
      }
      return numbers;
    default:
      return `Сортировка ${way} не предусмотрена`;
  }
}

console.log(sort(arr, way));
