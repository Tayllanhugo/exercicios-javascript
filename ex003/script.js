function clicar() {
    let numero = Number.parseInt(window.prompt('Digite um número que tenha antecessor e sucessor:'));

    let antecessor = numero - 1;
    let sucessor = numero + 1;

    window.alert(`${antecessor} < ${numero} > ${sucessor}`)

}