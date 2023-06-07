// const btnSi = document.querySelector("#btnSi")

// btnSi.addEventListener("click", () => {
//     alert("Sabia que dirías que sí")
// })

const btnSi = () => alert("Sabía que dirías que sí")

const btnNo = (event) => {
    let target = event.target,
        randomX = numeroRandom(0,500),
        randomY = numeroRandom(0,900)
    target.style.position = "absolute"
    target.style.top = randomX + "px"
    target.style.left = randomY + "px"
    console.log(target)
}

const numeroRandom = (min, max) => {
    return Math.floor(Math.random()*(max - min))
}