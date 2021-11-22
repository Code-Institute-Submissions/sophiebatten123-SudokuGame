//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

// Game board number arrays
let easyGame = ['','','4','','5','','','','','9','','','7','3','4','6','','','','','3','','2','1','','4','9','','3','5','','9','','4','8','','','9','','','','','','3','','','7','6','','1','8','9','2','','3','1','','9','7','','2','','','','','9','1','8','2','','','3','','','','','6','','1','',''];
let mediumGame = ['6','5','9','','1','','2','8','','1','','','','5','','','3','','2','','','8','','','','1','','','','','1','3','5','','7','','8','','','9','','','','','2','','','3','','7','8','6','4','','3','','2','','','9','','','4','','','','','','1','8','','','','','8','7','6','','','',''];
let hardGame = ['','','','','','','','','2','','','','','','','9','4','','','','3','','','','','','5','','9','2','3','','5','','7','4','8','4','','','','','','','','','6','7','','9','8','','','','','','','7','','6','','','','','','','9','','','','2','','4','','8','5','','','3','6',''];

// Game board number solutions
let easyGameSolution = ['2','6','8','9','3','1','7','8','1','5','2','7','5','6','8','1','2','7','6','8','2','5','4','6','7','1','4','3','5','8','5','6','4','6','4','5','7','5','2','7','4','3','9','8'];
let mediumGameSolution = ['3','4','7','8','7','6','2','4','9','3','4','9','7','5','6','4','2','6','9','8','7','1','4','6','3','5','5','9','2','1','1','5','8','7','6','7','6','5','4','2','9','3','9','4','3','1','2','5'];
let hardGameSolution = ['6','8','4','1','5','9','7','3','7','5','1','8','3','2','6','9','2','6','7','4','1','8','1','6','8','5','2','1','7','6','9','3','3','4','2','5','1','2','3','9','4','5','1','8','5','1','6','8','3','4','7','7','2','1','9'];

document.addEventListener("DOMContentLoaded", function() {
    let userLogin = document.getElementById("login");
    let instructionsManual = document.getElementById("instructions");
    let highScores = document.getElementById("personal-best");
    let playButton = document.getElementById("play");
    let resetButton = document.getElementById("reset");

    userLogin.addEventListener("click", function() {
        loginUser();
    })

    instructionsManual.addEventListener("click", function() {
        displayInstructions();
    })

    highScores.addEventListener("click", function() {
        viewHighScores();
    })

    playButton.addEventListener("click", function() {
        runGame();
    })

    resetButton.addEventListener("click", function() {
        resetGame();
    })
})

// User login section of the website allowing credentials to be entered by the user
function loginUser() {
    let userLoginPopUp = document.getElementById("loginpopup");

    userLoginPopUp.style.opacity = "1";
    userLoginPopUp.style.pointerEvents = "auto";
}

// Instructions section will display instructions to the user upon click
function displayInstructions() {
    let instructionsPopUp = document.getElementById("instructionspopup");

    instructionsPopUp.style.opacity = "1";
    instructionsPopUp.style.pointerEvents = "auto";
}

// Highscores section will allow the user to view previously obtained scores
function viewHighScores() {
    let highscoresPopUp = document.getElementById("highscorespopup");

    highscoresPopUp.style.opacity = "1";
    highscoresPopUp.style.pointerEvents = "auto";
}

// Run game will generate a board based upon the selection of difficulty
function runGame() {

    let counter=-1;

    var easy = document.getElementById("easy");
    var medium = document.getElementById("medium");
    var hard = document.getElementById("hard");

    if (easy.checked==true) {
        runEasyGame(medium, hard, counter);
    } else if (medium.checked==true) {
        runMediumGame(easy, hard, counter);
    } else if (hard.checked==true) {
        runHardGame(easy, medium, counter);
    }
}

//Runs the EASYGAME

function runEasyGame(medium, hard, counter) {
    medium.disabled = true;   
    hard.disabled = true;  
    
    for (i=0; i < easyGame.length; i++) {
        let number = document.getElementsByClassName('number');
           for (i=0; i < number.length; i++) {
             if (easyGame[i] === '') {
                number[i].setAttribute("contenteditable", true);
                number[i].classList.add("userInput");
                number[i].dataset.index = ++counter;
                number[i].addEventListener('keyup', event => {
                   if (isNaN(event.target.innerText)) {
                      alert('You must only input numbers');
                      event.target.innerText = "";
                   } else {
                   checkAnswersEasy(event.target.innerText, event.target.dataset.index, event.target)
                   }
                })
                number[i].style.backgroundColor = '#bbb';
             }
             else {
                number[i].innerHTML = easyGame[i];
            }   
        }
    }
}

//Runs the MEDIUMGAME

function runMediumGame(easy, hard, counter) {
    easy.disabled = true;   
    hard.disabled = true;
    alert("medium");
}

//Runs the HARDGAME

function runHardGame(easy, medium, counter) {
    easy.disabled = true;   
    medium.disabled = true;
    alert("hard");
}

// Reset game will delete all previously inputtted numbers allowing the user to start again
function resetGame() {
    alert("Game Reset")
}