var canvas;
var surface1,surface2,surface3,surface4;
var border1,border2,border3;
var music;
var backgroundImg;
var box;

function preload(){
    music = loadSound("music.mp3");
    backgroundImg = loadImage("C21 background.PNG");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    
    
    surface1 = createSprite(190,570,140,15);
    surface2 = createSprite(330,570,140,15);
    surface3 = createSprite(470,570,140,15);
    surface4 = createSprite(610,570,140,15);
    
    border1 = createSprite(120,300,10,800);
    border2 = createSprite(680,300,10,800);
    border3 = createSprite(300,5,800,10);
   

    surface1.shapeColor = "#18D5E9" ;
    surface2.shapeColor = "#0FED22";
    surface3.shapeColor = "#F0AA03";
    surface4.shapeColor = "#D9D9D7";

    border1.visible = false;
    border2.visible = false;
    border3.visible = false;

    //create box sprite and give velocity
    box = createSprite(random(120,680),0,20,20);
    box.velocityY = 10;
    
    box.velocityX = 7;
    box.velocityX = -5;
}

function draw() {

    background(backgroundImg);



    createEdgeSprites();
    
   box.bounceOff(border3);
   box.bounceOff(border2);
   box.bounceOff(border1);

   if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor = "#18D5E9";
   }

   if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "#0FED22";
    }   

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "#F0AA03";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "#D9D9D7";

    }

    if(surface1.isTouching(box)){
        music.play();
    }

    if(surface2.isTouching(box)){
        music.play();
    }

    if(surface3.isTouching(box)){
        music.play();
    }

    if(surface4.isTouching(box)){
        music.play();
    }

    if(box.isTouching(border1)){
        music.stop();
    }

    if(box.isTouching(border2)){
        music.stop();
    }

    if(box.isTouching(border3)){
        music.stop();
    }

    
    drawSprites();
  
}
