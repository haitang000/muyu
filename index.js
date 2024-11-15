let count = 0;
let countDisplay = document.querySelector('#count');
const sound1 = new Audio('wooden_fish.mp3');

document.getElementById('btn').addEventListener('click', function() {
    count++;
    document.getElementById('count').textContent = `${count}`;
    count.innerHTML = `${count}`;
    countDisplay.style.scale = 1.1;
    sound1.play();
    setTimeout(function() {
        countDisplay.style.scale = 1;
    }, 100);
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        count++;
        countDisplay.textContent = `${count}`;
        countDisplay.style.transform = 'scale(1.1)';
        clickSound.play();
        setTimeout(function() {
            countDisplay.style.transform = 'scale(1)';
        }, 100);
    }
});


document.addEventListener('wheel', function(event) {
    event.preventDefault();
});

document.addEventListener('touchmove', function(event) {
    event.preventDefault();
});