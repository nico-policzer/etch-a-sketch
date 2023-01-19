const frame = document.querySelector(".frame");
let x = prompt("Size of canvas?");
if (x>100) {
    x = 100;
}
for (i=0; i < x; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (j=0; j < x; j++) {
        let pix = document.createElement("div");
        pix.classList.add("pix");
        pix.addEventListener('mouseover', () => pix.style.backgroundColor = "black")
        row.appendChild(pix);
    }

    frame.appendChild(row);

}