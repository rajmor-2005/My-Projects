let userscore=0;
let botscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userscorepara=document.querySelector("#user-score");
const botscorepara=document.querySelector("#bot-score");


const genBotchoice=()=>{
    const option=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);

    return option[randomIdx];
}
const drawGame=()=>{
       console.log("Game was Draw");
       msg.innerText="Game was Draw, Play Again";
       msg.style.backgroundColor="yellow";
       msg.style.color="black";


}

const showWinner=(userChoice, botChoice, userWin)=>{
    if(userWin)
    {
        userscore++;
        userscorepara.innerText=userscore;
       msg.innerText=`You Win. Your ${userChoice} beat ${botChoice}`;
        msg.style.backgroundColor="green";
        
    }

    else{
        botscore++;
        botscorepara.innerText=botscore;
        msg.innerText=`You Lose. ${botChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor="red";


    }
};

const playGame = (userChoice) => {
    console.log("userchoice =",userChoice);
    const botChoice=genBotchoice();
    console.log("bot choice =",botChoice);

    if(userChoice===botChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=botChoice==="paper"? false:true;
        }

        else if(userChoice==="paper")
        {
            userWin=botChoice==="scissors"?false:true;
        }

        else
        {
            userWin=botChoice==="rock"?false:true;
        }

        showWinner(userChoice,botChoice,userWin);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
  });
});