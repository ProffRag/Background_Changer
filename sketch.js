var box;
function setup() {
  createCanvas(400,400);
  background('white')
  box = createSprite(200,200,30,30);
}

function draw() 
{
  if (keyIsDown(DOWN_ARROW)){
    background('red');
  }
  if (keyIsDown(LEFT_ARROW)){
    background('yellow');
  }
  if (keyIsDown(UP_ARROW)){
    background('green');
  }
  if (keyIsDown(RIGHT_ARROW)){
    background('blue');
  }
drawSprites()
}




