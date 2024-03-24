function generateRandomNumber(min = 10, max = 100) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function generateRandomOperator() {
  const operators = "+-*/";
  const randomIndex = Math.floor(Math.random() * operators.length);

  return operators.charAt(randomIndex);
}

for (let i = 0; i < 4; i++) {
  var num1 = generateRandomNumber();
  var num2 = generateRandomNumber();

  const operator = generateRandomOperator();

  var answer = +prompt(num1 + operator + num2 + " =");
}
