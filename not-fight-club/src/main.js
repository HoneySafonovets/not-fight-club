import './scss/main.scss';
import hit from './js/hit';

document.querySelector('#app').innerHTML = `
<header class="header">
  <h1 class="header__title">Not fight club</h1>
</header>
<main id="main">
  <img class="hero" src="./assets/crusader.png" alt="Crusader">
</main>
`;


document.querySelector('.hero').addEventListener('click', hit);