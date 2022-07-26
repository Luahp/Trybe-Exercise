function verificaPalavra(palavra, fimDaPalavra) {
  palavra = palavra.split('');
  fimDaPalavra = fimDaPalavra.split('');
  let controla = true;

  for (let contador = 0; contador < fimDaPalavra.length; contador++) {
    if (
      palavra[palavra.length - fimDaPalavra.length + contador] !=
      fimDaPalavra[contador]
    ) {
      controla = false;
    }
  }
  return controla;
}
console.log(verificaPalavra('trybe', 'be'));
console.log(verificaPalavra('joaofernando', 'fernan'));
