import choiceName from './choiceName';
import pushName from './pushName';
import startInputCheck from './startInputCheck';
import startFight from './startFight';
import choiceCharacter from './choiceCharacter';
import { Click } from './clickSound';

export default function welcomeHome(value, name) {
  document.querySelector('#app').innerHTML = `
    <main class="main__welcome" id="main">
      <div class="welcome__window">
        <h2 class="welcome__title">Welcome home the Heir!</h2>
        <div class="welcome__field">
          <button class="welcome__btn welcome__btn-restart" id="restart__btn">Select a name</button>
          <button class="welcome__btn welcome__btn-continue" id="continue__btn">Continue</button>
        </div>
      </div>
    </main>
  `;

  document.querySelector('#restart__btn').addEventListener('click', () => {
    choiceName()

    startInputCheck(
        document.querySelector('.create__character-input'),
        document.querySelector('.create__character-btn')
      );
    
    pushName(document.querySelector('.create__character-btn'));
    Click.play();
  });

  document.querySelector('#continue__btn').addEventListener('click', () => {
    if (value !== null && name !== null) {
      choiceCharacter(value, name);
      
      startFight(
        document.querySelector('.main__start-arrow'),
        localStorage.getItem('name'),
        localStorage.getItem('character')
      );
      Click.play();
    }
  });

  
}