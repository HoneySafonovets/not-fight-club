(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){document.querySelector(`#app`).innerHTML=`
  <div class="create__character">
    <h2 class="create__character-title">Choose a name for your hero</h2>
    <div class="create__character-field">
      <input class="create__character-input" type="text" placeholder="Give a name">
    </div>
    <button class="create__character-btn create__character-btn-none" id="start__btn">Next step</button>
  </div>
  `}function t(e,t){e.addEventListener(`input`,n=>{e.value===``?t.classList.add(`create__character-btn-none`):t.classList.remove(`create__character-btn-none`)})}var n=new class{constructor(e){this.audio=new Audio(e),this.audio.volume=.2,this.audio.loop=!0}play(){this.audio.play()}stop(){this.audio.pause()}begin(){this.audio.currentTime=0}}(`./assets/audio/battle_sound.mp3`),r=new class{constructor(e){this.audio=new Audio(e),this.audio.volume=.2,this.audio.loop=!0}play(){this.audio.play()}stop(){this.audio.pause()}begin(){this.audio.currentTime=0}}(`./assets/audio/hamlet.mp3`),i=new class{constructor(e){this.audio=new Audio(e),this.audio.volume=.5}play(){this.audio.play()}stop(){this.audio.pause()}}(`./assets/audio/btnClick.mp3`);function a(){i.play(),n.stop(),n.begin(),l(localStorage.getItem(`name`),localStorage.getItem(`character`)),r.play()}async function o(e,t,o){let s=await(await fetch(`./assets/json/enemy.json`)).json(),c=``;function l(e,t){return Math.random()<.5?e:t}c=l(1,2)===1?s[0].enemy:s[1].enemy,e.addEventListener(`click`,()=>(document.querySelector(`#app`).innerHTML=`
      <header class="header">
        <h1 class="header__name">Name: &nbsp;&nbsp;<span>${o} ${t}<span></h1>
        <img class="header__fight-home" src="./assets/controls/home.svg" alt="Go home">
      </header>
      <main class="main main__ruins" id="main">
        <article class="character__main">
          <img class="character__hero-img" src="./assets/${o}.png" alt="${o}">
          <progress class="character__health-bar" value="100" max="100">100/100</progress>
          <div class="main__brigand-bar">100/100</div>
        </article>
        <article class="main__brigand">
          <img class="main__brigand-img" src="./assets/${c}.png" alt="${c}">
          <progress class="brigand__health-bar" value="100" max="100"></progress>
          <div class="main__brigand-bar">100/100</div>
        </article >
      </main>
      <footer class="footer">


      </footer>
    `,document.querySelector(`.header__fight-home`).addEventListener(`click`,a),i.play(),r.stop(),r.begin(),n.play(),2))}function s(e){document.querySelector(`#app`).innerHTML=`
    <div class="container">
      <header class="header">
        <h1 class="header__name">Name: &nbsp;&nbsp;<span>${e}<span></h1>
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
  `,localStorage.setItem(`fullName`,e),i.play(),document.querySelector(`.character__container`).addEventListener(`click`,t=>{let n=t.target.closest(`.character__hero-card`);n&&(l(e,n.id),i.play())})}async function c(e){let t=(await(await fetch(`./assets/json/characters.json`)).json()).map(t=>{if(t.hero===e)return t.description});document.querySelector(`#app`).innerHTML=`
      <div class="container">
        <header class="header">
          <h1 class="header__name">Name: &nbsp;&nbsp;<span>${localStorage.getItem(`fullName`)}<span></h1>
          <img class="header__fight-home" src="./assets/controls/home.svg" alt="Go home">
        </header>
        <main class="main" id="main">
          <div class="current-character__container">
            <article class="current-character__card" id="${e}">
              <img class="current-character__img" src="./assets/${e}.png" alt="${e}">
              <h3 class="current-character__name">${e}</h3>
            </article>
            <div class="current-character__description">
              ${t}
            </div>
          </div>
        </main>
      </div>
      `,i.play(),document.querySelector(`.header__fight-home`).addEventListener(`click`,a)}function l(n,r){let i=`${r} ${n}`,a=`${r}`;document.querySelector(`#app`).innerHTML=`
    <header class="header">
      <h1 class="header__name">Name: &nbsp;&nbsp;<span>${r} ${n}<span></h1>
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
  `,document.querySelector(`.main__restart`).addEventListener(`click`,()=>{e(),t(document.querySelector(`.create__character-input`),document.querySelector(`.create__character-btn`)),u(document.querySelector(`.create__character-btn`))}),document.querySelector(`.main__sanitarium`).addEventListener(`click`,e=>c(r)),document.querySelector(`.main__tavern`).addEventListener(`click`,()=>s(n)),o(document.querySelector(`.main__start-fight`),n,r),localStorage.setItem(`fullName`,i),localStorage.setItem(`name`,n),localStorage.setItem(`character`,a)}function u(e){e.addEventListener(`click`,t=>{let n=document.querySelector(`.create__character-input`).value;n.trim()===``?e.classList.add(`create__character-btn-none`):(document.querySelector(`#app`).innerHTML=`
      <div class="container">
        <header class="header">
          <h1 class="header__name">Name: &nbsp;&nbsp;<span>${n}<span></h1>
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
        
      `,localStorage.setItem(`fullName`,n),i.play(),document.querySelector(`.character__container`).addEventListener(`click`,e=>{let t=e.target.closest(`.character__hero-card`);t&&(l(n,t.id),i.play(),r.play())}))})}var d=new class{constructor(e){this.audio=new Audio(e),this.audio.volume=.5}play(){this.audio.play()}stop(){this.audio.pause()}}(`./assets/audio/welcome.mp3`);function f(n,a){document.querySelector(`#app`).innerHTML=`
    <main class="main__welcome" id="main">
      <div class="welcome__window">
        <h2 class="welcome__title">Welcome home the Heir!</h2>
        <div class="welcome__last">
          <h3 class="welcome__last-name">Your last name: <span>${n}</span></h3>
          <h3 class="welcome__last-character">Your last character: <span>${a}</span></h3>
        </div>
        <div class="welcome__field">
          <button class="welcome__btn welcome__btn-restart" id="restart__btn">Select a name</button>
          <button class="welcome__btn welcome__btn-continue" id="continue__btn">Continue</button>
        </div>
      </div>
    </main>
  `,document.querySelector(`#restart__btn`).addEventListener(`click`,()=>{e(),t(document.querySelector(`.create__character-input`),document.querySelector(`.create__character-btn`)),u(document.querySelector(`.create__character-btn`)),i.play(),r.play()}),document.querySelector(`#continue__btn`).addEventListener(`click`,()=>{n!==null&&a!==null&&(l(n,a),o(document.querySelector(`.main__start-arrow`),localStorage.getItem(`name`),localStorage.getItem(`character`)),i.play(),d.play(),r.play())})}document.querySelector(`#app`).innerHTML=`
<header class="header">
  <h1 class="header__title">Not fight club</h1>
</header>
<main id="main">
</main>
`,localStorage.getItem(`fullName`)!==null&&localStorage.getItem(`character`)!==null?f(localStorage.getItem(`name`),localStorage.getItem(`character`)):(e(),t(document.querySelector(`.create__character-input`),document.querySelector(`.create__character-btn`)),u(document.querySelector(`.create__character-btn`))),console.log(`Привет! Если есть возможность - проверь ближе к концу дедлайна!`);