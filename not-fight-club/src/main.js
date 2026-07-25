import '@fontsource/ubuntu/index.css';
import './scss/main.scss';
import hit from './js/hit';
import choiceName from './js/choiceName';
import pushName from './js/pushName';
import startInputCheck from './js/startInputCheck';
import hamletAudioPlay from './js/hamletAudioPlay';
import choiceCharacter from './js/choiceCharacter';

document.querySelector('#app').innerHTML = `
<header class="header">
  <h1 class="header__title">Not fight club</h1>
</header>
<main id="main">
</main>
`;

// hamletAudioPlay();
let isStart = 0;


if (localStorage.getItem('fullName') !== null && localStorage.getItem('character') !== null) {
  choiceCharacter(localStorage.getItem('name'), localStorage.getItem('character'));
  // console.log('work')
} else {
  choiceName();

  startInputCheck(
    document.querySelector('.create__character-input'),
    document.querySelector('.create__character-btn')
  );

  pushName(document.querySelector('.create__character-btn'));
}


// document.querySelector('.hero').addEventListener('click', hit);