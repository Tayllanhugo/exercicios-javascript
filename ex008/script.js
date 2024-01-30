function calcular() {
    let desconto = 10
    let indicandoProduto = window.document.querySelector('.indicandoProduto')
    let preçoOriginal = window.document.querySelector('.preçoOriginal');
    let valorDoDesconto = window.document.querySelector('.valorDoDesconto');
    let valorDoProdutoFinal = window.document.querySelector('.valorDoProdutoFinal');

    let produto = window.prompt('Qual é o produto que você está comprando?');

    let valorProduto = Number.parseFloat(window.prompt(`Qual é o preço de ${produto}?`));

    let resultadoDoDesconto = desconto / 100 * valorProduto;

    let resultadoValorDoProdutoFinal = resultadoDoDesconto - valorProduto;

    indicandoProduto.innerHTML = `Calculando desconto de 10% para ${produto}`;

    preçoOriginal.innerHTML = `O preço original era R$ ${valorProduto}.`;
    
    valorDoDesconto.innerHTML = `você acaba de ganhar R$ ${resultadoDoDesconto} de desconto (-10%)`;

    valorDoProdutoFinal.innerHTML = `No fim, você vai pagar R$ ${resultadoValorDoProdutoFinal} no produto ${produto}`;

}