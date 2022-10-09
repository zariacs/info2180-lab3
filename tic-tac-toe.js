window.onload = function () {
    addSquareClassToSquares();
    addIDAndClickListenersToSquares();
    addNewGameButtonListener();
}

function addSquareClassToSquares() {
    const allSquares = document.getElementById("board").children;
    for (var square of allSquares) {
        square.classList.add("square");
    }
}

const allSquares = document.getElementsByClassName("square");

function addIDAndClickListenersToSquares() {
    for (var square = 0; square < allSquares.length; square++) {
        allSquares[square].id = square + 1;
        allSquares[square].addEventListener("click", addXO);
        allSquares[square].addEventListener("mouseover", changeForIncomingHover);
        allSquares[square].addEventListener("mouseout", changeForOutgoingHover);
    }
}

let moves = [];

function addXO() {
    if (moves.length % 2 == 0) {
        this.className = "square X";
        this.innerHTML = "X";
        moves.push("X");
        checkForWinner(this.id);
    } else {
        this.className = "square O";
        this.innerHTML = "O";
        moves.push("O");
        checkForWinner(this.id);
    }
}

function changeForIncomingHover() {
    this.classList.add("hover");
}

function changeForOutgoingHover() {
    this.classList.remove("hover");
}

function checkForWinner(square) {
    player = getSquare(square);
    let diagonalMatch = ((square % 3 == 1 || square % 3 == 0) ? checkDiagonal(square) : false);
    winnerFound = checkRow(square) || checkColumn(square) || diagonalMatch;
    if (winnerFound) {
        declareWinner(player);
    }
}

function declareWinner(player) {
    document.getElementById("status").innerHTML = `Congratulations! ${player} is the Winner!`;
    document.getElementById("status").classList.add("you-won");
}

function getSquare(whichSquare) {
    return document.getElementById(whichSquare).innerHTML;
}

function checkRow(whichSquare) {
    square = whichSquare;
    // Confirms that a play was made in the square
    if (getSquare(square) != 'O' && getSquare(square) != 'X') { return false; }
    // Determines if all other squares in the row have the same (filled) value as current square
    if (square <= 3) {
        return (getSquare(1) == getSquare(2) && getSquare(2) == getSquare(3));
    } else if (square <= 6 && square > 3) {
        return (getSquare(4) == getSquare(5) && getSquare(5) == getSquare(6));
    } else if (square <= 9 && square > 6) {
        return (getSquare(7) == getSquare(8) && getSquare(8) == getSquare(9));
    }
    return false;
}

function checkColumn(whichSquare) {
    square = whichSquare;
    // Confirms that a play was made in the square
    if (getSquare(square) != 'O' && getSquare(square) != 'X') { return false; }
    // Determines if all other squares in the columm have the same (filled) value as current square
    if (square % 3 == 1) {
        return (getSquare(1) == getSquare(4) && getSquare(4) == getSquare(7));
    } else if (square % 3 == 2) {
        return (getSquare(2) == getSquare(5) && getSquare(5) == getSquare(8));
    } else if (square % 3 == 0) {
        return (getSquare(3) == getSquare(6) && getSquare(6) == getSquare(9));
    }
    return false;
}

function checkDiagonal(whichSquare) {
    square = whichSquare;
    // Confirms that a play was made in the square
    if (getSquare(square) != 'O' && getSquare(square) != 'X') { return false; }
    // Determines if either diagonal has the same filled value as current square
    if (square == 1 || square == 5 || square == 9) {
        return (getSquare(1) != null && getSquare(1) == getSquare(5) && getSquare(5) == getSquare(9));
    } else if (square == 3 || square == 5 || square == 7) {
        return (getSquare(3) != null && getSquare(3) == getSquare(5) && getSquare(5) == getSquare(7));
    } else {
        return false;
    }
}

function addNewGameButtonListener() {
    const button = document.getElementsByClassName("btn")[0];
    button.addEventListener("click", restartGame);
}

function restartGame() {
    resetSquares();
    resetStatusMessage();
}

function resetSquares() {
    for (square of allSquares) {
        square.innerHTML = "";
        square.className = "square";
    }
}

function resetStatusMessage() {
    document.getElementById("status").classList.remove("you-won");
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
}

