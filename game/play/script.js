
const cpuScore = document.querySelector('.rScore').value
const playerScore = document.querySelector('.yScore').value
const optBtns = document.querySelectorAll('.btnImg')
const playerResult = document.querySelector('.rightHandImg')
const cpuResult = document.querySelector('.leftHandImg')
let showRes = document.createElement('div')
let centerContainer = document.querySelector('.counterContainer')
showRes.classList.add('showRes')
let handImgs = document.querySelectorAll('.handDiv')
    
    

optBtns.forEach((img, index) => {
    img.addEventListener("click", () => {
        img.classList.add('active')

        playerResult.src = "/game/imagens/Mao fechada invertido.png"
        cpuResult.src = "/game/imagens/Mao fechada.png"

        optBtns.forEach((img2, index2) => {

            index !== index2 && img2.classList.remove('active')

        })

        handImgs.forEach((img) => {
            img.classList.add("animation")

        })


        let time = setTimeout(() => {

            handImgs.forEach((img) => {
                img.classList.remove("animation")

            })

            let playerHandImgs = ["/game/imagens/Mao fechada invertido.png", "/game/imagens/Mao aberta invertida.png", "/game/imagens/mao tesoura invertido.png"]
            playerResult.src = playerHandImgs[index]

            let randomNumber = Math.floor(Math.random() * 3)

            let cpuHandImgs = ["/game/imagens/Mao fechada.png", "/game/imagens/Mao aberta.png", "/game/imagens/mao tesoura.png"]
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

        },2500)

        
    })

} )