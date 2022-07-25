//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let fatorial = 1;

for (let contador = 10; contador > 0; contador--) {
  fatorial *= contador;
}

console.log(fatorial);
