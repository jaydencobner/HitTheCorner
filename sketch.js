let heading = document.getElementById("heading");
let posX, posY;
let shapeWidth, shapeHeight;
let xDirection, yDirection; 
let moveSpeed, xSpeed;
let screenWidth, screenHeight;
let colour;
let corners;
let bool = [true, false];
let images = ["assets/0.png",
  "assets/1.png",
  "assets/2.png",
  "assets/3.png",
  "assets/4.png",
  "assets/5.png",
  "assets/6.png"
]

function preload(){
  for (let i = 0; i<images.length; i++){
    images[i] = loadImage("assets/" + i + ".png")
  }
}

function setup() {
  if(windowHeight>windowWidth/2){
    screenWidth = windowWidth;
    screenHeight = windowWidth/2;
  }
  else{
    screenWidth = windowHeight*2;
    screenHeight = windowHeight;
  }
  heading.textContent = "click to hit the corners";
  createCanvas(screenWidth, screenHeight);


  shapeWidth = width/5;
  shapeHeight = height/5;
  colour = 0;
  posX = width/2;
  posY = height/2;
  xDirection = random(bool)
  yDirection = random(bool)
  moveSpeed = width*0.0015;
  corners = false;
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(images[colour], posX, posY, shapeWidth, shapeHeight);

  if (corners){
    xSpeed = moveSpeed*2;
  }
  else
    xSpeed = moveSpeed
  ;


  if (posX>=width-shapeWidth+shapeWidth/2){
    xDirection = false;
    ChangeColour();
  }
  if(posX<=0+shapeWidth/2){
    xDirection = true;
    ChangeColour();
  }
  if (posY>=height-shapeHeight/2){
    yDirection = false;
    ChangeColour();
  }
  if (posY<=0+shapeHeight/2){
    yDirection = true;
    ChangeColour();
  }

  if (xDirection)
    posX += xSpeed
  else
    posX -= xSpeed
  ;
  if (yDirection)
    posY += moveSpeed
  else
    posY -= moveSpeed
  ;
}

function ChangeColour(){
  if (colour == images.length-1)
    colour = 0
 else 
   colour++
}

function mousePressed(){
  if (corners){
    corners = false;
    moveSpeed = width*0.0015;
    heading.textContent = "click to hit the corners";
  }
  else{
    corners = true
    moveSpeed = moveSpeed*0.6;
    heading.textContent = "click to hit the sides";
  }
  posX = width/2;
  posY = height/2;
  xDirection = random(bool)
  yDirection = random(bool)
}