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
          <progress class="character__health-bar" value="100" max="100">100/100</progress>
          <div class="main__brigand-bar">100/100</div>
        </article>
        <article class="main__brigand">
          <img class="main__brigand-img" src="./assets/brigand.png" alt="Brigand">
          <progress class="brigand__health-bar" value="100" max="100"></progress>
          <div class="main__brigand-bar">100/100</div>
        </article >
      </main>
      <footer class="footer">


      </footer>
    `;

    // Hamlet.stop();
    // Ruines.play();
    return 2;
  });
}