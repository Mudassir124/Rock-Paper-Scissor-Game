let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choices");
let opt = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let user_para = document.querySelector("#computer-score");
let computer_para = document.querySelector("#user-score");

let gencompchoice = () => {
  let option = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const drawgame = () => {
  console.log("Game was Draw");
  msg.innerText = "Draw Game ";
  msg.style.backgroundColor = "yellow";
};

let showWinner = (userwin) => {
  if (userwin) {
    console.log("You Win");
    msg.innerText = "You win";
    msg.style.backgroundColor = "green";
    user_score++;
    user_para.innerText = user_score;
  } else {
    console.log("You lose");
    msg.innerText = "You lose";
    msg.style.backgroundColor = "red";
    comp_score++;
    computer_para.innerText = comp_score;
  }
};
const playgame = (userchoice) => {
  console.log("user_choice", userchoice);
  const compchoice = gencompchoice();
  console.log("compchoice=", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      // paper scissor
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock scissor
      userwin = compchoice === "scissor" ? false : true;
    } else {
      // paper rock
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

opt.forEach((opt) => {
  opt.addEventListener("click", () => {
    const userchoice = opt.getAttribute("id");
    playgame(userchoice);
  });
});
