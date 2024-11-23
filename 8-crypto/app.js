const letters =
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!№;%:?*~(),./|=-_+@";

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
    id.push(letters.split("").indexOf(element));
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
    cryptoResult[index] = cryptoResult[index] % letters.split("").length;
  }
  for (let index in cryptoResult) {
    cryptoResult[index] = letters.split("")[cryptoResult[index]];
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
      passwordResult[index] += letters.split("").length;
    }
    passwordResult[index] = passwordResult[index] % letters.split("").length;
  }
  for (let index in passwordResult) {
    passwordResult[index] = letters.split("")[passwordResult[index]];
  }
  return passwordResult.join("");
}

function check(password, cypher, key) {
  return password == decoder(cypher, key);
}

console.log(
  crypto(prompt("Введите пароль:"), prompt("Введите ключевое слово:"))
);

console.log(
  check(
    prompt("Введите пароль:"),
    prompt("Введите зашифрованный пароль:"),
    prompt("Введите ключ:")
  )
);
