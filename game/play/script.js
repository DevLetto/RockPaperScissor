const { createElement } = require("react");

function startGame(){
    
    let counterContainer = document.querySelector(".counterContainer");
    let counter = document.createElement("div");
    let startBtn = document.getElementById('startBtn')

    counter.classList.add("counter")  

    counterContainer.appendChild(counter);
    counterContainer.removeChild(startBtn)

   let initialTime = 3;
   controlTimer(initialTime, counter, counterContainer);


}

function controlTimer(initialTime, counter, counterContainer){
    let remainingTime = initialTime;

    counter.innerText = remainingTime

    let timer =  setInterval(function(){
        remainingTime--;
        counter.innerText = remainingTime;
        if(remainingTime < 1){
            clearInterval(timer);
            counter.innerText = "Go!"
            counter.style.display = "none"
        }
    },500)
}