'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳Correct Number!';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = 19;

document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🥳Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        if (Number(document.querySelector('.score').textContent) > Number(document.querySelector('.highscore').textContent)) {
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
    } else {
        document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) - 5;
        document.querySelector('.guess').value > secretNumber ? document.querySelector('.message').textContent = '📈 Too High!' : document.querySelector('.message').textContent = '📉 Too Low!';
    }

    if (Number(document.querySelector('.score').textContent) <= 0) {
        document.querySelector('.message').textContent = '😢 You Lost!';
        document.querySelector('body').style.backgroundColor = '#FF0000';
        document.querySelector('.check').style.display = 'none';
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.check').style.display = 'block';
    document.querySelector('.check').textContent = 'Check!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 100;
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
});