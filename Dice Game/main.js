
 const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const leftImage = document.querySelector(".img1");
const rightImage = document.querySelector(".img2");

function rollDice(){
const leftRandomIndex = Math.floor(Math.random() * 6) +1;

const rightRandomIndex = Math.floor(Math.random() * 6) +1;

 const leftRandomImg = "images/dice" + leftRandomIndex + ".png";
const rightRandomImg = "images/dice" + rightRandomIndex + ".png"


leftImage.setAttribute("src", leftRandomImg);
rightImage.setAttribute("src", rightRandomImg);
winner(leftRandomIndex, rightRandomIndex);


function winner(leftRandomIndex, rightRandomIndex){
    if (leftRandomIndex > rightRandomIndex){
        h1.innerHTML = "Player 1 Win's !";
    }else if( leftRandomIndex < rightRandomIndex){
         h1.innerHTML = "Player 2 Win's!";
    }else {
       h1.innerHTML = "It's a draw!"
    }
}

}

btn.addEventListener("click", rollDice);


rollDice();