window.onload = function () {
    addSquareClassToSquares();
}

function addSquareClassToSquares() {
    const allSquares = document.getElementById("board").children;
    for (var square of allSquares) {
        square.classList.add("square");
    }
}



