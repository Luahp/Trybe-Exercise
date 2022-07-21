const a = 60;
const b = 100;
const c = 20;

const somaDosAngulos = a + b + c;

let resultado;

if (somaDosAngulos === 180) {
  resultado = true;
} else if (somaDosAngulos > 180 || somaDosAngulos < 180) {
  resultado = false;
} else {
  resultado = 'erro';
}
console.log(resultado);
