const body = document.querySelector("body")
const container = document.createElement("div")
const box = document.createElement("div")

box.style.backgroundColor = "blue"
box.style.border = "solid 1px black"
box.style.height = "50px"
box.style.width = "50px"

container.appendChild(box)

body.appendChild(container);