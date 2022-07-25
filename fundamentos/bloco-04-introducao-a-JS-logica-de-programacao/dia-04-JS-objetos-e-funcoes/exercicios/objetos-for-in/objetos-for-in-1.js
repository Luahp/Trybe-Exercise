console.log('Para fixar - 1');
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
console.log('Bem vinda, ' + info.personagem);
console.log(' ');

console.log('Para fixar - 2');

console.log(info);
console.log(' ');

console.log('Para fixar - 3');

for (key in info) {
  console.log(key);
}
console.log(' ');

console.log('Para fixar - 4');

for (value in info) {
  console.log(info[value]);
}
console.log(' ');

console.log('Para fixar - 5');

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('ambos são recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}
console.log(' ');
console.log('Para fixar - 6');

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log(
  'O livro favorito de ' +
    leitor.nome +
    ' ' +
    leitor.sobrenome +
    ' se chama ' +
    leitor.livrosFavoritos[0].titulo +
    '.'
);
console.log(' ');

console.log('Para fixar - 7');

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});
console.log(leitor.livrosFavoritos);

console.log(' ');

console.log('Para fixar - 8');
console.log(
  leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.'
);
