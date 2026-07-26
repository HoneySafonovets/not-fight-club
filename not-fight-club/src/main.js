import '@fontsource/ubuntu/index.css';
import './scss/main.scss';
import hit from './js/hit';
import choiceName from './js/choiceName';
import pushName from './js/pushName';
import startInputCheck from './js/startInputCheck';
import { HamletAudio, Hamlet } from './js/HamletAudio';
import choiceCharacter from './js/choiceCharacter';
import startFight from './js/startFight';
import { WelcomeSound } from './js/WelcomeSound';
import welcomeHome from './js/welcomeHome';

document.querySelector('#app').innerHTML = `
<header class="header">
  <h1 class="header__title">Not fight club</h1>
</header>
<main id="main">
</main>
`;


// Hamlet.play();
// WelcomeSound.play();
let isStart = 0;


if (localStorage.getItem('fullName') !== null && localStorage.getItem('character') !== null) {
  welcomeHome(localStorage.getItem('name'), localStorage.getItem('character'));
} else {
  choiceName();

  startInputCheck(
    document.querySelector('.create__character-input'),
    document.querySelector('.create__character-btn')
  );

  pushName(document.querySelector('.create__character-btn'));
}


// if (localStorage.getItem('fullName') !== null && localStorage.getItem('character') !== null) {
//   choiceCharacter(localStorage.getItem('name'), localStorage.getItem('character'));
//   // console.log('work')
//   startFight(
//     document.querySelector('.main__start-arrow'),
//     localStorage.getItem('name'),
//     localStorage.getItem('character')
//   );
// } 


// document.querySelector('.hero').addEventListener('click', hit);


console.log('Привет! Если есть возможность - проверь ближе к концу дедлайна!')