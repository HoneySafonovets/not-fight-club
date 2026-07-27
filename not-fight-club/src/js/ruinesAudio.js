export class RuinesAudio {
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

export const Ruines = new RuinesAudio('./assets/audio/battle_sound.mp3');