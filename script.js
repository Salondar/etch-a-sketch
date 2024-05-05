container = document.querySelector('#container');
let gridSize = 16;


function makeGrid(gridSize) {
    const CONTAINER_HEIGHT = 600;
    let boxHeight = (CONTAINER_HEIGHT / gridSize) + 'px';

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        row.style.height = boxHeight;
        container.appendChild(row);
        
        for (let j = 0; j < gridSize; j++) {
            let rowBox = document.createElement('div');
            rowBox.setAttribute('id', `square`);
            rowBox.style.flex = '1 1 auto';
            rowBox.style.margin = "1px";
            rowBox.style.backgroundColor = "green";
            rowBox.style.border = "1px solid black";
            row.appendChild(rowBox);
        }
    }
}

container.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (target.id === 'square') {
        target.style.backgroundColor = 'black';
    }
});

makeGrid(gridSize);