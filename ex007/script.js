let cotacaoDolar = Number.parseFloat(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'));

let carteiraReais = Number.parseFloat(window.prompt('Quando R$ você tem na carteira?'));

function convert() {
    let result = window.document.getElementById('resultado')

    let converterParaDolar = carteiraReais * cotacaoDolar;

    result.innerHTML = `O valor de R$ ${carteiraReais}, convertendo para dolar é: U$${converterParaDolar}`;
}