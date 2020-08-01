
// Pin generate number between 1000 and 9000
document.getElementById('random-generator')
.addEventListener("click", function(){
    var fourDigitNumber = Math.floor(1000+ Math.random() * 9000);

document.getElementById('displayNumber').value = fourDigitNumber;
    myLoadFunction();
});

//calculate input
