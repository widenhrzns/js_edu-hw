const userLanguage = prompt("Введите язык:").toLowerCase();

switch (userLanguage) {
  case "en":
    console.log("Good afternoon!");
    break;
  case "ru":
    console.log("Добрый день!");
    break;
  case "de":
    console.log("Guten tag!");
    break;
  default:
    console.log("Language is not supposed!");
}
