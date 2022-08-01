function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let contador = 0; contador < decemberDaysList.length; contador++) {
    let day = decemberDaysList[contador];
    let dayIten = document.createElement('li');
    dayIten.innerText = day;

    if (day === 24 || day === 31) {
      dayIten.className = 'day holiday';
      getDaysList.appendChild(dayIten);
    } else if (day === 4 || day === 11 || day === 19) {
      dayIten.className = 'day friday';
      getDaysList.appendChild(dayIten);
    } else if (day === 25) {
      dayIten.className = 'day holiday friday';
      getDaysList.appendChild(dayIten);
    } else {
      dayIten.className = 'day';
      getDaysList.appendChild(dayIten);
    }
  }
}
createDaysOfTheMonth();

function createHolildayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
}
createHolildayButton('Feriados');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.getElementsByClassName('holiday');
  let oldBackgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'pink';

  getHolidayButton.addEventListener('click', function () {
    for (let contador = 0; contador < getHolidays.length; contador += 1) {
      if (getHolidays[contador].style.backgroundColor === setNewColor) {
        getHolidays[contador].style.backgroundColor = oldBackgroundColor;
      } else {
        getHolidays[contador].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays();
