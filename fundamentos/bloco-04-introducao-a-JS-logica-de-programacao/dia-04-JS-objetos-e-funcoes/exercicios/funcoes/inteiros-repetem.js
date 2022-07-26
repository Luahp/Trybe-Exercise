//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepete(numeros) {
  let conteNumero = 0;
  let conteRepetidos = 0;
  let indiceQueRepete = 0;

  for (let indice in numeros) {
    let verificaNumeros = numeros[indice];

    for (indice2 in numeros) {
      if (verificaNumeros === numeros[indice2]) {
        conteNumero += 1;
      }
    }
    if (conteNumero > conteRepetidos) {
      conteRepetidos = conteNumero;
      indiceQueRepete = indice;
    }
    conteNumero = 0;
  }
  return numeros[indiceQueRepete];
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));
