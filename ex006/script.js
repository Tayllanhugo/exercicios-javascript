function converter() {
    let temperaturaEmCelsius = Number.parseFloat(window.prompt('Digite uma temperatura em ºC (Celsius'));

    let celsius  = window.document.getElementById('celsius');
    let kelvin = window.document.getElementById('kelvin');
    let fahrenheit = window.document.getElementById('fahrenheit');

    celsius.innerHTML = `A temperatura de ${temperaturaEmCelsius} ºC, corresponde a...`;

    let convertkelvin = temperaturaEmCelsius + 278.15;
    let convertFahrenheit = temperaturaEmCelsius * 1.8 + 32;

    kelvin.innerHTML = ''
    fahrenheit.innerHTML = ''

    kelvin.innerHTML = `${convertkelvin} ºK (Kelvin)`
    fahrenheit.innerHTML = `${convertFahrenheit} ºF (Fahrenheit)`
}