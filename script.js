// Botão Saiba Mais

document
.getElementById("btnSaibaMais")
.addEventListener("click", () => {

    document
    .getElementById("sobre")
    .scrollIntoView({
        behavior: "smooth"
    });

});


// Formulário

document
.getElementById("formContato")
.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert(
        `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`
    );

    this.reset();

});