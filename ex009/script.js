function calcular() {
    let indicandoAumento = window.document.querySelector('.indicandoAumento');
    let salarioAtual = window.document.querySelector('.salarioAtual');
    let valorDoAumento = window.document.querySelector('.valorDoAumento');
    let valorFinal = window.document.querySelector('.valorFinal');

    let nomeFuncionario = window.prompt('Qual é o nome do funcionário?');

    let salarioFuncionario = Number.parseFloat(window.prompt(`Qual é o salário de ${nomeFuncionario}`));

    let porcetagemDeAumento = Number.parseFloat(window.prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?`));

    let valorDaPorcentagem = porcetagemDeAumento / 100 * salarioFuncionario;

    let salarioFinal = valorDaPorcentagem + salarioFuncionario;

    indicandoAumento.innerHTML = `${nomeFuncionario} recebeu um aumento salárial! Parabéns ${nomeFuncionario} 👏`;

    salarioAtual.innerHTML = `O salário atual era R$ ${salarioFuncionario} 💵`;

    valorDoAumento.innerHTML = `Com aumento de ${porcetagemDeAumento}%, o salário vai aumentar R$ ${valorDaPorcentagem} no próximo mês. 📈`

    valorFinal.innerHTML = `E a partir daí, ${nomeFuncionario} vai passar a ganhar R$ ${salarioFinal} 💰`


}