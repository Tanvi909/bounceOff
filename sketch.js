var fixedRect, movingRect;
var plant, pen; 

function setup() {
  createCanvas(1200,800);
  plant = createSprite(100, 400, 50, 80);
  plant.shapeColor = "green";
  plant.debug = true;
  pen = createSprite(600, 400,80,30);
  pen.shapeColor = "green";
  pen.debug = true;

  pen.velocityX = -5;
  plant.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(plant, pen)
  
  drawSprites();
}

