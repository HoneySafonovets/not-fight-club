import { Hamlet } from "./HamletAudio";
import { Ruines } from "./ruinesAudio";
import choiceCharacter from "./choiceCharacter";

export default function backToHome() { 
  Ruines.stop();
  Ruines.begin();
  choiceCharacter(localStorage.getItem('name'), localStorage.getItem('character'));
  Hamlet.play();
}