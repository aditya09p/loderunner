class Enemy{
    constructor(x,y,width,height,scale){

   this.image = loadImage("sprites/enemy.gif");
   this.body = createSprite(x,y,width,height); 
   this.scale = scale;
    }
   display(){
       this.body.scale = this.scale;
    this.body.addImage(this.image);
    drawSprites();
   }
}