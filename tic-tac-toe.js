window.onload = function () {
    addSquareClassToSquares();
    addClickListenersToSquares();
}

function addSquareClassToSquares() {
    const allSquares = document.getElementById("board").children;
    for (var square of allSquares) {
        square.classList.add("square");
    }
}

function addClickListenersToSquares() {
    const allSquares = document.getElementsByClassName("square");
    for (var square of allSquares) {
        square.addEventListener("click", addXO);
        square.addEventListener("mouseover", changeForIncomingHover);
        square.addEventListener("mouseout", changeForOutgoingHover);

    }
}

let moves = [];

function addXO() {
    if (moves.length % 2 == 0) {
        this.className = "square X";
        this.innerHTML = "X";
        moves.push("x");
    } else {
        this.className = "square O";
        this.innerHTML = "O";
        moves.push("o");
    }
}

function changeForIncomingHover() {
    this.classList.add("hover");
}

function changeForOutgoingHover() {
    this.classList.remove("hover");
}



