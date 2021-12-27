var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground,player;
var invisibleGround,zombie;
var zombieImg,bg,boy,skullImg,handImg,deadImg,bg2,coinImg;
var gameOverImg,restartImg;

var handGroup,coinsGroup,skullGroup;
var gameOver,restart,score;

var point,point2,bgm,growl;

function preload(){
    bg=loadImage("images/Cartoon_Forest_BG_03.png");
    boy=loadAnimation("images/PC_AttackSwing1.png");
    boy=loadAnimation("images/knight/sprite_0.png","images/knight/sprite_1.png","images/knight/sprite_2.png","images/knight/sprite_3.png","images/knight/sprite_4.png", "images/knight/sprite_5.png", "images/knight/s03.png","images/knight/s13.png")
  
   
  

    monster6Img=loadAnimation("images/monster6/s1.png","images/monster6/s2.png","images/monster6/s3.png","images/monster6/s5.png","images/monster6/s6.png","images/monster6/s7.png");
    monster10Img=loadAnimation("images/monster10/1.png","images/monster10/2.png","images/monster10/3.png","images/monster10/4.png","images/monster10/5.png","images/monster10/6.png","images/monster10/7.png","images/monster10/8.png",);
monster8Img=loadAnimation("images/monster8/1.png","images/monster8/2.png","images/monster8/3.png",);  
monster5Img=loadAnimation("images/monster5/1.png","images/monster5/2.png","images/monster5/3.png","images/monster5/4.png","images/monster5/5.png","images/monster5/6.png","images/monster5/7.png","images/monster5/8.png",);
  gameoverimg= loadAnimation("images/gameoverimg.jpg") ; 

}

function setup(){
    createCanvas(800,500);
    ground = createSprite(500,-120,0,0);
    ground.scale = 1.4;
    ground.x = ground.width/2;
    ground.velocityX = -4;
    ground.addImage(bg);

    invisibleGround = createSprite(400,470,800,10);
    invisibleGround.visible = false;

    player = createSprite(250,460,20,100);
    player.addAnimation("a",boy);
    player.scale = 0.2
   // player.debug=true;
    player.setCollider("circle",0,0,500);

    invisibleGround = createSprite(400,480,800,10);
    invisibleGround.visible = false;
    monster6 = createSprite(105,410,20,100);
    monster6.addAnimation("monster6",monster6Img);
    monster6.scale = 1.6
gameOver=createSprite(400,300);
gameOver.addAnimation("gameover",gameoverimg);
gameOver.scale=2;
gameOver.visible=false;


  monster5g=new Group() 
  monster10g=new Group()
  monster8g=new Group()
}

function draw(){

    background("black");

    player.velocityY = player.velocityY+0.8;

    if(gameState === PLAY){
      

  

      if(ground.x<80){
        ground.x=ground.width/2;
        }
    if(keyDown("space")&& player.y>=220){
        player.velocityY = -10;


    }
    if(keyDown("left")){
        player.x = player.x - 2
    }
    if(keyDown("right")){
        player.x = player.x + 2
    }

    spawnMonster10()
    spawnMonster8()
    spawnMonster5()
    if(player.isTouching(monster5g)||player.isTouching(monster10g)||player.isTouching(monster8g)){
        gameState = END
    }
    }
   

if(gameState === END){
gameOver.visible=true;
    monster5g.setVelocityXEach(0);
     monster5g.setVelocityYEach(0);
     monster8g.setVelocityXEach(0);
      monster8g.setVelocityYEach(0);
      monster10g.setVelocityXEach(0);
       monster10g.setVelocityYEach(0);
       monster6.VelocityX=0
        monster6.VelocityY=0
        if(mousePressedOver(gameOver)){ reset(); }
    } 


    player.collide(invisibleGround);

drawSprites()
    
}

function spawnMonster10(){
    if(frameCount%220 === 0){
        var monster10 = createSprite(800,450,10,40);
    monster10.addAnimation("monster",monster10Img);
    monster10.scale=1
    monster10.velocityX=-6;
    monster10g.add(monster10)
    }
}
function spawnMonster8(){
    if(frameCount%300 === 0){
        var monster8 = createSprite(random(200,800),50,10,40);
    monster8.addAnimation("monster8",monster8Img);
    monster8.scale=1
    monster8.velocityX=-6;
    monster8g.add(monster8)
    }
}
    function spawnMonster5(){
        //if(frameCount%250 === 0){
            var monster5 = createSprite(600,400,10,40);
        monster5.addAnimation("monster5",monster5Img);
        monster5.scale=1
        monster5g.add(monster5)
       // monster5.velocityX=+3;
       // }
    }
    function reset(){
         gameState = PLAY;
         gameOver.visible = false; }
