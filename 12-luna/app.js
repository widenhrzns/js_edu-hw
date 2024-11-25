const card = "4561-2612-1234-5467";

function isCard(number) {
  let cleanNum = number.trim().replaceAll("-", "");
  if (!isNaN(Number(cleanNum))) {
    cleanNum = cleanNum.split("").map((el) => Number(el));
    const oddNeven = Number((cleanNum.length - 1) % 2 == 0);
    for (let i = oddNeven; i < cleanNum.length - 1; i += 2) {
      cleanNum[i] = cleanNum[i] * 2;
      cleanNum[i] = cleanNum[i] > 9 ? cleanNum[i] - 9 : cleanNum[i];
    }
    return cleanNum.reduce((acc, num) => (acc += num), 0) % 10 == 0;
  }
  return `Тип карты: ${number}, не поддерживается`;
}

console.log(isCard(card));
