export class HamletAudio {
  constructor(src) {
    this.audio = new Audio(src);
    this.audio.volume = 0.2;
    this.audio.loop = true;
  }

  play() {
    this.audio.play();
  }

  stop() {
    this.audio.pause();
  }

  begin() {
    this.audio.currentTime = 0;
  }
}

export const Hamlet = new HamletAudio('./assets/audio/hamlet.mp3');