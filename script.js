let fields = [];
let currentShape = 'cross';
let gameOver = false;



function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.add('playerInactive');
            document.getElementById('player2').classList.remove('playerInactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player1').classList.remove('playerInactive');
            document.getElementById('player2').classList.add('playerInactive');
        }

        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line1').style.transform = 'scale(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line2').style.transform = 'scale(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line3').style.transform = 'scale(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line4').style.transform = 'rotate(90deg) scale(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line5').style.transform = 'rotate(90deg) scale(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line6').style.transform = 'rotate(90deg) scale(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line7').style.transform = 'rotate(45deg) scale(1)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line8').style.transform = 'rotate(-45deg) scale(1)';
    }

    if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8] && !winner) {
        checkForUndecided();
    }

    if (winner) {
        theWinner();
    }
}


function theWinner(winner) {
    gameOver = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('reStart').classList.remove('d-none');
        }, 1000);
}


function checkForUndecided() {
    setTimeout(function () {
        document.getElementById('undecIded').classList.remove('d-none');
        document.getElementById('reStartUndecided').classList.remove('d-none');
        document.getElementById('undecidedImg').classList.remove('d-none');
        document.getElementById('undecidedText').classList.remove('d-none');
    }, 1000);
}


function reStart(id) {
    gameOver = false;
    fields = [];
    fillShape(id);
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('reStart').classList.add('d-none');
    for (let i = 1; i < 9; i++) {
        reStartLine(i);
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}


function restartUndecided(id) {
    gameOver = false;
    fields = [];
    fillShape(id);
    document.getElementById('undecIded').classList.add('d-none');
    document.getElementById('reStartUndecided').classList.add('d-none');
    document.getElementById('undecidedImg').classList.add('d-none');
    document.getElementById('undecidedText').classList.add('d-none');
    for (let i = 1; i < 9; i++) {
        reStartLine(i);
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}


function reStartLine(i) {
    document.getElementById('line' + i).style.transform = 'scale(0)';
    document.getElementById('line4').style.transform = 'rotate(90deg) scale(0)';
    document.getElementById('line5').style.transform = 'rotate(90deg) scale(0)';
    document.getElementById('line6').style.transform = 'rotate(90deg) scale(0)';
    document.getElementById('line7').style.transform = 'rotate(45deg) scale(0)';
    document.getElementById('line8').style.transform = 'rotate(-45deg) scale(0)';
}