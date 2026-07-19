import './style.css'

document.querySelector('#app').innerHTML = html`
<header class="header">
  <h1 class="header__title">Not fight club</h1>
</header>
<main id="main">

</main>
`

setupCounter(document.querySelector('#counter'))
