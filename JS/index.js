"use strict";
let turn = true;

function clicked(event){
    let letter = checkTurn();
    event.innerText = letter;
    event.disabled = true;
}

function checkTurn(){
    let letter;
    if (turn) {
        letter = "X";
        turn = false;
    } else {
        letter = "O";
        turn = true;
    }
    return letter;
}