var garden,cat,mouse;
var gardenImg,mouseImg1,catImg1,catImg2,catImg3,mouseImg2,mouseImg3;

function preload(){
gardenImg = loadImage("garden.png");
mouseImg1 = loadAnimation("jerryOne.png");
catImg1 = loadAnimation("tomOne.png");
catImg2 = loadAnimation("tomTwo.png");
catImg3 = loadAnimation("tomFour.png");
mouseImg2 = loadAnimation("jerryTwo.png","jerryThree.png");
mouseImg3 = loadAnimation("jerryFour.png");
}

function setup() {
  createCanvas(700,500);
  garden = createSprite(350,250,100,100);
  garden.addImage("garden_image",gardenImg);
  garden.scale = 0.8;

  mouse = createSprite(100,400,20,20);
  mouse.addAnimation("mouse_image",mouseImg1);
  mouse.scale = 0.1;


  cat = createSprite(550,410,50,50);
  cat.addAnimation("catSleeping",catImg1);
  cat.scale = 0.1;
  
}

function draw() {
  background(0);

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImage",catImg3);
    cat.x = 550;
    cat.scale = 0.1;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage",mouseImg3);
    mouse.scale = 0.1;
    mouse.changeAnimation("mouseLastImage");
  }


  drawSprites();
 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");
    
     mouse.addAnimation("mouseTeasing",mouseImg2);
     mouse.changeAnimation("mouseTeasing");
  }
}