// Copyright (C)  Rodrigo Cabral (rodcabral)

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

ctx.beginPath();
ctx.rect(10, 10, 20, 20);
ctx.stroke();

// Copyright (C)  Rodrigo Cabral (rodcabral)
