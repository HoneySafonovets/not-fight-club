export default function hamletAudioPlay() {
  const audio = new Audio('./assets/audio/hamlet.mp3');

  audio.volume = 0.2;
  audio.loop = true;
  audio.play();
}