//variaveis
let cpuScoreBoard = document.querySelector('.rScore')
let cpuScore = Number(cpuScoreBoard.value)
const playerScoreBoard = document.querySelector('.yScore')
let playerScore = Number(playerScoreBoard.value)
const optBtns = document.querySelectorAll('.btnImg')
const playerResult = document.querySelector('.rightHandImg')
const cpuResult = document.querySelector('.leftHandImg')
let showRes = document.createElement('div')
let centerContainer = document.querySelector('.counterContainer')
showRes.classList.add('showRes')
let handImgs = document.querySelectorAll('.handDiv')
    
    
//loop para acessar os botoes
optBtns.forEach((img, index) => {
    //add evento click em cada botao
    img.addEventListener("click", () => {
        //add a classe active para que quando apertar o botao ele ficar colorido
        img.classList.add('active')

        playerResult.src = "../imagens/Mao fechada invertido.png"
        cpuResult.src = "../imagens/Mao fechada.png"
        showRes.innerHTML = ""

        centerContainer.appendChild(showRes); // força o elemento a aparecer no DOM logo
        // showRes.textContent = 3;  
        
        let tempo = 3;
        showRes.textContent = tempo; // mostra "3" imediatamente
        centerContainer.appendChild(showRes); // adiciona à tela se ainda não estiver

        const intervalo = setInterval(() => {
            showRes.textContent = tempo
            tempo--;

            if(tempo === 0){
                clearInterval(intervalo)
            }
            
            
        }, 500);


        //outro loop para ecessar os botoes
        optBtns.forEach((img2, index2) => {

            index !== index2 && img2.classList.remove('active')

        })





        //add animação nas mãos
        handImgs.forEach((img) => {
            img.classList.add("animation")

        })

        
        

        
        let time = setTimeout(() => {

             

            handImgs.forEach((img) => {
                img.classList.remove("animation")

            })

            let playerHandImgs = ["../imagens/Mao fechada invertido.png", "../imagens/Mao aberta invertida.png", "../imagens/mao tesoura invertido.png"]
            playerResult.src = playerHandImgs[index]

            let randomNumber = Math.floor(Math.random() * 3)

            let cpuHandImgs = ["../imagens/Mao fechada.png", "../imagens/Mao aberta.png", "../imagens/mao tesoura.png"]
            cpuResult.src = cpuHandImgs[randomNumber]

            let cpuValue = ["R", "P", "S"][randomNumber]

            let playerValue = ["R", "P", "S"][index]

            let outComes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PR: "User",
                PP: "Draw",
                PS: "Cpu",
                SR: "Cpu",
                SP: "User",
                SS: "Draw"
            }

            let outComeValue = outComes[playerValue + cpuValue]

            showRes.textContent = outComeValue
            centerContainer.appendChild(showRes)    

            if(outComeValue === "Cpu"){
                cpuScore++
                cpuScoreBoard.value = Number(cpuScore)
                
            }else if (outComeValue === "User"){
                playerScore++
                playerScoreBoard.value = Number(playerScore)
            }

        },2000)
    
        

        
    })

} )