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
var counter = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + 'px'
    counter ++;
})

setInterval(function() {
var characterLeft = parseInt(Window.getComputedStyle(character).getPropertyValue("left"));
var blockLeft = parseInt(Window.getComputedStyle(block).getPropertyValue("left"));
var blockTop = parseInt(Window.getComputedStyle(block).getPropertyValue("top"));

if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
    alert('GAME OVER, Score:' + counter);
    block.style.animation = 'none'
}
},1)


document.getElementById('left').addEventListener('touchstart', moveLeft)
document.getElementById('right').addEventListener('touchstart', moveRight)

var a = 4444999999999999999999999993;

a = a.toLocaleString('en')
console.log(a)