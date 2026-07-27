import backToHome from "./backToHome";
import { Click } from "./clickSound";

export default async function characterDescription(character) {
  const response = await fetch('./assets/json/characters.json');
  const data = await response.json();

  let description = data.map((e) => {
    if (e.hero === character) {
      return e.description;
    }
  });

  document.querySelector('#app').innerHTML = `
      <div class="container">
        <header class="header">
          <h1 class="header__name">Name: &nbsp;&nbsp;<span>${localStorage.getItem('fullName')}<span></h1>
          <img class="header__fight-home" src="./assets/controls/home.svg" alt="Go home">
        </header>
        <main class="main" id="main">
          <div class="current-character__container">
            <article class="current-character__card" id="${character}">
              <img class="current-character__img" src="./assets/${character}.png" alt="${character}">
              <h3 class="current-character__name">${character}</h3>
            </article>
            <div class="current-character__description">
              ${description}
            </div>
          </div>
        </main>
      </div>
      `;

  Click.play();    
  document.querySelector('.header__fight-home').addEventListener('click', backToHome);
}