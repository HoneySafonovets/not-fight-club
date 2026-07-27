export class audioWelcomeSound {
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

export const WelcomeSound = new audioWelcomeSound('./assets/audio/welcome.mp3');