const form = document.getElementById('form')
const nomeBeneficiario = document.getElementById('nome') 
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault()

    const numeroConta = document.getElementById('numero')
    const valorDeposito = document.getElementById('valor')
    const mensagem = `Montante de <b>${valorDeposito.value}</b> depositado para o cliente <b>${nome.value}</b> - Conta: <b>${numeroConta}</b>.` 

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
    }
})



