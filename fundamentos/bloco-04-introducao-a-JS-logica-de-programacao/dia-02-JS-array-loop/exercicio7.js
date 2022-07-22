let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for (let contador = 1; contador < numbers.length; contador++) {
  if (numbers[contador] < menorNumero) {
    menorNumero = numbers[contador];
  }
}

console.log(menorNumero);
