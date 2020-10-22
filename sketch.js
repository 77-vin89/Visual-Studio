var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  fixedrect=createSprite(200,200,60,80);
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x);
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    
    &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    &&
    movingrect.y-fixedrect.y>fixedrect.width/2+movingrect.width/2
    &&
    fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2)
     {
   
   
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
   
  }
  else{
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";

  }
  drawSprites();
}