const premios = [

"🥤 Refrigerante",
"💰 Desconto 5",
"🚚 Entrega grátis",
"🧄 +5 Maioneses",
"🥤 Refrigerante",
"💰 Desconto 5"

]

let escolhido=false

function comecar(){

document.getElementById("inicio").style.display="none"

criarCartas()

}

function criarCartas(){

const grid=document.getElementById("grid")

premios.sort(()=>Math.random()-0.5)

premios.forEach(p=>{

let card=document.createElement("div")

card.className="card"

card.innerHTML="🎟️"

card.dataset.premio=p

card.onclick=()=>revelar(card)

grid.appendChild(card)

})

}

function revelar(card){

if(escolhido) return

escolhido=true

card.innerHTML=card.dataset.premio

document.getElementById("winSound").play()

navigator.vibrate([200,100,200])

confetti({

particleCount:150,

spread:90

})

}
