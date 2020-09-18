
var obj1, obj2;

function setup() {
  createCanvas(400,400);

  obj1 = createSprite(40,200,40,60);
  obj1.shapeColor = "green";
  obj1.debug = true;
  
//obj1.velocityX = 5;

  obj2 = createSprite(350,200,60,30);
  obj2.shapeColor = "green";
  obj2.debug = true;

 //obj2.velocityX = -5;
}

function draw() {
  background(0); 
  
  obj2.x = mouseX;
  obj2.y = mouseY;
  

  //console.log(Rect1.x - Rect1.x)

  //bounce(obj1, obj2);

  if (isTouching(obj1, obj2)){
   
    obj1.shapeColor = "red";
    obj2.shapeColor = "red";
  }

  else{

   obj1.shapeColor = "green";
   obj2.shapeColor = "green";

}

  drawSprites();
}

