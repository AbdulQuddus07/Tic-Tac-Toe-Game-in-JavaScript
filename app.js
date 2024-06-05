let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let rstbtn = document.querySelector("#reset-btn");
let turnX = true;

// Todi(2D) Arrays

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 3, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerHTML = "X";
      turnX = false;
    } else {
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const resetGame = () => {
  turnX = true;
  enabledBox();
  msgContainer.classList.add("hide");
};
const enabledBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
  const disabledBox = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const showWinner = (winner) => {
    msg.innerHTML = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
  };
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Value = boxes[pattern[0]].innerText;
      let pos2Value = boxes[pattern[1]].innerText;
      let pos3Value = boxes[pattern[2]].innerText;
      if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
        if (pos1Value === pos2Value && pos2Value === pos3Value) {
          showWinner(pos1Value);
        }
      }
    }
  };
rstbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click",resetGame);
