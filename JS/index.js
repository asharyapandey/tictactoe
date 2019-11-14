"use strict";
let turn = true;
let movesCounter = 0;
let labelX = document.querySelector('.p1');
let labelO = document.querySelector('.p2');
let btnPlayAgain =document.querySelector("#playAgain");
let endgame = document.querySelector(".endgame");
labelX.style.color = "red";

function clicked(event){// gets triggered when buttons are clicked
    let letter = checkTurn();
    event.innerText = letter;
    event.disabled = true;
    movesCounter++;
    gameChecker();
}

function checkTurn(){//function to switch turns
    let letter;
    if (turn) {
        letter = "X";
        labelX.style.color = "black";//changing color acc to turn change
        labelO.style.color = "red";
        turn = false;
    } else {
        letter = "O";
        labelX.style.color = "red";
        labelO.style.color = "black";
        turn = true;
    }
    return letter;
}

function gameChecker(){
    // console.log("checked");
    let r1c1 = document.querySelector('.r1c1').innerText;
    let r1c2 = document.querySelector('.r1c2').innerText;
    let r1c3 = document.querySelector('.r1c3').innerText;
    let r2c1 = document.querySelector('.r2c1').innerText;
    let r2c2 = document.querySelector('.r2c2').innerText;
    let r2c3 = document.querySelector('.r2c3').innerText;
    let r3c1 = document.querySelector('.r3c1').innerText;
    let r3c2 = document.querySelector('.r3c2').innerText;
    let r3c3 = document.querySelector('.r3c3').innerText;
    
    if((r1c1 ==='X' && r1c2 ==='X' &&r1c3 ==='X') || (r1c1 ==='O' && r1c2 ==='O' && r1c3 ==='O')){
        endGame(r1c1);
    }
    else if ((r2c1 ==='X' && r2c2 ==='X' && r2c3 ==='X') || (r2c1 ==='O' && r2c2 ==='O' && r2c3 ==='O')){
        endGame(r2c1);
    }
    else if ((r3c1 ==='X' && r3c2 ==='X' && r3c3 ==='X') || (r3c1 ==='O' && r3c2 ==='O' && r3c3 ==='O')){
        endGame(r3c1);
    }
    else if ((r1c1 ==='X' && r2c1 ==='X' && r3c1 ==='X') || (r1c1 ==='O' && r2c1 ==='O' && r3c1 ==='O')){
        endGame(r1c1);
    }
    else if ((r1c2 ==='X' && r2c2 ==='X' && r3c2 ==='X') || (r1c2 ==='O' && r2c2 ==='O' && r3c2 ==='O')){
        endGame(r1c2);
    }
    else if ((r1c3 ==='X' && r2c3 ==='X' && r3c3 ==='X') || (r1c3 ==='O' && r2c3 ==='O' && r3c3 ==='O')){
        endGame(r1c3);
    }
    else if ((r1c1 ==='X' && r2c2 ==='X' && r3c3 ==='X') || (r1c1 ==='O' && r2c2 ==='O' && r3c3 ==='O')){
        endGame(r1c1);
    }
    else if ((r1c3 ==='X' && r2c2 ==='X' && r3c1 ==='X') || (r1c3 ==='O' && r2c2 ==='O' && r3c1 ==='O')){
        endGame(r1c3);
    }
}

function endGame(winner) {
    endgame.style.display = "block";
    endgame.firstElementChild.innerText = `And the Winner is ${winner}`;
}

btnPlayAgain.addEventListener("click", event =>{
    location.reload();
});