// Copyright (C)  Rodrigo Cabral (rodcabral)

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

const radius = 15;
let arc = {
    radius: radius,
    x: radius + 2,
    y: radius + 2,
    directionX: 2,
    directionY: 2
};

function draw() {
    ctx.beginPath();
    ctx.fillStyle = "#222222";
    ctx.arc(arc.x, arc.y, arc.radius, 10, 0, true);
    ctx.fill();
    ctx.closePath();
}

render_grid();
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    draw();

    arc.x += arc.directionX;
    arc.y += arc.directionY;

    if(arc.x >= canvas.width - arc.radius) {
        arc.directionX -= 2;
    }

    if(arc.x <= 0 + arc.radius) {
        arc.directionX += 2;
    }

    if(arc.y >= canvas.height - arc.radius) {
        arc.directionY -= 2;
    }

    if(arc.y <= 0 + arc.radius) {
        arc.directionY += 2;
    }

    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);

// Copyright (C)  Rodrigo Cabral (rodcabral)
