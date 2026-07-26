import { Ruines } from './ruinesAudio';
import { HamletAudio, Hamlet } from './HamletAudio';

export default function startFight(btn, value, name) {
  btn.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = `
      <header class="header">
        <h1 class="header__name">Name: &nbsp;&nbsp;<span>${name} ${value}<span></h1>
      </header>
      <main class="main main__ruins" id="main">
        <article class="character__main">
          <img class="character__hero-img" src="./assets/${name}.png" alt="Jester">
          <div class="character__health-bar">10/10</div>
        </article>
        <article class="main__brigand">
          <img class="main__brigand-img" src="./assets/brigand.png" alt="Brigand">
          <div class="brigand__health-bar">20/20</div>
        </article >
      </main>
    `;

    // Hamlet.stop();
    // Ruines.play();
    return 2;
  });
}