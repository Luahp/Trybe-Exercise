const title = document.querySelector('#header-container');
title.style.backgroundColor = '#00b06c';

const squareImportant = document.querySelector('.emergency-tasks');
squareImportant.style.backgroundColor = '#ff9f87';

const importantTitle = document.querySelectorAll('.emergency-tasks h3');
importantTitle[0].style.backgroundColor = '#aa09ee';
importantTitle[1].style.backgroundColor = '#aa09ee';

const squareNotImportant = document.querySelector('.no-emergency-tasks');
squareNotImportant.style.backgroundColor = '#fddb6a';

const noImportantTitle = document.querySelectorAll('.no-emergency-tasks h3');
noImportantTitle[0].style.backgroundColor = '#232525';
noImportantTitle[1].style.backgroundColor = '#232525';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';
