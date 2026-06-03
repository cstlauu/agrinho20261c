const contador = document.getElementById("contador");

const valorFinal = 5000;
let valorAtual = 0;

const intervalo = setInterval(() => {

    valorAtual += 50;

    contador.textContent = valorAtual.toLocaleString("pt-BR");

    if (valorAtual >= valorFinal) {
        contador.textContent = valorFinal.toLocaleString("pt-BR");
        clearInterval(intervalo);
    }

}, 30);