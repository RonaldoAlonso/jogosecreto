let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

exibirTextoNaTela ('h1','Jogo do Número Secreto');
exibirTextoNaTela ('p','Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela ('h1','Você Acertou');
        let palavraTentativas = tentativas >1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela ('p',`Você Descobriu o número secreto com ${tentativas} ${palavraTentativas}`);            
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p','O número é menor que o chute');
        } else {
            exibirTextoNaTela ('p','O número é maior que o chute'); 
        } tentativas ++;
        limparCampo();
    }
  }

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    }

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function comeca() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirTextoNaTela ('h1','Jogo do Número Secreto');
    exibirTextoNaTela ('p','Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
