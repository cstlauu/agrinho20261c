const curiosidades = [
    "🌎 Cerca de 95% dos alimentos dependem do solo para serem produzidos.",
    "💧 A irrigação eficiente pode economizar até 50% da água utilizada.",
    "🐝 Mais de 70% das culturas agrícolas dependem de polinizadores.",
    "🌱 O plantio direto ajuda a armazenar carbono no solo.",
    "☀ Fazendas solares estão crescendo em áreas rurais do mundo todo."
];

function novaCuriosidade() {

    const aleatoria =
        curiosidades[
            Math.floor(
                Math.random() * curiosidades.length
            )
        ];

    document.getElementById("curiosidade").innerHTML =
        aleatoria;
}

function corrigirQuiz() {

    const resposta =
        document.querySelector(
            'input[name="quiz"]:checked'
        );

    if (!resposta) {

        document.getElementById("resultadoQuiz")
            .innerHTML =
            "Escolha uma alternativa!";

        return;
    }

    if (resposta.value === "1") {

        document.getElementById("resultadoQuiz")
            .innerHTML =
            "✅ Correto! O plantio direto reduz a erosão.";

    } else {

        document.getElementById("resultadoQuiz")
            .innerHTML =
            "❌ Resposta incorreta.";
    }
}

function simular() {

    const barra =
        document.getElementById("barra");

    const texto =
        document.getElementById("textoSimulacao");

    let progresso = 0;

    barra.style.width = "0%";

    const intervalo = setInterval(() => {

        progresso += 5;

        barra.style.width =
            progresso + "%";

        texto.innerHTML =
            "Sustentabilidade da fazenda: " +
            progresso +
            "%";

        if (progresso >= 100) {

            clearInterval(intervalo);

            texto.innerHTML =
                "🌱 Fazenda sustentável alcançada com sucesso!";
        }

    }, 100);
}

const visitantes =
    Math.floor(Math.random() * 90000) + 10000;

document.getElementById("contador").innerHTML =
    visitantes.toLocaleString("pt-BR");