const dateArray = [
  "29-02-2024", // true - 2024 високосный год
  "29-02-2023", // false - 2023 не високосный год
  "02/29/2024", // true - EN формат записи 29-02-2024
  "02/29/2023", // false - EN формат записи 29-02-2023
  "31-09-2024", // false - 31 сентября не бывает
  "30-09-2024", // true - Тут проблем нет - корректная дата
  "30d-09m-2024y", // true / false - корректная дата при условии parseInt для валидации числа, при Number - нет
  "30.01.2024", // true / false - зависит от парсинга разделителей
];

function dateFilter(arr, fn) {
  // const res = arr
  //   .map((arrEl) => (arrEl.includes("-") ? arrEl.split("-") : arrEl.split("/")))
  //   .filter((arrEl) => fn(arrEl));
  const typeEN = arr.map((arrEl) =>
    arrEl.includes("-") ? arrEl.split("-") : 0
  );
  const typeRU = arr.map((arrEl) =>
    arrEl.includes(".")
      ? arrEl.split(".")
      : arrEl.includes("/")
      ? arrEl.split("/")
      : 0
  );
  return typeRU;
}
console.log(dateFilter(dateArray));
// function dateChecker(arr) {
//   const newArr = arr.filter((arrEl) => arrEl > 0);
//   if (newArr.length == 3) {
//     const [day, month, year] = arr;
//     const daysInMonth = [
//       31,
//       year % 4 == 0 || (year % 100 == 0 && year % 400 == 0) ? 29 : 28,
//       31,
//       30,
//       31,
//       30,
//       31,
//       31,
//       30,
//       31,
//       30,
//       31,
//     ];
//     const days = day > 0 && day <= daysInMonth[month - 1];
//     const months = month > 0 && month <= 12;
//     const years = year > 0;
//     return days && months && years;
//   }
//   return false;
// }
