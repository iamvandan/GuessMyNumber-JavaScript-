'use strict';

let score = 20
let highScore = 0
let secreateNo = 0
let messageNeedToDisplay = 'Start guessing...'


const checkBtnClicked = function () {

    const inputValue = Number(document.querySelector('.guess').value);

    if (inputValue) {
        if (secreateNo == inputValue) {
            assignHightScore()
            messageNeedToDisplay = 'You are right!'
            updateBackgroundColorForBody(true)
            document.querySelector('.check').removeEventListener('click',checkBtnClicked)
        } else if (score == 1) {
            messageNeedToDisplay = "You lost the game!"
            score -= 1
        } else {
            messageNeedToDisplay = (secreateNo < inputValue) ? 'Your number is too high!' : 'Your number is too low!'
            score -= 1
        }
        document.querySelector('.score').textContent = score
        setGuessingLabel()
        if (score == 0) {
            document.querySelector('.check').removeEventListener('click',checkBtnClicked)
        }
    } else {
        alert("Text field is empty")
    }
}

const againBtnClicked = function() {
    resetEverything()
}


document.querySelector('.check').addEventListener('click', checkBtnClicked)

document.querySelector('.again').addEventListener('click', againBtnClicked)

resetEverything()
getSecreateNumber()
setGuessingLabel()

function getSecreateNumber() {
    secreateNo = Math.trunc(Math.random() * 20) + 1
    console.log("Secreate no is-",secreateNo)
}

function setGuessingLabel() {
    document.querySelector('.message').textContent = messageNeedToDisplay
}

function assignHightScore() {
    if (score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore
    }
}

function updateBackgroundColorForBody(isNumberFound) {
    if (isNumberFound) {
         document.body.style.backgroundColor = '#AA0000'
    } else {
        document.body.style.backgroundColor = '#000000'
    }
}

function resetEverything() {

    messageNeedToDisplay = 'Start guessing...'

    getSecreateNumber()
    setGuessingLabel()
    updateBackgroundColorForBody(false)
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.check').addEventListener('click', checkBtnClicked)
    document.querySelector('.guess').value = ''
}


