const { createElement } = require("react");

function startGame(){
    
    let counterContainer = document.querySelector(".counterContainer");
    let counter = document.createElement("div");
    let startBtn = document.getElementById('startBtn')

    counter.classList.add("counter")  

    counterContainer.appendChild(counter);
    startBtn.style.display = "none"

   let initialTime = 3;
   controlTimer(initialTime, counter, counterContainer);


}

function controlTimer(initialTime, counter, counterContainer, startBtn){
    let remainingTime = initialTime;

    counter.innerText = remainingTime

    let handImgs = document.querySelectorAll('.handImg')
    
    handImgs.forEach((img) => {
        img.classList.add("animation")

    })

    let timer =  setInterval(function(){
        remainingTime--;
        counter.innerText = remainingTime;

        console.log(handImgs)
        
        if(remainingTime < 1){
            clearInterval(timer);
            counter.innerText = "Go!"

            handImgs.forEach((img) => {
                img.classList.remove("animation")

            })

            setTimeout(() => {
                counter.style.display = "none"
                startBtn.style.display = "block"
                
            },500)
        }
    },500)
    
}