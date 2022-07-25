//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let retornaMaior = array[0];
let retornaMenor = 0;
let compara = '';

for (contador = 0; contador < array.length; contador++) {
  compara = array[contador];

  if (compara.length > retornaMaior.length) {
    retornaMaior = compara;
  } else {
    retornaMenor = compara;
  }
}

console.log(retornaMaior);
console.log(retornaMenor);
