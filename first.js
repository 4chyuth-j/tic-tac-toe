let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn=document.querySelector("#new_btn");
let msgContainer=document.querySelector(".container_game");
let msg=document.querySelector("#msg");
let turnO; //playerX, playerO
let playerin = prompt("Player one choose your symbol(X/O)",'X'); //for taking entry from user
if (playerin === "X" || playerin === "x") {
    turnO = false;
}
else if (playerin === "O" || playerin === "o") {
    turnO = true;
}
else {
    alert("wrong input!!!!");
}
const winPatterns = [  //winning pattern 2D array
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

resetBtn.addEventListener("click",()=>{
location.reload();
});

newGameBtn.addEventListener("click",()=>{
location.reload();
});



boxes.forEach((box) => {                   //adding event listener to all the node list elements
    box.addEventListener("click", () => {
        console.log("clicked the box");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // for making the button disabled after adding particular value to it
        checkWinner();
    });
});

const disableBox=()=>{
for(box of boxes){
    box.disabled=true;
}
};

// const enableBox=()=>{
// for(box of boxes){
//     box.disabled=false;
//     box.innerText="";
//     location.reload();
// }
// };

const callWinner=(Winner)=>{
msg.innerText=`Congratulations!!!... Winner is ${Winner}`;
msgContainer.classList.remove("hide");
disableBox();
};


let checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let patternVal1 = boxes[pattern[0]].innerText;
        let patternVal2 = boxes[pattern[1]].innerText;
        let patternVal3 = boxes[pattern[2]].innerText;
        if(patternVal1!="" && patternVal2!="" && patternVal3!=""){
            if(patternVal1==patternVal2 && patternVal2==patternVal3 ){
                 console.log("yoohoooo!!!.. Winner is ",patternVal1);
                 callWinner(patternVal1);
            }
           
        }
    }

};