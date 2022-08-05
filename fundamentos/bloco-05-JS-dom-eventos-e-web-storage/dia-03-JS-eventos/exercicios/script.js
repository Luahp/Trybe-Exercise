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
    } else if (day === 4 || day === 11 || day === 18) {
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

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');

function displayFriday(arrFriday) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let fridayText = 'SEXTOOOU!!';

  getFridayButton.addEventListener('click', function () {
    for (let contador = 0; contador < fridays.length; contador += 1) {
      if (fridays[contador].innerHTML !== fridayText) {
        fridays[contador].innerHTML = fridayText;
      } else {
        fridays[contador].innerHTML = arrFriday[contador];
      }
    }
  });
}

let decemberFridays = [4, 11, 18, 25];
displayFriday(decemberFridays);

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '300';
  });
}
dayMouseOver();

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
dayMouseOut();

function task(task, color) {
  let spanTask = document.createElement('span');
  spanTask.innerText = task;
  addElementToParent(spanTask, '.my-tasks');
  label(color);
}
function label(color) {
  colorLabel = document.createElement('div');
  colorLabel.className = 'task';
  addElementToParent(colorLabel, '.my-tasks');
  colorLabel.style.backgroundColor = color;
}

task('estudar', 'green');
// task("dormir", "red");
function addElementToParent(elementCreated, parentAttached) {
  //adiciona um elemento criado a um parente
  const parentName = document.querySelector(parentAttached);
  parentName.appendChild(elementCreated);
}

function taskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');

  myTask.addEventListener('click', function (e) {
    if (selectedTask.length === 0) {
      e.target.className = 'task selected';
    } else {
      e.target.className = 'task';
    }
  });
}
taskClass();

function dayColor() {
  let selectedTask = document.getElementsByClassName('task selected');

  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  //Salva a cor da classe task na variável "taskColor"
  let taskColor = taskDiv.style.backgroundColor;

  // declararei o evento como parâmetro da função
  days.addEventListener('click', function (e) {
    let eventTColor = e.tarrget.color;
    //Caso não tenha nenhum elemento com essa classe "task selected" E o evento n tiver a mesma cor de fundo da variável "taskColor"
    if (selectedTask.length > 0 && eventTColor !== taskColor) {
      //Pega a cor de fundo do primeiro elemento salvo em "selectedTask" e salva na let "color"
      let color = selectedTask[0].style.backgroundColor;
      // atribui a cor salva na variável "color" ao evento
      e.target.style.color = color;
      //Caso a cor do evento seja igual à da variável "taskColor"
    } else if (eventTColor === taskColor) {
      // Altera a cor de fundo do evento para a cor que foi pedida
      e.target.style.color = 'rgb(119,119,119)';
    }
  });
}
dayColor();
