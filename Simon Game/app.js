let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green" ];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");
// let btn = document.querySelectorAll("btn");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }

    
});

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 240);
 }

 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");

    }, 240);
 }

function levelUp(){
    userSeq = [];
    level ++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3)
    let randomColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    //  console.log(randomColor);
    //  console.log(randbtn)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns (idx){
//    console.log("curr level : ", level);
// let idx = level-1;

if(userSeq[idx] == gameSeq[idx]){
  
   if(userSeq.length == gameSeq.length){
    setTimeout(levelUp, 1000);
   }
 }
 else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start game.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
    },180);
         
    reset();
 }
}

function btnPrss () {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    checkAns (userSeq.length-1);
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPrss);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}