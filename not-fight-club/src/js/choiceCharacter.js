import choiceName from "./choiceName";
import startInputCheck from "./startInputCheck";
import pushName from "./pushName";
import resultsTable from "./resultsTable";

export default function choiceCharacter(value, name) {
  const fullName = `${name} ${value}`;
  const character = `${name}`;

  document.querySelector('#app').innerHTML = `
    <header class="header">
      <h1 class="header__name">Name: &nbsp;&nbsp;<span>${name} ${value}<span></h1>
      <div class="header__nav">
        <img class="header__nav-img" src="./assets/controls/home.svg" alt="Home">
        <img class="header__nav-img" src="./assets/controls/profile.svg" alt="Profile">
        <img class="header__nav-img" src="./assets/controls/settings.png" alt="Settings">
      </div>
    </header>
    <main class="main main__base" id="main">
      

      <div class="main__builds main__restart">
        <img class="main__restart-img" src="./assets/builds/restart.png" alt="Restart">
      </div>

      <div class="main__builds main__tavern">
        <img class="main__tavern-img" src="./assets/builds/tavern.png" alt="Tavern">
      </div>

      <div class="main__builds main__sanitarium">
        <img class="main__sanitarium-img" src="./assets/builds/sanitarium.png" alt="Sanitarium">
      </div>

      <div class=" main__start-fight">
        <img class="main__start-arrow" src="./assets/start.png" alt="Arrow">
        <span>Explore the Darkest Dungeon</span>
      </div>
    </main>
  `;

  // Restart
  document.querySelector('.main__restart').addEventListener('click', () => {
    choiceName();
  
    startInputCheck(
      document.querySelector('.create__character-input'),
      document.querySelector('.create__character-btn')
    );
  
    pushName(document.querySelector('.create__character-btn'));
  });
  // Results Table
  document.querySelector('.main__sanitarium').addEventListener('click', resultsTable);
  // Swipe hero
  document.querySelector('.main__tavern').addEventListener('click', resultsTable);

  localStorage.setItem('fullName', fullName);
  localStorage.setItem('name', value);
  localStorage.setItem('character', character);
}