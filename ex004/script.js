function compra() {
    let produto = window.prompt('Que produto você está comprando?');
    let valorProduto = Number.parseFloat(window.prompt(`Quanto custa ${produto} que você está comprando?`));
    let valorDoUsuario = Number.parseFloat(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`));
    

    let valorTroco = valorProduto - valorDoUsuario;

    if (valorDoUsuario >= valorProduto) {
        window.alert(`Você comprou ${produto} que custou RS$ ${valorProduto}. Deu R$ ${valorDoUsuario} em dinheiro e vai receber R$ ${valorTroco} de troco. Volte sempre!`)
    }else {
        window.alert('DINHEIRO INSUFICIENTE. COMPLETE SEU DINHEIRO PARA PODER REALIZAR A COMPRA!')
    }

}