let bubbles=[];
var gravity= 0.3;
function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  createCanvas(width,height);
  for(let i=0; i<100;i++){
    let x = 10 + 30 * i;
    bubbles[i]= new Bubble(x,200,10);
  }

}

function draw() {
  background(0);
  for(let i=0; i<bubbles.length;i++){
    bubbles[i].show();
    bubbles[i].move();
    bubbles[i].update();
  }
  if(mouseIsPressed){
    bubbles.push(new Bubble(mouseX, mouseY, mouseX * 0.03));
  }
}
  
  
  
  class Bubble{
      constructor(x, y, r){
      this.x=x;
      this.y=y;
      this.r=r;
      this.speed=0;
    }

    move() {
      this.x = this.x + random(-4,5);
      this.y=this.y + random(-4,5 );
    }

    show(){
      stroke(226, 88, 34);
      strokeWeight(4);
      ellipse(this.x, this.y, this.r*2);
    }
    update(){
      this.y= this.y + this.speed;
      this.speed= this.speed+ gravity;

      if (this.y > height) { 
        this.speed = this.speed * -0.95;  
      } 
    }
}
  
function keyPressed() {
  if ((key ==' ') || (key=='enter')) {
	  bubbles.splice(0, 4);	
     

	}
	
}