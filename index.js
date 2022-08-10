/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

var meterInitialSpan = document.querySelector(".meter-initial")
var meterResultSpan = document.querySelector(".meter-result")
var feetInitialSpan = document.querySelector(".feet-initial")
var feetResultSpan = document.querySelector(".feet-result")
var literInitialSpan = document.querySelector(".liter-initial")
var literResultSpan = document.querySelector(".liter-result")
var gallonInitialSpan = document.querySelector(".gallon-initial")
var gallonResultSpan = document.querySelector(".gallon-result")
var kiloInitialSpan = document.querySelector(".kilo-initial")
var kiloResultSpan = document.querySelector(".kilo-result")
var poundInitialSpan = document.querySelector(".pound-initial")
var poundResultSpan = document.querySelector(".pound-result")
const convertBtn = document.querySelector(".convert-btn")
const initialUnitValueInput = document.querySelector(".initial-unit-value")

// convert button onclick listner that calls all conversion functions
convertBtn.addEventListener("click",function(){
    var initialValue = initialUnitValueInput.value;
    lengthToFeet(initialValue)
    lengthToMeter(initialValue)
    volumeToGallon(initialValue)
    volumeToLiter(initialValue)
    massToPound(initialValue)
    massToKilogram(initialValue)
})

// function that calculates meter to feet
function lengthToFeet(meterValue){
    feetInitialSpan.textContent = meterValue
    let feetValue = (meterValue * 0.3048 ).toFixed(3)
    feetResultSpan.textContent = feetValue
}

// function that calculates feet to meter
function lengthToMeter(feetValue){
    meterInitialSpan.textContent = feetValue
    let meterValue = (feetValue * 3.281).toFixed(3)
    meterResultSpan.textContent = meterValue
}

// function that calculates liter to gallon
function volumeToGallon(literValue){
    gallonInitialSpan.textContent = literValue
    let gallonValue = (literValue * 3.785 ).toFixed(3)
    gallonResultSpan.textContent = gallonValue
}

// function that calculates gallon to liter
function volumeToLiter(gallonValue){
    literInitialSpan.textContent = gallonValue
    let literValue = (gallonValue * 0.264).toFixed(3)
    literResultSpan.textContent = literValue
}

// function that calculates kilogram to pound
function massToPound(kilogramValue){
    poundInitialSpan.textContent = kilogramValue
    let poundValue = (kilogramValue * 0.453 ).toFixed(3)
    poundResultSpan.textContent = poundValue
}

// function that calculates pound to kilogram
function massToKilogram(poundValue){
    kiloInitialSpan.textContent = poundValue
    let kilogramValue = (poundValue * 2.204).toFixed(3)
    kiloResultSpan.textContent = kilogramValue
}
