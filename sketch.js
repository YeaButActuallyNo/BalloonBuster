

var bow , arrow,  background, arrow_sound;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;
var arrowGroup, redBG, blueBG, pinkBG, greenBG;
 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  arrow_sound = loadSound("Arrow+Swoosh+1.mp3");
}

function setup() {
  createCanvas(400, 400);
  
  background = createSprite(0,0,400,400);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  arrow = createSprite(360,220,20,50);
  arrow.addImage("arrow", arrowImage);
  arrow.scale = 0.3;
  
  arrowGroup = createGroup();
  redBG = createGroup();
  blueBG = createGroup();
  pinkBG = createGroup();
  greenBG = createGroup();
  

  
  score = 0;
}

function draw() {
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  arrow.y = mouseY;
  
  bow.y = World.mouseY
  
  if(keyWentDown("space")){
    arrow_sound.play();
    createArrow();
  } 

  
  //arrow.depth = select_balloon;
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  
  if(arrowGroup.isTouching(redBG)){
    arrowGroup.destroyEach(); 
    redBG.destroyEach();
    score = score + 3
  }
  if(arrowGroup.isTouching(blueBG)){
    arrowGroup.destroyEach();
    blueBG.destroyEach();
    score = score + 6
  }
  if(arrowGroup.isTouching(greenBG)){
    arrowGroup.destroyEach();
    greenBG.destroyEach();
    score = score + 9 
  }
  if(arrowGroup.isTouching(pinkBG)){
    arrowGroup.destroyEach();
    pinkBG.destroyEach();
    score = score + 7;
  }
  
  drawSprites();
  
  textSize(20);
  text("Score: "+score, 260, 80); 
  text(mouseX+ "," +mouseY, mouseX, mouseY);
}


function redBalloon() {
  var red = createSprite(Math.round(random(0, 275)), 400, 20, 20);
  red.addImage(red_balloonImage);
  red.velocityY = -3;
  red.lifetime = 150;
  red.scale = 0.1;
  redBG.add(red);
}

function blueBalloon() {
  var blue = createSprite(Math.round(random(0, 275)), 400, 20, 20);
  blue.addImage(blue_balloonImage);
  blue.velocityY = -3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBG.add(blue);
}

function greenBalloon() {
  var green = createSprite(Math.round(random(0, 275)), 400, 20, 20);
  green.addImage(green_balloonImage);
  green.velocityY = -3;
  green.lifetime = 150;
  green.scale = 0.1
  greenBG.add(green);
}

function pinkBalloon() {
  var pink = createSprite(Math.round(random(0, 275)), 400, 20, 20);
  pink.addImage(pink_balloonImage);
  pink.velocityY = -3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkBG.add(pink);
}

function createArrow(){
    var arrow = createSprite(360, mouseY, 20, 20);
    arrow.addImage("arrow", arrowImage);
    arrow.scale = 0.3;
    arrow.depth = background;
    bow.depth = arrow.depth;
    background.depth = arrow.depth + 1;
    arrow.velocityX = -4;
    arrow.lifetime = 100;
    arrowGroup.add(arrow);
    arrow.setCollider("rectangle", 0, 0, arrow.width, 30);
   arrow.y = mouseY;

}


