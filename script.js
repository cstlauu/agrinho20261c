// Mostra um alerta com detalhes do projeto
function mostrarDetalhes(nomeProjeto) {
    alert(`Você clicou em: ${nomeProjeto}`);
}

// Validação simples do formulário
document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});