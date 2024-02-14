const body = document.querySelector("body");
const boxGenerate = document.querySelector("button");
const containerY = document.createElement("div");
let boxNum;

containerY.style.display = "flex"
containerY.style.flexWrap = "wrap"
containerY.style.flexDirection = "column"

boxGenerate.addEventListener("click",()=>{
    boxNum = prompt("what grid would you like?");
    console.log(boxNum)
})



for (let i = 1; i <= boxNum; i++){
    const containerX = document.createElement("div")
    containerX.style.display = "flex"
    containerX.style.flexWrap = "wrap"
    for (let i = 1; i <= boxNum; i++){
        const box = document.createElement("div")
        box.classList.add("box-color");
    
        box.style.backgroundColor = "blue"
        box.style.border = "solid 1px black"
        box.style.height = "50px"
        box.style.width = "50px"
    
        containerX.appendChild(box)
    }
    containerY.append(containerX);
}

body.appendChild(containerY);

let boxColor = document.querySelectorAll(".box-color")
console.log(boxColor);

boxColor.forEach((box)=>{
    box.addEventListener("mouseover", ()=>{
        box.style.backgroundColor = "red"
    });
});





