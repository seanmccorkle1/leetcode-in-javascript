// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius x 1.8 + 32

var convertTemperature = function (celsius) {
        
    // let num = (celsius + 273.15).toExponential(5)

    let kelvin = (celsius + 273.15).toFixed(5)
    kelvin = Number(kelvin)

    let farenheit = ((celsius * 1.80) + 32).toFixed(5)
    farenheit = Number(farenheit)

    return [kelvin, farenheit]

    // return [Number(celsius + 273.15).toFixed(5), (celsius * 1.8) + 32]
    // return [celsius + 273.15, (celsius * 1.8) + 32]
}

console.log(convertTemperature(0), [32])

console.log(convertTemperature(2))
console.log(convertTemperature(100))