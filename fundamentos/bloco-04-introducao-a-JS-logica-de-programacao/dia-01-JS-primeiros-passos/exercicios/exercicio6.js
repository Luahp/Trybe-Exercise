const chessPieces = 'QUEEN';

let movement;

switch (chessPieces.toLocaleLowerCase()) {
  case 'bishop':
    movement = 'diagonals';
    break;
  case 'pawn':
    movement = 'one square in your front';
    break;
  case 'rook':
    movement = 'collumn and lines';
    break;
  case 'king':
    movement = 'any directions, but move just';
    break;
  case 'knight':
    movement = 'L move';
    break;
  case 'queen':
    movement = 'any directions';
    break;
  default:
    movement = 'Erro';
}
console.log(movement);
