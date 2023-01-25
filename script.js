const canvas = document.querySelector(".canvas");
let x = prompt("Size of canvas?");
let color = "#" + Math.floor(Math.random()*16777215).toString(16);


window.mouseDown = false;
document.onmousedown = function() {
    window.mouseDown = true;
}
document.onmouseup = function() {
    window.mouseDown = false;
}

if (x>100) {
    x = 100;
}
for (i=0; i < x; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (j=0; j < x; j++) {
        let pix = document.createElement("div");
        pix.classList.add("pix");
        pix.addEventListener('mouseover', () => changeColor(pix))
        row.appendChild(pix);
    }

    canvas.appendChild(row);

}

function getColor() {
    return document.querySelector("input").value;
}
function changeColor(pix) {
   // pix.style.backgroundColor = "black";
    if (window.mouseDown) {
        pix.style.backgroundColor = getColor();;
    }

}