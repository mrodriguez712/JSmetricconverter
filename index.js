/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter = 3.2808
const feet = 0.3048
const liter = 0.2641
const gallon = 3.7854
const kilogram = 2.2046
const pound = 0.45359
const convertBtn = document.getElementById("convert-btn")
let convertUnit = document.getElementById("convert-unit")
let lengthConvert = document.getElementById("length-convert")
let volumeConvert = document.getElementById("volume-convert")
let massConvert = document.getElementById("mass-convert")

convertBtn.addEventListener("click", function() {
    let meterUnit = convertUnit.value * meter
    let feetUnit = convertUnit.value * feet
    let literUnit = convertUnit.value * liter
    let gallonUnit = convertUnit.value * gallon
    let poundUnit = convertUnit.value * kilogram
    let kiloUnit = convertUnit.value * pound

    let unitLength = `${convertUnit.value} meters = ${meterUnit.toFixed(3)} feet | ${convertUnit.value} feet = ${feetUnit.toFixed(3)} meters`
    lengthConvert.textContent = unitLength

    let unitVolume = `${convertUnit.value} litters = ${literUnit.toFixed(3)} gallons | ${convertUnit.value} gallons = ${gallonUnit.toFixed(3)} liters`
    volumeConvert.textContent = unitVolume

    let unitMass = `${convertUnit.value} kilos = ${poundUnit.toFixed(3)} pounds | ${convertUnit.value} pounds = ${kiloUnit.toFixed(3)} kilos`
    massConvert.textContent = unitMass
})
