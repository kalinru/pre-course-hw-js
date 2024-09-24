let number1 = Math.floor(Math.random() * 100);

const isOdd = number1 % 2 !== 0;

const result = `${number1}: это ${isOdd ? "не" : ""}четное число`;

console.log(result);
