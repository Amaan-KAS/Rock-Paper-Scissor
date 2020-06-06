const userScore=0;
const computerScore=0;
const userScore_span=document.getElementById("score-board-left");
const computerScore_span=document.getElementById("score-board-right");
const scoreBoard_div=document.querySelector(".player-labels");
const result_div=document.getElementById("demo");
const paper_div=document.getElementById("paper");
const rock_div=document.getElementById("rock");
const scissor_div=document.getElementById("scissor");

const getComputerChoice= ()=>{
   let num=Math.floor(Math.random()*3)
   // console.log(num);
   switch(num){
        case 0: return "rock";
                break;
        case 1: return "paper";
                break;
        case 2: return "scissor";
                break;
        default: return "wrongChoice Mate";  
      }
    }
// console.log(getComputerChoice());

const game=(userchoice)=> {
  const computerChoice=getComputerChoice();
  console.log(computerChoice);
  console.log(userchoice);
  result(computerChoice,userchoice)
  return userchoice; 
}

let userCoins=0;
let computerCoins=0;

const result=(CC,UC)=>{
  // const userCoins=0;
  // const computerCoins=0;
  let str =UC.toLowerCase();
  let display;

  if(UC === "Rock"){ 
    if(CC === "paper"){
      display="Paper Catches Rock, Computer Wins!!";
      computerCoins++;
      }else if(CC === "scissor"){
        display="Rock Distroy Scissor, User Wins"
        userCoins++;
        
      }
    } 

  if(UC === "Paper"){ 
    if(CC === "rock"){
      display="Paper Catches Rock, User Wins!!";
      userCoins++;
     }else if(CC === "scissor"){
      display="Scissor Cuts Paper, Computer Wins!!";
      computerCoins++;
     }
    }

  if(UC === "Scissor"){ 
    if(CC === "rock"){
      display="Rock Distroy Scissor, Computer Wins"
      computerCoins++;
     }else if(CC === "paper"){
      display="Scissor Cuts Paper, User Wins!!"
      userCoins++;
     }
    }

  if(str === CC){
    display="TIE!!"
  }
  let pattern;
  // let pattern= / User Wins/.test(display);
  if(display==="TIE!!"){
    pattern= "TIE"
  }else{
     pattern= / User Wins/.test(display);
  }
  console.log(pattern, UC);
  glow(pattern, UC);
  console.log(display);
  console.log(userCoins , computerCoins);
  // document.getElementById("demo").innerHTML = display;
  result_div.innerHTML= display;
  // document.getElementById("score-board").innerHTML = userCoins+":"+computerCoins;
  userScore_span.innerHTML= userCoins;
  computerScore_span.innerHTML= computerCoins;
}

// const result_div=document.querySelector(".display");

function main() {
  let click;
  rock_div.addEventListener('click', function() {
    game("Rock");
    click="Rock";
})

  paper_div.addEventListener('click', function() {
  game("Paper");
  click="Paper";
})

  scissor_div.addEventListener('click', function() {
    game("Scissor");
    click="Scissor";
})
 return click;

}

function glow(TF,UC){
  switch( TF + UC){
    case("trueRock"):document.getElementById("rock").style.border="lime 3px solid";
    break;
    case("truePaper"):document.getElementById("paper").style.border="lime 3px solid";
    break;
    case("trueScissor"):document.getElementById("scissor").style.border="lime 3px solid";
    break;
    case("falseRock"):document.getElementById("rock").style.border="orange 3px solid";
    break;
    case("falsePaper"):document.getElementById("paper").style.border="orange 3px solid";
    break;
    case("falseScissor"):document.getElementById("scissor").style.border="orange 3px solid";
    break;
    case("TIERock"):document.getElementById("rock").style.border="gray 3px solid";
    break;
    case("TIEPaper"):document.getElementById("paper").style.border="gray 3px solid";
    break;
    case("TIEScissor"):document.getElementById("scissor").style.border="gray 3px solid";
    break;
}
}

main();

function KS(key){
  if(key === "a"){
     console.log("fvsv");
   }
   switch(key){
     case a: console.log("A was pressed");
     sound(a);
     break;
     case b: console.log("B was pressed");
     sound(b);
     break;
     case c: console.log("C was pressed");
     break;
     case d: console.log("D was pressed");
     break;
     case e: console.log("E was pressed");
     break;
     case f: console.log("F was pressed");
     break;
   }
}

function sound(key){
  if( key === a){
    
  }
}