console.log('Your JS is linked up. Be the person you needed when you were little.')

// constants

const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// app's state (variables)
let board;
//declaring a function
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];

        render();
    };

let turn = 'X';
let win;

// cached element references
//array.from takes an array-like object and turns it into an actual array so that we can do stuff like .forEach to it
const squares = Array.from(document.querySelectorAll('#board div'));
const messages =document.querySelector('h2');

// event listeners
//finds the first element named board (we only have one called board)
document.getElementById('board').addEventListener('click', handleTurn);

// functions

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo,index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board [combo[0]] === board [combo[2]]) {
            winner = board[combo[0]];
        }
    });
    return winner;
}

function render() {
    //again you can name them anything but first is contents of each array item, second is which number in the array and last would be the array itself (rarely used)
    board.forEach(function(mark,index) {
        //console.log(mark,index);
        //mark is what we've set as the term for the content of each array item
        //textContent *isn't* something you could name anything, unlike mark/index. it's a property (similar to forEach which is a function. a function executes something but a property doesn't)
        squares[index].textContent = mark;
        //squares is an array, the [] is how we access an element of an array based on its position
    });

};


//remember to call the init function
//the letters init could be anything, use something descriptive that will make sense later
init();

//hoisting functions - look it up.

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        //triple === is like == but stricter, best just to use it instead of double ==
        return square === event.target;
    });
    //square brackets are usually to do with arrays/or grabbing some info from the thing on the left
    board[idx] = turn;
    console.log(board);

    win = getWinner();
    render();


    // turn === 'X' ? turn = 'O' : turn = 'X';

    // ternary version of if statement    
    // turn === 'X' ? turn = 'O' : turn = 'X';

    // {/* if (turn === 'X') {
    //     turn = 'O'
    //     } else {
    //     turn = 'X'
    //     }; */}

    //refactored version to make an efficient ternary
    turn = turn === 'X' ?  'O' :  'X';
        // if you want to put a variable within a string you have to use a ` instead of a ' quote
        //if win is true, then do the thing after ?, and then the : means else
    messages.textContent = win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

    //way to write the above without ternary
    // if (win) {
    //     messages.textContent = `${win} wins the game!`;
    //   } else {
    //     messages.textContent = `It's ${turn}'s turn!`;
    //   }
    console.log(messages);
    console.log(turn);

    // if the first square is not empty, and if the contents of the first square is equal to the contents of the second square and if the contents of the first square is equal to the last square
    // then win is equal to whatever is in the first square, else there is no win 
    // if (board[0] === true && board[0] === board [1] && board [0] === board [2]) {
    //         winner = board[0]; 
    //     }
    //     else {
    //         win = null;
    //     }


    }
