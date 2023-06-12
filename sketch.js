var egg, eggImage, treasure, treasureImage, rock, rock2, rockImage, backdropImage;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19;
var spikesImage, spikes1, spikes2, spikes3;
var fakeWall;
var fakeTreasure, surpiseWall;
var invisibleThing;


function preload(){
  eggImage = loadImage("assets/egg.png");
  treasureImage = loadImage("assets/treasure.png");
  spikesImage = loadImage("assets/spikes.png");
  rockImage = loadImage("assets/rock.png");
  backdropImage = loadImage("assets/background.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  egg = createSprite(50, 50, 50, 50);
  egg.addImage(eggImage);
  egg.scale = 0.025

  treasure = createSprite(1550, 750, 50, 50);
  treasure.addImage(treasureImage);
  treasure.scale = 0.02

  fakeTreasure = createSprite(1000, 300, 50, 50);
  fakeTreasure.addImage(treasureImage);
  fakeTreasure.scale = 0.02;

  rock = createSprite(1250, 550, 50, 50);
  rock.addImage(rockImage);

  rock2 = createSprite(400, 600, 50, 50);
  rock2.addImage(rockImage);
  rock2.scale = 3


  spikes1 = createSprite(800, 725, 50, 50);
  spikes1.addImage(spikesImage);
  spikes1.scale = 0.05;

  spikes2 = createSprite(950, 450, 50, 50);
  spikes2.addImage(spikesImage);
  spikes2.scale = 0.05;

  spikes3 = createSprite(1250, 700, 50, 50);
  spikes3.addImage(spikesImage);
  spikes3.scale = 0.095;
  spikes3.visible = false;

  wall1 = createSprite(100, 100, 500, 50);
  wall2 = createSprite(350, 250, 20, 300);
  wall3 = createSprite(500, 250, 20, 300);
  wall4 = createSprite(650, 100, 300, 25);
  wall5 = createSprite(800, 400, 25, 600);
  wall6 = createSprite(900, 250, 20, 300);
  wall7 = createSprite(1100, 400, 400, 20);
  wall8 = createSprite(1100, 500, 400, 20);
  wall9 = createSprite(1100, 600, 400, 20);
  wall10 = createSprite(1100, 775, 400, 30);
  wall11 = createSprite(1100, 100, 400, 20);
  wall12 = createSprite(1300, 150, 20, 175);
  wall13 = createSprite(1350, 200, 100, 20);
  wall14 = createSprite(1400, 350, 20, 300);
  wall15 = createSprite(150, 400, 400, 20);
  wall16 = createSprite(150, 500, 400, 20);
  wall17 = createSprite(600, 500, 200, 20);
  wall18 = createSprite(700, 350, 20, 300);
  wall19 = createSprite(700, 500, 200, 20);
  wall19.visible = false;

  fakeWall = createSprite(1300, 100, 20, 200);

  surpiseWall = createSprite(1300, 300, 20, 200);
  surpiseWall.visible = false;

  invisibleThing = createSprite(750, 550, 50, 50)
  invisibleThing.visible = false;

}

function draw() {
  background(51);
  image(backdropImage, 0, 0, width, height);
   
  egg.bounceOff(rock);
  egg.bounceOff(rock2);

  egg.bounceOff(wall1);
  egg.bounceOff(wall2);
  egg.bounceOff(wall3);
  egg.bounceOff(wall4);
  egg.bounceOff(wall5);
  egg.bounceOff(wall6);
  egg.bounceOff(wall7);
  egg.bounceOff(wall8);
  egg.bounceOff(wall9);
  egg.bounceOff(wall10);
  egg.bounceOff(wall11);
  egg.bounceOff(wall12);
  egg.bounceOff(wall13);
  egg.bounceOff(wall14);
  egg.bounceOff(wall15);
  egg.bounceOff(wall16);
  egg.bounceOff(wall17);
  egg.bounceOff(wall18);

  egg.bounceOff(spikes1);
  egg.bounceOff(spikes2);
  egg.bounceOff(spikes3);




  if(keyDown(UP_ARROW)){
    egg.y = egg.y -5;
  }

  if(keyDown(DOWN_ARROW)){
    egg.y = egg.y +5;
  }

  if(keyDown(RIGHT_ARROW)){
    egg.x = egg.x +5;
  }

  if(keyDown(LEFT_ARROW)){
    egg.x = egg.x -5;
  }

  if(egg.isTouching(treasure)){
    treasure.visible = false;
  }

  if (egg.isTouching(spikes1)){
    egg.visible = false;

  }
  
  if (egg.isTouching(spikes2)){
    egg.visible = false;

  }

  if (egg.isTouching(spikes3)){
    egg.visible = false;
    spikes3.visible = true;

  }

  if(egg.isTouching(fakeTreasure)){
    fakeTreasure.visible = false;
    surpiseWall.visible = true;
    egg.bounceOff(surpiseWall);
  }

  if(egg.isTouching(invisibleThing)){
    wall19.visible = true;
  }

 
   drawSprites()
}
