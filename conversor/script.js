var listElement = document.querySelector('#container ul')
var getInput = document.querySelector('#container input')
var buttonElement = document.getElementById('divButton')

function converter(){
    var cel = getInput.value;
    var F = [(cel/5) * 9 + 32]
    var K = (parseInt(cel) + 273.15)

    document.getElementById('divIDF').innerHTML = `Temperature: ${F}º F`;
    document.getElementById('divIDK').innerHTML = `Temperature: ${K} K`;
}

buttonElement.onclick = converter;
