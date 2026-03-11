const premios = [

"🥤 Refrigerante",
"💰 Desconto 5",
"🚚 Entrega grátis",
"🧄 +5 Maioneses",
"🥤 Refrigerante",
"💰 Desconto 5"

]

let escolhido = false

function comecar(){

document.getElementById("inicio").style.display="none"

document.getElementById("jogo").style.display="block"

criarCartas()

setTimeout(virarCartas,3000)

}

function criarCartas(){

const grid = document.getElementById("grid")

premios.sort(()=>Math.random()-0.5)

premios.forEach(p=>{

let card = document.createElement("div")

card.className="card"

card.innerHTML=p

card.dataset.premio=p

card.onclick=()=>raspar(card)

grid.appendChild(card)

})

}

function virarCartas(){

document.querySelectorAll(".card").forEach(c=>{

c.classList.add("virada")

c.innerHTML="🎟️"

})

embaralhar()

}

function embaralhar(){

let vezes = 20

let intervalo = setInterval(()=>{

let grid = document.getElementById("grid")

for(let i=grid.children.length;i>=0;i--){

grid.appendChild(grid.children[Math.random()*i|0])

}

vezes--

if(vezes<=0) clearInterval(intervalo)

},100)

}

function raspar(card){

if(escolhido) return

escolhido=true

card.innerHTML = card.dataset.premio

document.getElementById("winSound").play()

}
