const convertButton = document.querySelector(".convert-button")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector (".currency-value") // outras moedas

    
    const dolarToday = 4.8
    const euroToday = 5.26

    const  convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    
}

convertButton.addEventListener("click", convertValues)

