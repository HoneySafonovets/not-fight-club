export class MouseClick {
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

export const Click = new MouseClick('./assets/audio/btnClick.mp3');