//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somaDosNumeros(numero) {
  let total = 0;

  for (let contador = 1; contador <= numero; contador++) {
    total = total + contador;
  }
  return total;
}

console.log(somaDosNumeros(4));
