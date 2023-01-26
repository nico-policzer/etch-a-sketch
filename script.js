const canvas = document.querySelector(".canvas");
let color = "#" + Math.floor(Math.random()*16777215).toString(16);

let button = document.querySelector("#submit");
button.addEventListener("click", ()=> renderCanvas(getSize()));
button.disabled = true;

let sizeInput = document.querySelector("#textinput");
sizeInput.addEventListener('change', () => updateButton());

window.mouseDown = false;

// Renders an x by x canvas on canvas, if x is greater than 100, a 100 x 100 canvas will be rendered
function renderCanvas(x) {
    clearCanvas();
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
}


document.onmousedown = function() {
    window.mouseDown = true;
}
document.onmouseup = function() {
    window.mouseDown = false;
}

function clearCanvas() {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

// If the input is not a number, the button is disabled
function updateButton() {
    if (isNumeric(sizeInput.value)) button.disabled = false;
    else {
        button.disabled = true;
    }
}

function getSize() {
    return sizeInput.value;
}
function getColor() {
    return document.querySelector("#colorpicker").value;
}

function changeColor(pix) {
    if (window.mouseDown) {
        pix.style.backgroundColor = getColor();
    }

}

// returns true if the str is numeric
function isNumeric(str) {
    // SOURCE: https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
    if (typeof str != "string") return false; // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
  }

  renderCanvas(50);