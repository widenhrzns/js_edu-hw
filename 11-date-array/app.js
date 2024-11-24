const dates = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022/0",
  "00/13/202x",
];

function dateFilter(arr, fn) {
  const res = arr
    .map((arrEl) => (arrEl.includes("-") ? arrEl.split("-") : arrEl.split("/")))
    .filter((arrEl) => fn(arrEl));
  return res.map((arrEl) => arrEl.join("-"));
}

function dateChecker(arr) {
  const newArr = arr.filter((arrEl) => arrEl > 0);
  if (newArr.length == 3) {
    const [day, month, year] = arr;
    const daysInMonth = [
      31,
      year % 4 == 0 || (year % 100 == 0 && year % 400 == 0) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    const days = day > 0 && day <= daysInMonth[month - 1];
    const months = month > 0 && month <= 12;
    const years = year > 0;
    return days && months && years;
  }
  return false;
}

console.log(dateFilter(dates, dateChecker));
