// Copyright (C)  Rodrigo Cabral (rodcabral)

const ARCS_SIZE = 1

const c_grid = document.querySelector(".grid");
const ctx_grid = c_grid.getContext("2d");

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

function render_grid() {
    let show_grid = true;
    let gap = 0;
    let w = 15;
    let h = 15;

    ctx_grid.fillStyle = "#ffffff";
    ctx_grid.fillRect(0, 0, c_grid.clientWidth, c_grid.clientHeight);

    if(show_grid) {
        for(let i = 0; i < c_grid.clientHeight; ++i) {
            for(let j = 0; j < c_grid.clientWidth; ++j) {
                ctx_grid.strokeStyle = "#e0e0e0";
                ctx_grid.strokeRect(j * (w+gap), i * (h+gap), w, h);
                ctx_grid.stroke();
            }
        }
    }
}

class Arc {
    constructor(radius, x, y, dx, dy, color) {
        this.radius = radius,
        this.x = radius + x,
        this.y = radius + y,
        this.directionX = dx,
        this.directionY = dy,
        this.color = color
    }
};

const radius = 15;
let arcs = [];
for(let i = 0; i < ARCS_SIZE; ++i) {
    arcs.push(new Arc(radius, Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 2, 2, "#111111"));
}

function draw() {
    for(let i = 0; i < arcs.length; ++i) {
        ctx.beginPath();
        ctx.fillStyle = arcs[i].color;
        ctx.arc(arcs[i].x, arcs[i].y, arcs[i].radius, 10, 0, true);
        ctx.fill();
        ctx.closePath();
    }
}

render_grid();
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    draw();

    for(let i = 0; i < arcs.length; ++i) {
        arcs[i].x += arcs[i].directionX;
        arcs[i].y += arcs[i].directionY;

        if(arcs[i].x >= canvas.width - arcs[i].radius) {
            arcs[i].directionX -= 1;
        }

        if(arcs[i].x <= 0 + arcs[i].radius) {
            arcs[i].directionX += 1;
        }

        if(arcs[i].y >= canvas.height - arcs[i].radius) {
            arcs[i].directionY -= 1;
        }

        if(arcs[i].y <= 0 + arcs[i].radius) {
            arcs[i].directionY += 1;
        }
    }

    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);

// Copyright (C)  Rodrigo Cabral (rodcabral)
