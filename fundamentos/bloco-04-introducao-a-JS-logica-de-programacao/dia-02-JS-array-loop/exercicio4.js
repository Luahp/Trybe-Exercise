let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let contador = 0; contador < numbers.length; contador++) {
  result = result + numbers[contador];
}

result = result / numbers.length;

if (result > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual que 20');
}
