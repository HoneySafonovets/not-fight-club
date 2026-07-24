import './scss/main.scss';
import hit from './js/hit';
import selectionCharacter from './js/selectionCharacter';
import pushName from './js/pushName';
import startInputCheck from './js/startInputCheck';

document.querySelector('#app').innerHTML = `
<header class="header">
  <h1 class="header__title">Not fight club</h1>
</header>
<main id="main">

  <img class="hero" src="./assets/crusader.png" alt="Crusader">
</main>
`;


let isStart = 0;

if (isStart === 0) {
  selectionCharacter();
}

startInputCheck(
  document.querySelector('.create__character-input'),
  document.querySelector('.create__character-btn')
);
pushName(document.querySelector('.create__character-btn'));


// document.querySelector('.hero').addEventListener('click', hit);