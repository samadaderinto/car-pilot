function moveLeft() {
    let left =  parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    left -= 100;
    if (left >= 0) {
        character.style.left = left + 'px'
        }
}

function moveRight() {
    let left =  parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    left += 100;
    if (left <= 200) {
    character.style.left = left + 'px'
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        moveLeft() 
    } else {
        moveRight()
    }
})

var block = document.getElementById('block');
var score = document.getElementById("counter-score");
var flight = document.getElementById("counter-flight");
var btnPause = document.getElementById("btn-pause");
var btnReplay = document.getElementById("btn-replay");
var scoreCounter = 0;
var flightCounter = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + 'px'
    scoreCounter++;
    score.innerText = scoreCounter;

    if(scoreCounter % 5 == 0) {
        flightCounter++;
        flight.innerText = flightCounter
    }
    
})

setInterval(function() {
var characterLeft = parseInt(Window.getComputedStyle(character).getPropertyValue("left"));
var blockLeft = parseInt(Window.getComputedStyle(block).getPropertyValue("left"));
var blockTop = parseInt(Window.getComputedStyle(block).getPropertyValue("top"));

if (characterLeft === blockLeft && blockTop < 500 && blockTop > 300) {
    alert('GAME OVER, Score:' + counter);
    block.style.animation = 'none'
}
},1000)


document.getElementById('left').addEventListener('touchstart', moveLeft)
document.getElementById('right').addEventListener('touchstart', moveRight)

