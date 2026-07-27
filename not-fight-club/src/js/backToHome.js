import { Hamlet } from "./HamletAudio";
import { Ruines } from "./ruinesAudio";
import { Click } from "./clickSound";
import choiceCharacter from "./choiceCharacter";

export default function backToHome() {
  Click.play();
  Ruines.stop();
  Ruines.begin();
  choiceCharacter(localStorage.getItem('name'), localStorage.getItem('character'));
  Hamlet.play();
}