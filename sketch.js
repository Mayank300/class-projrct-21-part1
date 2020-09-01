var thickness,wall;
var bullet,speed,weight;
var Lbullet,Lwall;

function setup() {
  createCanvas(1600,400);

  speed =  random(223,321);
  weight =  random(30,52);
  thickness =  random(22,83); 

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "brown"
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(255,255,255);
  hasCollide(bullet,wall);

  if(hasCollide(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness *thickness * thickness);
  }

     if(damage > 10){
       wall.shapeColor = color(255,0,0);
     }

     if(damage < 10){
       wall.shapeColor = color(0,255,0);
     }
  
  drawSprites();
}

function hasCollide(Lbullet,Lwall){
  bulletRightEdge = Lbullet.X + Lwall.width;
  wallLeftEdge = Lwall.X;
   if(bulletRightEdge >= wallLeftEdge){
     return true
   }
    return false;
  }