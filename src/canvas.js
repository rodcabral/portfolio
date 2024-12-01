// Copyright (C)  Rodrigo Cabral (rodcabral)
const container = document.querySelector(".canvas-container");

const c_grid = document.querySelector(".grid");
const ctx_grid = c_grid.getContext("2d");

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let changedMobile = false;
let changedDesktop = false;

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

let arcs = [];
arcs.push(new Arc(15, 0, 0, 2, 2, "#111111"));
    
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

function draw() {
    const i = 0;

    ctx.beginPath();
    ctx.fillStyle = arcs[i].color;
    ctx.arc(arcs[i].x, arcs[i].y, arcs[i].radius, 10, 0, true);
    ctx.fill();
    ctx.closePath();
}

function mobile() {
    ctx_grid.clearRect(0, 0, c_grid.width, c_grid.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    c_grid.width = 300;
    c_grid.height = 200;
    canvas.width = 300;
    canvas.height = 200;
    render_grid();
}

function desktop() {
    ctx_grid.clearRect(0, 0, c_grid.width, c_grid.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    c_grid.width = 640;
    c_grid.height = 200;
    canvas.width = 640;
    canvas.height = 200;
    render_grid();
}

function detect_device(innerWidth) {
    if(innerWidth <= 800 && !changedMobile) {
        mobile();
        changedMobile = true;
        changedDesktop = false;
    }

    if(innerWidth > 800 && !changedDesktop) {
        desktop();
        changedDesktop = true;
        changedMobile = false;
    }
}

function main() {
    const i = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    draw();
    
    arcs[i].x += arcs[i].directionX;
    arcs[i].y += arcs[i].directionY;

    if(arcs[i].x >= canvas.width - arcs[i].radius) {
        arcs[i].directionX -= 2;
    }

    if(arcs[i].x <= 0 + arcs[i].radius) {
        arcs[i].directionX += 2;
    }

    if(arcs[i].y >= canvas.height - arcs[i].radius) {
        arcs[i].directionY -= 2;
    }

    if(arcs[i].y <= 0 + arcs[i].radius) {
        arcs[i].directionY += 2;
    }

    detect_device(window.innerWidth);

    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);
// Copyright (C)  Rodrigo Cabral (rodcabral)
