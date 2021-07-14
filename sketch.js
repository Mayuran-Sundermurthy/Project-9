var color;

function setup() {
  createCanvas(400,400);
  color = createSprite(200,200,400,400);
}

function draw() 
{
  background(30);

  if(keyIsDown(LEFT_ARROW)){
    color.shapeColor = "red";
  }

  if(keyIsDown(UP_ARROW)){
    color.shapeColor = "blue";
  }

  if(keyIsDown(RIGHT_ARROW)){
    color.shapeColor = "yellow";
  }

  if(keyIsDown(DOWN_ARROW)){
    color.shapeColor = "orange";
  }


drawSprites();
}




