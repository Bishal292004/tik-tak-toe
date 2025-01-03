let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
// //2D array
// let arr2 = [["mango", "litchi", "apple"], ["potato", "cucumber"], ["shiry", "pant"]];
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked.");
        if(turnO === true) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true;
        };
        box.disabled = true;
        
        checkWinner();
    });
});



const showWinner = (winner) => {
    msg.innerText = `congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let patern of winPatterns) {
        // console.log(patern[0], patern[1], patern[2]);
        // console.log(
        //     boxes[patern[0]].innerText, 
        //     boxes[patern[1]].innerText, 
        //     boxes[patern[2]].innerText
        // );
        let pos1Val = boxes[patern[0]].innerText;
        let pos2Val = boxes[patern[1]].innerText;
        let pos3Val = boxes[patern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);