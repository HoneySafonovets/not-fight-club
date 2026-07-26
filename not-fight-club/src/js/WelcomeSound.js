export class WelcomeHome {
  constructor(src) {
    this.audio = new Audio(src);
    this.audio.volume = 0.5;
  }

  play() {
    this.audio.play();
  }

  stop() {
    this.audio.pause();
  }
}

export const WelcomeSound = new WelcomeHome('./assets/audio/welcome.mp3');