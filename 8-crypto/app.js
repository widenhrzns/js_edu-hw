const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function wordSplitter(word) {
  return word.split("");
}

function keyWord(password, key) {
  const passwordArr = wordSplitter(password);
  const keyArr = wordSplitter(key);
  const passwordLength = passwordArr.length;
  let keyLength = keyArr.length;
  if (keyLength === passwordLength) {
    return keyArr;
  }
  if (keyLength < passwordLength) {
    let i = 0;
    while (keyLength != passwordLength) {
      keyArr.push(keyArr[i]);
      i++;
      keyLength++;
    }
    return keyArr;
  }
  if (keyLength > passwordLength) {
    while (keyLength != passwordLength) {
      keyArr.pop();
      keyLength--;
    }
    return keyArr;
  }
}

function idChecker(word) {
  const id = [];
  for (let element of word) {
    id.push(letters.indexOf(element));
  }
  return id;
}

function crypto(password, key) {
  const cryptoResult = [];
  for (let i = 0; i < wordSplitter(password).length; i++) {
    cryptoResult.push(
      idChecker(password)[i] + idChecker(keyWord(password, key))[i]
    );
  }
  for (let index in cryptoResult) {
    cryptoResult[index] = cryptoResult[index] % letters.length;
  }
  for (let index in cryptoResult) {
    cryptoResult[index] = letters[cryptoResult[index]];
  }
  return cryptoResult.join("");
}

function decoder(cypher, key) {
  const passwordResult = [];
  const cypherArr = cypher.split("");
  const keyArr = keyWord(cypher, key);
  for (let index in cypherArr) {
    passwordResult.push(idChecker(cypherArr)[index] - idChecker(keyArr)[index]);
  }
  for (let index in passwordResult) {
    if (passwordResult[index] < 0) {
      passwordResult[index] += letters.length;
    }
    passwordResult[index] = passwordResult[index] % letters.length;
  }
  for (let index in passwordResult) {
    passwordResult[index] = letters[passwordResult[index]];
  }
  return passwordResult.join("");
}

function check(password, cypher, key) {
  return password == decoder(cypher, key);
}

console.log(
  crypto(
    prompt("Введите пароль:").toLowerCase(),
    prompt("Введите ключевое слово:").toLowerCase()
  )
);

console.log(
  check(
    prompt("Введите пароль:").toLowerCase(),
    prompt("Введите зашифрованный пароль:").toLowerCase(),
    prompt("Введите ключ:").toLowerCase()
  )
);
