  
const canvas = document.getElementById('canvas1')
const ctx1 = canvas1.getContext('2d')
canvas.width = 1000
canvas.height = 500

const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')
canvas2.width = 1000
canvas2.height = 500

const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas3.getContext('2d')
canvas3.width = 1000
canvas3.height = 500

// const canvas4 = document.getElementById('canvas4')
// const ctx4 = canvas4.getContext('2d')
// canvas4.width = 1000
// canvas4.height = 500

const canvas5 = document.getElementById('canvas5')
const ctx5 = canvas5.getContext('2d')
canvas5.width = 1000
canvas5.height = 500


//Global variables
const grid = 80
let keys = []
let frame = 0
let gameSpeed = 1
const objectsArr = []
const collidesArr = []

//Music & sound effects
const music = new Audio()
music.src = '/sounds/peritune-otogi2.mp3'
music.play()
music.volume = 0.1
music.loop = true
// Background music credits
// Otogi2 by PeriTune | http://peritune.com
// Music promoted by https://www.free-stock-music.com
// Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/

const steps = new Audio()
steps.src = '/sounds/Running on Wet Surface.mp3'







