    let boxSize= 37;
    
    const gridBox = document.querySelector("#container");
    
    let gridDivDim = 35 / boxSize;

    gridBox.style.display = "grid";
    gridBox.style.gridTemplate = `repeat(${boxSize},${gridDivDim}rem)
     / repeat(${boxSize},${gridDivDim}rem)`;
    gridBox.style.justifyContent = 'center';
    
 
    
    function createGrid(){
        for(let i = 0; i != boxSize * boxSize; ++i) {
        const gridDiv = document.createElement("div");
        gridDiv.style.width = `${gridDivDim * 0.998}rem`;
        gridDiv.style.height = `${gridDivDim * 0.998}rem`;
        gridDiv.style.border = `${gridDivDim * 0.002}rem solid #000000b6`;
        gridDiv.classList.add('grid-div');
        gridBox.appendChild(gridDiv);
        }
    }
    const gridDiv = document.querySelectorAll('container');

    function hover(){
        let gridBoxes = document.querySelectorAll("#container > div");
        gridBoxes.forEach((div) => {
            div.addEventListener('mouseover',function(e){
                e.target.setAttribute('style','background: black')
            })
        });
    }

    function mobHover(){
        let gridBoxes = document.querySelectorAll("#container > div");
        gridBoxes.forEach((div) => {
            div.addEventListener('toucstart',function(e){
                e.target.setAttribute('style','background: black')
            })
        });
    }
    const body = document.querySelector("body")
    const clearBtn = document.createElement("button");
    
    

    createGrid();
    hover();
    mobHover()