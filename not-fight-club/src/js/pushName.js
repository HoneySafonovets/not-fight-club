
export default function pushName(btn) {
  btn.addEventListener('click', (event) => {
  const value = document.querySelector('.create__character-input').value;

  document.querySelector('#app').innerHTML = `
      <header class="header">
        <h1 class="header__title">Not fight club</h1>
      </header>
      <main id="main">
        <h2 class="character__name">${value}</h2>
        <img class="hero" src="./assets/crusader.png" alt="Crusader">
      </main>
    `
  });
}
