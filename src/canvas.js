// Copyright (C)  Rodrigo Cabral (rodcabral)

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

let show_grid = true;
let gap = 0;
let w = 15;
let h = 15;

if(show_grid) {
    for(let i = 0; i < canvas.clientHeight; ++i) {
        for(let j = 0; j < canvas.clientWidth; ++j) {
            ctx.strokeStyle = "#e0e0e0";
            ctx.strokeRect(j * (w+gap), i * (h+gap), w, h);
            ctx.stroke();
        }
    }
}

ctx.fillStyle = "#111111";
ctx.arc(40, 40, 15, 10, 0, true);
ctx.fill();

// Copyright (C)  Rodrigo Cabral (rodcabral)
