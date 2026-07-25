
export default function pushName(btn) {
  btn.addEventListener('click', (event) => {
  const value = document.querySelector('.create__character-input').value;


    if (value.trim() !== '') {
      document.querySelector('#app').innerHTML = `
      <div class="container">
        <header class="header">
          <h1 class="header__name">Name:  <span>${value}<span></h1>
        </header>
        <main class="main" id="main">
          <h3 class="character__class">Choice your character</h3>
          <div class="character__container">
            <article class="character__hero-card">
              <img class="character__hero-img" src="./assets/crusader.png" alt="Crusader">
              <h3 class="character__hero-name">Crusader</h3>
            </article>
            <article class="character__hero-card">
              <img class="character__hero-img" src="./assets/Jester-2.png" alt="Jester">
              <h3 class="character__hero-name">Jester</h3>
            </article>
            <article class="character__hero-card">
              <img class="character__hero-img" src="./assets/roogue.png" alt="Highwayman">
              <h3 class="character__hero-name">Highwayman</h3>
            </article>
            <article class="character__hero-card">
              <img class="character__hero-img" src="./assets/bounty_hunter.png" alt="Bounty Hunter">
              <h3 class="character__hero-name">Bounty Hunter</h3>
            </article>
          </div>
        </main>
      </div>
        
      `
      localStorage.setItem('name', value);
    } else {
      btn.classList.add('create__character-btn-none');
    }
  });
}
