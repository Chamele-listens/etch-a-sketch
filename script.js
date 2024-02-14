const body = document.querySelector("body")
const container = document.createElement("div")

let boxNum = prompt("How many boxes would you like?")

for (let i = 1; i <= boxNum; i++){
    const box = document.createElement("div")

    box.style.backgroundColor = "blue"
    box.style.border = "solid 1px black"
    box.style.height = "50px"
    box.style.width = "50px"

    container.appendChild(box)
    console.log(`${i} box`)
}



body.appendChild(container);