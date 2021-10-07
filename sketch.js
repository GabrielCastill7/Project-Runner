  
var spaceImg, space;
var asteroidImg, asteroid, asteroidsGroup;
var ship, shipImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  spaceImg = loadImage("th.png");
  asteroidImg = loadImage("image0.jpg");
  shipImg = loadImage("image0.png");
}

function setup() {
  space = createSprite(300,300);
  space.addImage("void",spaceImg);
  space.velocityY = 1;
  
  asteroidsGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ship = createSprite(200,200,50,50);
  ship.scale = 0.3;
  ship.addImage("spaceship", shipImg);
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
  
      ship.x=ship.x-3;
    }
    if(keyDown("RIGHT_ARROW")){
  
    
      ship.x=ship.x+3;
      
    }
    if(keyDown("SPACE")){
  
   
      ship.velocityY = -10;
      
    }
  
  ship.velocityY = ship.velocityY = 0.8;
  
   
      if(space.y>400){

      space.y = 300;

      }
    
      spawnAsteroids();

      
      if(invisibleBlockGroup.isTouching(ship)|| ship.y>600){


       ship.destroy();

      } 
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnAsteroids()
 {
  if (frameCount % 240 === 0) {
    var asteroid = createSprite(200, -50);
    var invisibleBlock = createSprite(200,15);
    
    asteroid.addImage(asteroidImg);
    ship.addImage(shipImg);
    
    asteroid.velocityY = 1;
    invisibleBlock.velocityY = 1;

    ship.depth=ship.depth;
    ship.depth +=1;
    
    asteroid.lifetime=800;
    invisibleBlock.lifetime=800;
    
    asteroidsGroup.add(asteroid);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

