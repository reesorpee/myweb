const emptyCell = "";
const board = [  // for the 9 cells
  // 1st line
  emptyCell, // index 0
  emptyCell, // index 1
  emptyCell, // index 2
  // 2nd line
  emptyCell, // index 3
  emptyCell, // index 4
  emptyCell, // index 5
  // 3rd line
  emptyCell, // index 6
  emptyCell, // index 7
  emptyCell, // index 8
];

function getRandomInt(max) {
  // get a random number: [0, max);  e.g.   if max = 5,  it will get a number from [0, 1, 2, 3, 4]
  // learn more about it: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * max);
}

function setBoardX(index) {
  // This is a dummy AI for the computer
  if (board[index] == emptyCell) {
    board[index] = "x";
    const cell = document.getElementById(index + 1);
    cell.innerText = "❌";
    return;
  }
  if (index == 9) {
    setBoardX(0);
  } else {
    setBoardX(index + 1);
  }
  checkWinner();
}

function cellClick(index) {
  console.log(index)
  if (board[index - 1] != emptyCell) {
      // if it's not empty, we don't draw here
      return;
  }
  const cell = document.getElementById(index);
  cell.innerText = "⭕"; // emoji
  board[index - 1] = "o";
  const computerMove = getRandomInt(9);
  setBoardX(computerMove);
  console.log(board);
  checkWinner();
}

function checkWinner() {
  let message;
  if (board[0] == board[1] && board[0] == board[2] && board[0] != emptyCell) {
    // 0 1 2
    message = "Winner is:" + board[0];
  }

  if (board[3] == board[4] && board[3] == board[5] && board[3] != emptyCell) {
    // 3 4 5
    message = "Winner is:" + board[3];
  }

  if (board[6] == board[7] && board[6] == board[8] && board[6] != emptyCell) {
    // 6 7 8
    message = "Winner is:" + board[6];
  }

  if (board[0] == board[3] && board[0] == board[6] && board[0] != emptyCell) {
    // 0 3 6
    message = "Winner is:" + board[0];
  }

  if (board[1] == board[4] && board[1] == board[7] && board[1] != emptyCell) {
    // 1 4 7
    message = "Winner is:" + board[1];
  }

  if (board[2] == board[5] && board[2] == board[8] && board[2] != emptyCell) {
    // 2 5 8
    message = "Winner is:" + board[2];
  }

  if (board[0] == board[4] && board[0] == board[8] && board[0] != emptyCell) {
    // 0 4 8
    message = "Winner is:" + board[0];
  }

  if (board[2] == board[4] && board[2] == board[6] && board[2] != emptyCell) {
    // 2 4 6
    message = "Winner is:" + board[2];
  }

  
  if ( message)
  {
    const cell = document.getElementById('message');
    cell.innerText = message;
  }
}