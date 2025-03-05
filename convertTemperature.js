var convertTemperature = function(celsius) {

    let kelvin=(celsius+273.15)
    let fehrenheit=(celsius*1.80+32.00)

   return [kelvin,fehrenheit]
};

console.log(convertTemperature(36.50))