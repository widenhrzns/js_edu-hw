const dates = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022/0",
  "00/13/202x",
];

function dateFilter(arr) {
  const res = arr
    .map((arrEl) => {
      const split = arrEl.includes("-") ? arrEl.split("-") : arrEl.split("/");
      if (split.length == 3) {
        switch (true) {
          case Number(split[2]) == NaN || split[2] <= 0 || split[2] > 2024:
          case Number(split[1]) == NaN || split[1] <= 0 || split[1] > 13:
          case Number(split[0]) == NaN || split[0] <= 0 || split[0] > 31:
            split.pop();
        }
      }
      return split;
    })
    .filter((arrEl) => arrEl.length == 3)
    .map((arrEl) => arrEl.join("-"));
  return res;
}

console.log(dateFilter(dates));
