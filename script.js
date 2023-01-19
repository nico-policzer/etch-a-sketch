const frame = document.querySelector(".frame");

for (i=0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (j=0; j < 16; j++) {
        let pix = document.createElement("div");
        pix.classList.add("pix");
        pix.addEventListener('mouseover', () => pix.style.backgroundColor = "black")
        row.appendChild(pix);
    }

    frame.appendChild(row);

}