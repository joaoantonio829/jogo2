var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;
var pontos = 0;

var nivel = localStorage.getItem('nivelJogo');

localStorage.setItem('ponts',0);

var tempoMosquito = 1700;

    if(nivel === 'normal'){
        criaMosquitoTempo = 1500;
    } else if(nivel === 'dificil'){
        criaMosquitoTempo = 1000;
    }else if (nivel === 'chucknorris'){
        criaMosquitoTempo = 750;
    }


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
    if (document.getElementById('morcego')) {
        document.getElementById('morcego').remove();

        if (vidas > 3) {
            // game over
            window.location.href = "gameover.html";
        } else {
            document.getElementById('v' + vidas).src = "IMG/skull.png";
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    // criar elemento html
    var morcego = document.createElement('img');
    morcego.src = "IMG/morcego.png";
    morcego.className = tamanhoAleatorio() + " " + ladoAleaorio();
    morcego.style.left = posicaoX + "px";
    morcego.style.top = posicaoY + "px";
    morcego.style.position = "absolute";
    morcego.id = "morcego";
    document.body.appendChild(morcego);

    // mata mosquito
    morcego.onclick = function() {
        if (this.classList.contains('morcego3')) {
            pontos += 1;
        } else if (this.classList.contains('morcego2')) {
            pontos += 2;
        } else {
            pontos += 3;
        }
        //console.log(pontos);
        localStorage.setItem('ponts', pontos);
        document.getElementById("pontuacao").innerHTML = pontos;
        this.remove();
    }
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return "morcego1";
        case 1:
            return "morcego2";
        case 2:
            return "morcego3";
    }
}

function ladoAleaorio() {
    var classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return "ladoA";
        case 1:
            return "ladoB";
    }
}

var cronometro = setInterval(function () {  
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro);
        window.location.href = "victory.html";
    } else {
        document.getElementById("cronometro").innerHTML = tempo;
    }
}, 1000);
