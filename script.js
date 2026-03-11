const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 320
canvas.height = 160

ctx.fillStyle = "#c0c0c0"
ctx.fillRect(0,0,320,160)

ctx.fillStyle = "black"
ctx.font = "20px Arial"
ctx.fillText("RASPE AQUI",100,80)

const spatula = document.getElementById("spatula")

const scratchSound = document.getElementById("scratchSound")
const winSound = document.getElementById("winSound")

let raspando = false
let revelado = false

const premios = [
"🥤 Refrigerante Lata",
"💰 Desconto R$5",
"🚚 Entrega Grátis",
"🧄 +5 Maioneses"
]

const premio = premios[Math.floor(Math.random()*premios.length)]

document.getElementById("premio").innerHTML = premio

canvas.addEventListener("touchstart",()=>raspando=true)
canvas.addEventListener("touchend",()=>raspando=false)

canvas.addEventListener("touchmove",raspar)

function raspar(e){

if(!raspando) return

const rect = canvas.getBoundingClientRect()

const x = e.touches[0].clientX - rect.left
const y = e.touches[0].clientY - rect.top

spatula.style.left = x-35+"px"
spatula.style.top = y-35+"px"

scratchSound.currentTime = 0
scratchSound.play()

ctx.globalCompositeOperation = "destination-out"

ctx.beginPath()
ctx.arc(x,y,18,0,Math.PI*2)
ctx.fill()

}
