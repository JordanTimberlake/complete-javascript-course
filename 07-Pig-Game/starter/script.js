'use strict';

const dice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');

const hold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');


const playerl = document.querySelector('.player--0');
const score1 = document.querySelector('#score--0');
const current1 = document.querySelector('#current--0');

const player2 = document.querySelector('.player--1');
const score2 = document.querySelector('#score--1');
const current2 = document.querySelector('#current--1');


let activePlayer = document.querySelector('.player--active');

const rollDice = function () {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.attributes[0].value = `dice-${diceRoll}.png`;
    return diceRoll;
};

const switchPlayer = function () {
    resetCurrentScore();
    const playing = activePlayer;
    activePlayer.classList.remove('player--active');
    playing.className.includes('player--0') ? player2.classList.add('player--active') : playerl.classList.add('player--active');
    activePlayer = document.querySelector('.player--active');
}

hold.addEventListener('click', function () {
    const playing = document.querySelector('.player--active');
    if (playing) {
        addScore();
        if (getScore() >= 100) {
            const playerWin = activePlayer.children[0].innerHTML;
            dice.classList.add('hidden');
            activePlayer.classList.add('player--winner');
            activePlayer.classList.remove('player--active');
            alert(`${playerWin} won the game!`);
        } else {
            switchPlayer();
        }
    }
});

btnRoll.addEventListener('click', function () {
    const diceRoll = rollDice();
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;
    if (diceRoll !== 1) {
        addDiceRoll(diceRoll);
    } else {
        switchPlayer();
    }
});

newGame.addEventListener('click', function () {
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    dice.classList.add('hidden');
    playerl.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    playerl.classList.add('player--active');
    player2.classList.remove('player--active');
});

const addDiceRoll = function(dice) {
    if (activePlayer.className.includes('player--0')) {
        current1.textContent = Number(current1.textContent) + dice;
    } else {
        current2.textContent = Number(current2.textContent) + dice;
    }
}

const addScore = function () {
    if (activePlayer.className.includes('player--0')) {
        score1.textContent = Number(score1.textContent) + Number(current1.textContent);
    } else {
        score2.textContent = Number(score2.textContent) + Number(current2.textContent);
    }
}

const getScore = function () {
    if (activePlayer.className.includes('player--0')) {
        return score1.textContent;
    } else {
        return score2.textContent;
    }
}

const resetCurrentScore = function () {
    if (activePlayer.className.includes('player--0')) {
        current1.textContent = 0;
    }
    else {
        current2.textContent = 0;
    }
}
