import {
  buttonPlay,
  buttonStop,
  buttonAddTime,
  buttonSubTime,
  forestSoundOff,
  forestSoundOn,
  rainSoundOff,
  rainSoundOn,
  coffeeshopSoundOff,
  coffeeshopSoundOn,
  fireplaceSoundOff,
  fireplaceSoundOn
} from './elements.js'

export default function({timer, sound}) {
  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    timer.hold()
    sound.pressButton()
  })
  
  buttonAddTime.addEventListener('click', function() {
    timer.plusFiveMinutes()
    sound.pressButton()
  })
  
  buttonSubTime.addEventListener('click', function() {
    timer.lessFiveMinutes()
    sound.pressButton()
  })
  
  
  forestSoundOff.addEventListener('click', function() {
    forestSoundOff.classList.add('hide')
    forestSoundOn.classList.remove('hide') 
    rainSoundOn.classList.add('hide')
    rainSoundOff.classList.remove('hide') 
    coffeeshopSoundOn.classList.add('hide')
    coffeeshopSoundOff.classList.remove('hide')
    fireplaceSoundOn.classList.add('hide')
    fireplaceSoundOff.classList.remove('hide')
  
    sound.rainSoundStop()
    sound.coffeeshopSoundStop()
    sound.fireplaceSoundStop()
    sound.forestSoundPlay()
  })
  
  rainSoundOff.addEventListener('click', function() {
    forestSoundOn.classList.add('hide')
    forestSoundOff.classList.remove('hide')
    rainSoundOff.classList.add('hide') 
    rainSoundOn.classList.remove('hide')
    coffeeshopSoundOn.classList.add('hide')
    coffeeshopSoundOff.classList.remove('hide')
    fireplaceSoundOn.classList.add('hide')
    fireplaceSoundOff.classList.remove('hide')
  
    sound.forestSoundStop()
    sound.coffeeshopSoundStop()
    sound.fireplaceSoundStop()
    sound.rainSoundPlay()
  })
  
  coffeeshopSoundOff.addEventListener('click', function() {
    forestSoundOn.classList.add('hide')
    forestSoundOff.classList.remove('hide')
    rainSoundOn.classList.add('hide')
    rainSoundOff.classList.remove('hide') 
    coffeeshopSoundOn.classList.remove('hide')
    coffeeshopSoundOff.classList.add('hide')
    fireplaceSoundOn.classList.add('hide')
    fireplaceSoundOff.classList.remove('hide')
  
    sound.forestSoundStop()
    sound.rainSoundStop()
    sound.fireplaceSoundStop()
    sound.coffeeshopSoundPlay()
  })
  
  fireplaceSoundOff.addEventListener('click', function() {
    forestSoundOn.classList.add('hide')
    forestSoundOff.classList.remove('hide')
    rainSoundOn.classList.add('hide')
    rainSoundOff.classList.remove('hide') 
    coffeeshopSoundOn.classList.add('hide')
    coffeeshopSoundOff.classList.remove('hide')
    fireplaceSoundOn.classList.remove('hide')
    fireplaceSoundOff.classList.add('hide')
  
    sound.forestSoundStop()
    sound.rainSoundStop()
    sound.coffeeshopSoundStop()
    sound.fireplaceSoundPlay()
  })
}