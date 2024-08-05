// Copyright (C)  Rodrigo Cabral (rodcabral)

// GRID
const c_grid = document.querySelector(".grid");
const ctx_grid = c_grid.getContext("2d");

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

// MAIN
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let ball_radius = 15;
let ball_x = ball_radius + 2;
let ball_y = ball_radius + 2;
let direction_x = 2;
let direction_y = 2;

function draw() {
    ctx.beginPath();
    ctx.fillStyle = "#222222";
    ctx.arc(ball_x, ball_y, ball_radius, 10, 0, true);
    ctx.fill();
    ctx.closePath();
}

render_grid();
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    draw();

    ball_x += direction_x;
    ball_y += direction_y;

    if(ball_x >= canvas.width - ball_radius) {
        direction_x -= 2;
    }

    if(ball_x <= 0 + ball_radius) {
        direction_x += 2;
    }

    if(ball_y >= canvas.height - ball_radius) {
        direction_y -= 2;
    }

    if(ball_y <= 0 + ball_radius) {
        direction_y += 2;
    }

    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);

// Copyright (C)  Rodrigo Cabral (rodcabral)
