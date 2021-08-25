function preload(){
  seaimage = loadImage("sea.png");
  shipimage1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  }
  
  function setup(){
    createCanvas(600,500);
    background("blue")

    sea = createSprite(400,200);
    sea.addImage(seaimage);
    sea.velocityX = -5;
    sea.scale = 0.3;

    ship = createSprite(50,160,20,50);
    ship.addAnimation("movingShip",shipimage1);
    ship.scale = 0.25;

  }
  
  function draw() {
    background("light blue");
    sea.velocityX = -3
  
    if (sea.x <0){
      sea.x = sea.width/8;
    }
    drawSprites();
  }