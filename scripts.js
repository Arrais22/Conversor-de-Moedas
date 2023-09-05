const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector (".currency-value") // outras moedas
    

    const dolarToday = 4.8
    const euroToday = 5.2
    const libraToday = 6.2
    const bitcoinToday = 0.000007815
    

    if(currencySelect.value == "dolar") { 
        // Se o select estiver selecionado com o valor de dolar, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") { 
        // Se o select estiver selecionado com o valor de euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    } 

    if(currencySelect.value == "libra") { 
        // Se o select estiver selecionado com o valor de dolar, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GPB"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin") { 
        // Se o select estiver selecionado com o valor de dolar, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

   if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dollar.png"
   }

   if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }
    convertValues ()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)