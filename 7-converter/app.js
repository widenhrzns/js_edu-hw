function currencyConverter(sum, currencyIn = "₽", currencyInto = "$") {
  switch (true) {
    case exchangeRateChecker(currencyIn, currencyInto) == "₽-$":
      return sum * 0.01;
    case exchangeRateChecker(currencyIn, currencyInto) == "$-₽":
      return sum * 99.87;
    case exchangeRateChecker(currencyIn, currencyInto) == "₽-€":
      return sum * 0.0095;
    case exchangeRateChecker(currencyIn, currencyInto) == "€-₽":
      return sum * 105.32;
    case exchangeRateChecker(currencyIn, currencyInto) == "$-€":
      return sum * 0.95;
    case exchangeRateChecker(currencyIn, currencyInto) == "€-$":
      return sum * 1.05;
    default:
      return null;
  }
}

function exchangeRateChecker(currencyIn, currencyInto) {
  switch (true) {
    case (currencyIn == "₽" || currencyIn == "rub" || currencyIn == "руб") &&
      (currencyInto == "$" || currencyInto == "usd" || currencyInto == "долл"):
      return "₽-$";
    case (currencyIn == "$" || currencyIn == "usd" || currencyIn == "долл") &&
      (currencyInto == "₽" || currencyInto == "rub" || currencyInto == "руб"):
      return "$-₽";
    case (currencyIn == "₽" || currencyIn == "rub" || currencyIn == "руб") &&
      (currencyInto == "€" || currencyInto == "eur" || currencyInto == "евро"):
      return "₽-€";
    case (currencyIn == "€" || currencyIn == "eur" || currencyIn == "евро") &&
      (currencyInto == "₽" || currencyInto == "rub" || currencyInto == "руб"):
      return "€-₽";
    case (currencyIn == "$" || currencyIn == "usd" || currencyIn == "долл") &&
      (currencyInto == "€" || currencyInto == "eur" || currencyInto == "евро"):
      return "$-€";
    case (currencyIn == "€" || currencyIn == "eur" || currencyIn == "евро") &&
      (currencyInto == "$" || currencyInto == "usd" || currencyInto == "долл"):
      return "€-$";
    // default:
    //   return null; обязательно ли дефолтный кейс, если налл мы выводим в другой функции ? Фактически, если мы не попадем в необходимый кейс, то получаем undefined, которого нет в функции currencyConverter, а значит выходим на дефолтный кейс и выводим налл
  }
}

console.log(currencyConverter(100, "долл", "€"));
