let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];

for (let contador = 0; contador < numbers.length; contador++) {
  if (contador + 1 < numbers.length) {
    novoArray.push(numbers[contador] * numbers[contador + 1]);
  } else {
    novoArray.push(numbers[contador] * 2);
  }
}
console.log(novoArray);
