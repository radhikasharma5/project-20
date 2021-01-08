var tom,tomImg1,tomImg2,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg4;
var jungle, jungleImg;

function preload() {
    
    tomImg1=loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg4=loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg4=loadAnimation("images/jerryFour.png");
    jungleImg=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,600);
    //background(jungleImg);

    jungle = createSprite(500,300,1000,600);
    jungle.addImage("garden",jungleImg);

    tom = createSprite(800,500,80,50);
    tom.addAnimation("sitting",tomImg1);
    tom.scale=0.2;
    tom.debug=false;

    //tom.velocityX=-3;
    jerry = createSprite(200,500,50,80);
    jerry.addAnimation("standing",jerryImg1);
    jerry.scale=0.1;
    jerry.debug=false;
    
}

function draw() {
   background(0,0,0);
   text(mouseX+','+mouseY,10,45);
   if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("sitting",tomImg4);
    tom.changeAnimation("sitting");
    jerry.addAnimation("searching",jerryImg4);
    jerry.changeAnimation("searching");
    }   
   drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("catRunning",tomImg2);
        tom.changeAnimation("catRunning");
        jerry.addAnimation("mousewalking",jerryImg2);
        jerry.changeAnimation("mousewalking");
    }
    
     
}    