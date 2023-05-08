export default function() {
  const forestSound = new Audio('assets/Floresta.wav')
  const rainSound = new Audio('assets/Chuva.wav')
  const coffeeshopSound = new Audio('assets/Cafeteria.wav')
  const fireplaceSound = new Audio('assets/Lareira.wav')

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  forestSound.loop = true
  rainSound.loop = true
  coffeeshopSound.loop = true
  fireplaceSound.loop = true

  function forestSoundPlay() {
    forestSound.play()
  }

  function forestSoundStop() {
    forestSound.pause()
  }

  function rainSoundPlay() {
    rainSound.play()
  }

  function rainSoundStop() {
    rainSound.pause()
  }

  function coffeeshopSoundPlay() {
    coffeeshopSound.play()
  }

  function coffeeshopSoundStop() {
    coffeeshopSound.pause()
  }

  function fireplaceSoundPlay() {
    fireplaceSound.play()
  }

  function fireplaceSoundStop() {
    fireplaceSound.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    forestSoundPlay,
    forestSoundStop,
    rainSoundPlay,
    rainSoundStop,
    coffeeshopSoundPlay,
    coffeeshopSoundStop,
    fireplaceSoundPlay,
    fireplaceSoundStop,
    pressButton,
    timeEnd,
  }
}