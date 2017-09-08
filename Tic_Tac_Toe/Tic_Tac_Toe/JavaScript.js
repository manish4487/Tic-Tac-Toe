//resart button for game
var restart = document.querySelector("#b");
//select all the squares in the game
var squares = document.querySelectorAll('td');

function clearsquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearsquares);

//check on square
function cycleMark() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent) {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}

//add eventlisterner to all squares

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', cycleMark)
}