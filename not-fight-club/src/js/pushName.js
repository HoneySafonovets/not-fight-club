
import choiceCharacter from "./choiceCharacter";
import { Click } from "./clickSound";

export default function pushName(btn) {
  btn.addEventListener('click', (event) => {
  const value = document.querySelector('.create__character-input').value;


    if (value.trim() !== '') {
      document.querySelector('#app').innerHTML = `
      <div class="container">
        <header class="header">
          <h1 class="header__name">Name: &nbsp;&nbsp;<span>${value}<span></h1>
        </header>
        <main class="main" id="main">
          <h3 class="character__class">Choice your character</h3>
          <div class="character__container">
            <article class="character__hero-card" id="Crusader">
              <img class="character__hero-img" src="./assets/Crusader.png" alt="Crusader">
              <h3 class="character__hero-name">Crusader</h3>
            </article>
            <article class="character__hero-card" id="Jester">
              <img class="character__hero-img" src="./assets/Jester.png" alt="Jester">
              <h3 class="character__hero-name">Jester</h3>
            </article>
            <article class="character__hero-card" id="Highwayman">
              <img class="character__hero-img" src="./assets/Highwayman.png" alt="Highwayman">
              <h3 class="character__hero-name">Highwayman</h3>
            </article>
            <article class="character__hero-card" id="Bounty Hunter">
              <img class="character__hero-img" src="./assets/Bounty Hunter.png" alt="Bounty Hunter">
              <h3 class="character__hero-name">Bounty Hunter</h3>
            </article>
          </div>
        </main>
      </div>
        
      `
      localStorage.setItem('fullName', value);
      
      Click.play();
      document.querySelector('.character__container').addEventListener('click', (event) => {
        const card = event.target.closest('.character__hero-card');

        if (!card) {
          return;
        }

        choiceCharacter(value, card.id);
        Click.play();
      })
    } else {
      btn.classList.add('create__character-btn-none');
    }
  });
}
