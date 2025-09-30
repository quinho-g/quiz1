
let numero = document.getElementById('numero')
let nomeq = document.getElementById('no')
let contagem = 0
function proxima(prox, apaga) {
    let atual = document.getElementById(apaga)
    let nova = document.getElementById(prox)
    if (innerWidth <= 767) {
        atual.style.display = "none"
        nova.style.display = "flex"
    }else {
        atual.style.display = "none"
        nova.style.display = "grid"
    }
}

function certo(){
    contagem ++
}

function fi(){
    if (contagem == 0) {
        numero.innerText = `Das 3 questões, você acertou ${contagem}, Mandou mal! kkk`

    }else {
        numero.innerText = `Das 3 questões, você acertou ${contagem}, Muito bom!`
    }
    nomeq.style.display = "none"
}



