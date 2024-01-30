function convert() {
    let valorMetros = Number.parseFloat(window.prompt('Digite uma distância em metros(m):'));

    let distancia = window.document.getElementById('distancia')


    let km = window.document.getElementById('km')
    let hm = window.document.getElementById('hm')
    let dam = window.document.getElementById('dam')
    let dm = window.document.getElementById('dm')
    let cm = window.document.getElementById('cm')
    let mm = window.document.getElementById('mm')

    let valorKm = valorMetros / 1000;
    let valorHm = valorMetros / 100;
    let valorDam = valorMetros / 10;
    let valorDm = valorMetros * 10;
    let valorCm = valorMetros * 100;
    let valorMm = valorMetros * 1000;   


    km.innerHTML = ''
    hm.innerHTML = ''
    dam.innerHTML = ''
    dm.innerHTML = ''
    cm.innerHTML = ''
    mm.innerHTML = ''

    distancia.innerHTML = `A distância de ${valorMetros} metros, corresponde a...`

    km.innerHTML += `${valorKm} quilômetros (KM)`
    hm.innerHTML += `${valorHm} hectômetros (Hm)`
    dam.innerHTML += `${valorDam} decâmetros (Dam)`
    dm.innerHTML += `${valorDm} decímetros (Dm)`
    cm.innerHTML += `${valorCm} Centímetros (Cm)`
    mm.innerHTML += `${valorMm} milímetros (Mm)`
}