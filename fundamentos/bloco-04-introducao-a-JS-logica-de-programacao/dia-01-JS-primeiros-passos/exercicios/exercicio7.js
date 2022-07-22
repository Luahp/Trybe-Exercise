const convert = 50;

let message;

if (convert < 0 || convert > 100) {
  message = 'Erro, nota incorreta!';
} else if (convert >= 90) {
  message = 'A';
} else if (convert >= 80) {
  message = 'B';
} else if (convert >= 70) {
  message = 'C';
} else if (convert >= 60) {
  message = 'D';
} else if (convert >= 50) {
  message = 'E';
} else {
  message = 'F';
}
console.log(message);
