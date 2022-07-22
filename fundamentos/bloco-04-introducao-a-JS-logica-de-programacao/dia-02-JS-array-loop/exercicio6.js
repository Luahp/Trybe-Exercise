let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numberOdd = 0;

for (let contador = 0; contador < numbers.length; contador++) {
  if (numbers[contador] % 2 !== 0) {
    numberOdd = numberOdd + 1;
  }
}

if (numberOdd === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(numberOdd);
}
