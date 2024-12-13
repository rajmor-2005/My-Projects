let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newgame-btn");
let winnermsg=document.querySelector(".winner-msg");
let msg=document.querySelector("#msg");

let turn0=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const resetgame=()=>{
     turn0=true;
     enabledbox();
     winnermsg.classList.add("hid");
     
}

const disabledbox=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enabledbox=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";

    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0===true)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled =true;
  
      checkwinner();

    });
});

const winner=(winner)=>{

    msg.innerText=`Congratulations, Winner is ${winner}`;
    winnermsg.classList.remove("hid");
    disabledbox();
}

const checkwinner=() =>{
      for(let pattern of winPattern)
      {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner");
                winner(pos1val);
            }
        }
      }
};


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

