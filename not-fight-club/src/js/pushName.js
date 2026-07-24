
export default function pushName(btn) {
  btn.addEventListener('click', (event) => {
  const value = document.querySelector('.create__character-input').value;

    if (value.trim() !== '') {
      document.querySelector('#app').innerHTML = `
      <div class="container">
        <header class="header">
          <h1 class="header__title">Not fight club</h1>
        </header>
        <main class="main" id="main">
          <h2 class="character__name">${value}</h2>
          <div class="character__container">
            <img class="character__hero" src="./assets/crusader.png" alt="Crusader">
            <img class="character__hero" src="./assets/Jester-2.png" alt="Jester">
            <img class="character__hero" src="./assets/roogue.png" alt="Roogue">
            <img class="character__hero" src="./assets/bounty_hunter.png" alt="Bounty Hunter">
          </div>
        </main>
      </div>
        
      `
    } else {
      btn.classList.add('create__character-btn-none');
    }
  });
}
