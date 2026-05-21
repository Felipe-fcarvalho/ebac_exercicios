const form = document.getElementById('form-contato');
const inputNomeContato = document.getElementById('nome-contato');
const inputTelefoneContato = document.getElementById('telefone-contato');
const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const nome = inputNomeContato.value.trim();
    const telefone = inputTelefoneContato.value.trim();

    if (!nome || !telefone) return;

    adicionarContato(nome, telefone);
    limparFormulario();
})

function adicionarContato(nome, telefone) {
    const linha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;

    const colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaTelefone);
    corpoTabela.appendChild(linha);
}

function limparFormulario() {
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
    inputNomeContato.focus();
}