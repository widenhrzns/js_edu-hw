"use strict";

const page = {
  inputs: {
    input1: document.querySelector(".input1"),
    input2: document.querySelector(".input2"),
  },
  result: document.querySelector(".result"),
};

function resultOfOperation(event) {
  const elements = [page.inputs.input1, page.inputs.input2];
  const operation = event.target.innerText;
  const numbers = validateAndGetInputData(elements);
  if (!numbers) {
    return (page.result.innerText = `Необходимо ввести все числа`);
  }
  resetInputs(elements);
  page.result.innerText = `res: ${calcInputs(numbers, operation)}`;
}

function validateAndGetInputData(elements) {
  let isValid = true;
  const numbers = [];
  for (const element of elements) {
    const elementValue = element.value;
    if (!elementValue) {
      isValid = false;
    }
    numbers.push(Number(elementValue));
  }
  if (!isValid) {
    return false;
  }
  return numbers;
}

function calcInputs(numbers, operation) {
  switch (operation) {
    case "+":
      return numbers.reduce((acc, input) => (acc += input));
    case "-":
      return numbers.reduce((acc, input) => (acc -= input));
    case "*":
      return numbers.reduce((acc, input) => (acc *= input)).toFixed(2);
    case "/":
      return numbers.reduce((acc, input) => (acc /= input)).toFixed(2);
  }
}

function resetInputs(elements) {
  for (const input of elements) {
    input.value = "";
  }
}
