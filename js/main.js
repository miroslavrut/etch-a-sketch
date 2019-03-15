const container = document.createElement("div");
container.style.display = "grid";
container.setAttribute("id","container");
const main = document.querySelector("#main");
main.appendChild(container);

const newBtn = document.querySelector("#new-grid");
const clearBtn = document.querySelector("#clear");
const rgbBtn = document.querySelector("#rgb");

function createGrid(gridSize) {
    container.style.gridTemplate = `repeat(${gridSize},1fr) / repeat(${gridSize},1fr)`;
    for(let i = 0; i < gridSize * gridSize; ++i){
        const div = document.createElement("div");
        container.appendChild(div);
    }
    hover();
}

function reset() {
    const div = document.querySelectorAll("#container > div");
    div.forEach((div) => {
        div.parentNode.removeChild(div);
    })
}

function hover() {
    const div = document.querySelectorAll("#container  div");
    div.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.background = "black";
        });
    });
}

newBtn.addEventListener('click', () => {
    reset();
    const newSize = prompt("Size: ");
    createGrid(newSize);
});

clearBtn.addEventListener('click', () => {
    const div = document.querySelectorAll("#container > div");
    div.forEach((div) => {
            div.style.background = "white";
        });
});

container.addEventListener('mouseenter',() => {
        container.style.borderColor = "rgba(235, 75, 26, 0.908)";
});

container.addEventListener('mouseleave',() => {
    container.style.borderColor = "rgba(235, 75, 26, 0.608)";
});

createGrid(16);