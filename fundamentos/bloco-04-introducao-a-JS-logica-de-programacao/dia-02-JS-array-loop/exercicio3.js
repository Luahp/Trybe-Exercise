let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let contador = 0; contador < numbers.length; contador++) {
  sum = sum + numbers[contador];
}
let average = sum / numbers.length;
console.log(average);
