//today we are going to make our own new game which is named as "lode runner"
var brick;
var player;
var enemy;
var money;

function setup(){
    var canvas = createCanvas(1200,800);
  brick1 = new Brick(600,100,200,20,0.2);
  brick2 = new Brick(30,10,10,10,0.2); 
   brick3 = new Brick(80,10,10,10,0.2);
   brick4 = new Brick(130,10,10,10,0.2);
   brick5 = new Brick(180,10,10,10,0.2);
   brick6 = new Brick(230,10,10,10,0.2);
   /*brick7 = new Brick(20,20,20,30);
   brick8 = new Brick(20,20,20,30);
   brick9 = new Brick(20,20,20,30);
   brick10 = new Brick(20,20,20,30);
   brick11 = new Brick(20,20,20,30);
   brick12 = new Brick(20,20,20,30);
   brick13 = new Brick(20,20,20,30);
   brick14 = new Brick(20,20,20,30);
   brick15 = new Brick(20,20,20,30);
   brick16 = new Brick(20,20,20,30);
   brick17 = new Brick(20,20,20,30);*/
   money1 = new Money(40,80,20,20,0.07);
   enemy1 = new Enemy(70,90,10,10,0.2);
   player=  new Player(100,400,10,10,0.3);


}
function draw(){
background("black");
brick1.display();
brick2.display();
brick3.display();
brick4.display();
brick5.display();
brick6.display();
/*brick7.display();
brick8.display();
brick9.display();
brick10.display();
brick11.display();
brick12.display();
brick13.display();
brick14.display();
brick15.display();
brick16.display();
brick17.display();*/
money1.display();
enemy1.display();
player.display();
}