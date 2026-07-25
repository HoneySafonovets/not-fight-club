export default function choiceName() {
  // document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').innerHTML = `
    <div class="create__character">
      <h2 class="create__character-title">Choose a name for your hero</h2>
      <div class="create__character-field">
        <input class="create__character-input" type="text" placeholder="Give a name">
      </div>
      <button class="create__character-btn create__character-btn-none" id="start__btn">Next step</button>
    </div>
    `
  // });
}