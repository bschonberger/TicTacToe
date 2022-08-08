const tile1 = document.getElementById('1')
const tile2 = document.getElementById('2')
const tile3 = document.getElementById('3')
const tile4 = document.getElementById('4')
const tile5 = document.getElementById('5')
const tile6 = document.getElementById('6')
const tile7 = document.getElementById('7')
const tile8 = document.getElementById('8')
const tile9 = document.getElementById('9')
const icon1 = document.getElementById('icon1')
const icon2 = document.getElementById('icon2')
const name1 = document.getElementById('name1')
const name2 = document.getElementById('name2')
const modal = document.getElementById('modal')
const left = document.getElementById('left')
const right = document.getElementById('right')
const mainGrid = document.getElementById('mainGrid')
const winner = document.getElementById('winner')
const restart = document.getElementById('restart')

let currentPlayer = "X"


tile1.addEventListener('click',() => gameController.makeMove(currentPlayer,tile1))
tile2.addEventListener('click',() => gameController.makeMove(currentPlayer,tile2))
tile3.addEventListener('click',() => gameController.makeMove(currentPlayer,tile3))
tile4.addEventListener('click',() => gameController.makeMove(currentPlayer,tile4))
tile5.addEventListener('click',() => gameController.makeMove(currentPlayer,tile5))
tile6.addEventListener('click',() => gameController.makeMove(currentPlayer,tile6))
tile7.addEventListener('click',() => gameController.makeMove(currentPlayer,tile7))
tile8.addEventListener('click',() => gameController.makeMove(currentPlayer,tile8))
tile9.addEventListener('click',() => gameController.makeMove(currentPlayer,tile9))
restart.addEventListener('click',() => gameController.clearBoard())


const gameBoard = (function() {

    let board = [[tile1,tile2,tile3],
                [tile4,tile5,tile6],
                [tile7,tile8,tile9]]
    
    return {board}

})();


const gameController = (function() {
    'use strict';

    function switchPlayer(){

        if (currentPlayer == "X"){
            currentPlayer = "O"
            icon2.style.backgroundColor = "sandybrown"
            icon1.style.backgroundColor = "white"
        }
        else{
            currentPlayer= "X"
            icon1.style.backgroundColor = "sandybrown"
            icon2.style.backgroundColor = "white"
        }
    }

    function makeMove(player,tile){

        if (tile.hasChildNodes()){
            return
        }
        else{
            if (player == "X"){
                const output = document.createElement('div')
                output.classList.add('contentX')
                output.textContent = player
                tile.prepend(output)
                gameController.switchPlayer()

            }
            else{
                const output = document.createElement('div')
                output.classList.add('contentO')
                output.textContent = player
                tile.prepend(output)
                gameController.switchPlayer()
            }
        }
        checkWinner()


    }
    function declareWinner(string){
        if (string == "Tie"){
            winner.innerHTML = string
            modal.style.display = "flex"
            left.style.opacity = .1
            right.style.opacity = .1
            mainGrid.style.opacity = .1 
        }
        else{
            winner.innerHTML = string + " has won!"
            modal.style.display = "flex"
            left.style.opacity = .1
            right.style.opacity = .1
            mainGrid.style.opacity = .1 
        }
    }

    function clearBoard() {
        modal.style.display = "none"
        left.style.opacity = 1
        right.style.opacity = 1
        mainGrid.style.opacity = 1 
        tile1.innerHTML = ""
        tile2.innerHTML = ""
        tile3.innerHTML = ""
        tile4.innerHTML = ""
        tile5.innerHTML = ""
        tile6.innerHTML = ""
        tile7.innerHTML = ""
        tile8.innerHTML = ""
        tile9.innerHTML = ""
        switchPlayer()
    }

    function checkWinner(){

        function allAreEqual(array) {
            const result = array.every(element => {
              if ((element === array[0]) && (element != "")){
                return true;
              }
            });
          
            return result;
          }

        let row1 = []
        let row2 = []
        let row3 = []
        let col1 = []
        let col2 = []
        let col3 = []
        let diag1 = []
        let diag2 = []
        let j = 2 

        for (let i = 0; i<3;i++){
            row1[i] = gameBoard.board[0][i].textContent
        }

        for (let i = 0; i<3;i++){
            row2[i] = gameBoard.board[1][i].textContent
        }

        for (let i = 0; i<3;i++){
            row3[i] = gameBoard.board[2][i].textContent
        }

        for (let i = 0; i<3;i++){
            col1[i] = gameBoard.board[i][0].textContent
        }

        for (let i = 0; i<3;i++){
            col2[i] = gameBoard.board[i][1].textContent
        }

        for (let i = 0; i<3;i++){
            col3[i] = gameBoard.board[i][2].textContent
        }

        for (let i = 0; i<3;i++){
            diag1[i] = gameBoard.board[i][i].textContent
        }

        for (let i = 0; i<3; i++){
            diag2[i] = gameBoard.board[i][j].textContent
            j--
        }

        if ((allAreEqual(row1))||(allAreEqual(row2))||(allAreEqual(row3))){
            if (currentPlayer == "X"){
                declareWinner("Player 2 ")
            }
            else{
                declareWinner("Player 1 ")
            }

        }
        if ((allAreEqual(col1))||(allAreEqual(col2))||(allAreEqual(col3))){
            if (currentPlayer == "X"){
                declareWinner("Player 2")
            }
            else{
                declareWinner("Player 1")
            }        }
        if ((allAreEqual(diag1))||(allAreEqual(diag2))){
            if (currentPlayer == "X"){
                declareWinner("Player 2")
            }
            else{
                declareWinner("Player 1")
            }        
        }
        if ((tile1.hasChildNodes()) && (tile2.hasChildNodes()) && (tile3.hasChildNodes()) 
            && (tile4.hasChildNodes()) && (tile5.hasChildNodes()) && (tile6.hasChildNodes()) && (tile7.hasChildNodes())
            && (tile8.hasChildNodes()) && (tile9.hasChildNodes())){
                declareWinner("Tie")
            }


    }
    return {makeMove,switchPlayer,checkWinner,declareWinner,clearBoard}

})();








