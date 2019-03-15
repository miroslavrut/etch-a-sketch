const container = document.querySelector("#container");
container.style.display = "grid";

const newBtn = document.querySelector("#new-grid");
const clearBtn = document.querySelector("#clear");

function createGrid(gridSize) {
    container.style.gridTemplate = `repeat(${gridSize},1fr) / repeat(${gridSize},1fr)`;
    for(let i = 0; i < gridSize * gridSize; ++i){
        const div = document.createElement("div");
        container.appendChild(div);
    }
    hover();
}

newBtn.addEventListener('click', () => {
    reset();
    const newSize = prompt("Size: ");
    createGrid(newSize);
});

function hover() {
    const div = document.querySelectorAll("#container  div");
    div.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.background = "black";
        });
    });
}
clearBtn.addEventListener('click', () => {
    const div = document.querySelectorAll("#container > div");
    div.forEach((div) => {
            div.style.background = "white";
        });
    });

    function reset() {
        const div = document.querySelectorAll("#container > div");
        div.forEach((div) => {
            div.parentNode.removeChild(div);
        })
    }

    createGrid(16);