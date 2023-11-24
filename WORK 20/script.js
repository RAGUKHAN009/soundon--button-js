
function pS() {
    var audio = new Audio('./notify.wav'); 
    audio.play();
}
function pSs() {
    var audio = new Audio('./Windows Hardware Fail.wav'); 
    audio.play();
}

let button = document.getElementById('butt');

button.addEventListener('mouseover', function () {
    pS();
});

button.addEventListener('mouseout', function () {
    pSs();
});