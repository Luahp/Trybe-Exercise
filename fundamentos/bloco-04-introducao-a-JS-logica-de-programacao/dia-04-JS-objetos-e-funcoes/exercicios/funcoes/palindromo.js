//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(palavra) {
  const invertido = palavra.split('').reverse().join('');

  return palavra === invertido;
}
console.log(verificaPalindromo('arara'));
