export default function choiceCharacter(value, name) {
  const fullName = `${name} ${value}`;
  const character = `${name}`;

  document.querySelector('#app').innerHTML = `
    <header class="header">
      <h1 class="header__name">Name: &nbsp;&nbsp;<span>${name} ${value}<span></h1>
    </header>
    <main class="main main__base" id="main">
      <article class="character__main">
        <img class="character__hero-img" src="./assets/${name}.png" alt="Jester">
        <div class="character__health-bar">10/10</div>
      </article>
      <div class="main__start-fight">
        <img class="main__start-arrow" src="./assets/start.png" alt="Arrow">
        <span>Explore the Darkest Dungeon</span>
      </div>
    </main>
  `;

  localStorage.setItem('fullName', fullName);
  localStorage.setItem('name', value);
  localStorage.setItem('character', character);
}