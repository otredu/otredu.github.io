import { Player } from './player.js';
import { Star } from './star.js';
import { Stuff } from './stuff.js';

const WIDTH = 600;
const HEIGHT = 400;
const STEP = 5;
const STARTX = 200;
const STARTY = 300;
const PLAYERSIZE = 100;
const SPEED = 2;
//https://freesound.org/people/HuvaaKoodia/sounds/77087/
const audio_laser = new Audio();
audio_laser.src = "./sound/laser_zero.wav";
//https://freesound.org/people/murraysortz/sounds/192492/;
const audio_bubble = new Audio();
audio_bubble.src = "./sound/bubble_zero.wav";
let canvas = document.getElementById("canvas");
let playerImg = document.getElementById("player");
let trashImg = document.getElementById("trash");
let bananaImg = document.getElementById("banana");
let moneyImg = document.getElementById("money");
let colaImg = document.getElementById("cola");
let images = [{"img": trashImg, "xsize": 60, "ysize": 60, speed: 4, "sound": audio_laser},
              {"img": bananaImg, "xsize": 60, "ysize": 20, speed: 4, "sound": audio_bubble},
              {"img": moneyImg, "xsize": 50, "ysize": 30, speed: 4, "sound": audio_bubble},
              {"img": colaImg, "xsize": 30, "ysize": 50, speed: 4, "sound": audio_laser}];
canvas.height = HEIGHT;
canvas.width = WIDTH;
let context = canvas.getContext("2d");
const noOfStars = 50;
const noOfStuff = 10;
let stars = [];
let stuff = [];
let player = new Player(context, playerImg, STARTX, STARTY, PLAYERSIZE, PLAYERSIZE);

for(let i=0; i < noOfStuff; i++){
    stuff.push(new Stuff(context, images, WIDTH, HEIGHT, SPEED));
}

for(let i=0; i < noOfStars; i++){
    stars.push(new Star(context, WIDTH, HEIGHT, SPEED));
}

window.addEventListener("keydown", event => {
    if(event.key === "ArrowUp"){
        player.y = player.y - STEP;
    } else if(event.key === "ArrowDown"){
        player.y = player.y + STEP;
    } 
});

function draw (){
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => { 
        star.show();
        star.move();
    });
    stuff.forEach(stuff => {
        stuff.show();
        stuff.move();
    });
    if(player){
        stuff.forEach(stuff => stuff.collide(player));
        player.show();
    }
}

function update(){
    draw();
    window.requestAnimationFrame(update);
};

addEventListener("load", function(){
    update();
});