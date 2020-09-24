console.log('Your JS is linked up. Be the person you needed when you were little.')

// constants

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

// cached element references
//array.from takes an array-like object and turns it into an actual array so that we can do stuff like .forEach to it
const squares = Array.from(document.querySelectorAll('#board div'));

// event listeners
//finds the first element named board (we only have one called board)
document.getElementById('board').addEventListener('click', handleTurn);

// functions
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
};