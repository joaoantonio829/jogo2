var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vidas > 3){
            //game over
            window.location.href='gameover.html'
        }else{
            document.getElementById('v'+ vidas).src="IMG/skull.png";
            vidas++;
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) -90;
    var posicaoY = Math.floor(Math.random() * altura) -90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX; 
    posicaoY = posicaoY < 0 ? 0 : posicaoY; 

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'IMG/morcego.png';
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleaorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id='mosquito';
    document.body.appendChild(mosquito);

    //MATA MUSQUITO
    mosquito.onclick = function(){
        //alert('moreeeeeu otario');
        this.remove();
    }
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3);
    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}
function ladoAleaorio(){
    var classe = Math.floor(Math.random()*2);
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

var cronometro =setInterval(function(){
    tempo -=1;
    if(tempo < 0){
        window.location.href = 'vitoria.html';
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000);