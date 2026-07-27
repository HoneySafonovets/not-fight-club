import { Ruines } from './ruinesAudio';
import { HamletAudio, Hamlet } from './HamletAudio';
import { Click } from './clickSound';
import backToHome from './backToHome';

export default async function startFight(btn, value, name) {
  const response = await fetch('./assets/json/enemy.json');
  const data = await response.json();

  let enemy = '';

  function randomChoice(a, b) {
    return Math.random() < 0.5 ? a : b;
  }
  const choice = randomChoice(1, 2);

  // Select enemy
  if (choice === 1) {
    enemy = data[0].enemy;
  } else {
    enemy = data[1].enemy;
  }
  
  btn.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = `
      <header class="header">
        <h1 class="header__name">Name: &nbsp;&nbsp;<span>${name} ${value}<span></h1>
        <img class="header__fight-home" src="./assets/controls/home.svg" alt="Go home">
      </header>
      <main class="main main__ruins" id="main">
        <article class="character__main">
          <img class="character__hero-img" src="./assets/${name}.png" alt="${name}">
          <progress class="character__health-bar" value="100" max="100">100/100</progress>
          <div class="main__brigand-bar">100/100</div>
        </article>
        <article class="main__brigand">
          <img class="main__brigand-img" src="./assets/${enemy}.png" alt="${enemy}">
          <progress class="brigand__health-bar" value="100" max="100"></progress>
          <div class="main__brigand-bar">100/100</div>
        </article >
      </main>
      <footer class="footer">


      </footer>
    `;

    document.querySelector('.header__fight-home').addEventListener('click', backToHome);
    Click.play();
    Hamlet.stop();
    Hamlet.begin();
    Ruines.play();
    return 2;
  });
}