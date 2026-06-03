document.getElementById("saibaMais")
.addEventListener("click", () => {

    document
    .getElementById("historia")
    .scrollIntoView({
        behavior:"smooth"
    });

});

let progresso = 0;

function aumentar(){

    if(progresso < 100){

        progresso += 10;

        document
        .getElementById("progresso")
        .style.width = progresso + "%";

        document
        .getElementById("valor")
        .innerHTML = progresso + "%";

    }

}

const curiosidades = [

"🌱 Uma árvore pode absorver até 22 kg de CO₂ por ano.",

"🚜 Agricultura de precisão reduz desperdícios de insumos.",

"💧 Sistemas modernos economizam até 50% de água.",

"🌾 Rotação de culturas melhora a fertilidade do solo.",

"🐝 Polinizadores são essenciais para grande parte da produção agrícola."

];

function novaCuriosidade(){

    let sorteio =
    Math.floor(
        Math.random() *
        curiosidades.length
    );

    document
    .getElementById("textoCuriosidade")
    .innerHTML =
    curiosidades[sorteio];

}

function responder(correto){

    let resultado =
    document.getElementById("resultadoQuiz");

    if(correto){

        resultado.innerHTML =
        "✅ Correto! A rotação de culturas preserva o solo.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML =
        "❌ Resposta incorreta.";

        resultado.style.color = "red";

    }

}

let numero = 0;

const contador = setInterval(() => {

    numero += 50;

    document
    .getElementById("contador")
    .innerHTML = numero;

    if(numero >= 5000){

        clearInterval(contador);

    }

}, 30);