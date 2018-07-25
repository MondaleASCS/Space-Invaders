//mondale && Nate && shahein
function setup() {
    createCanvas(500, 500);
    background("black");


}

let y = 425;
let x = 250;
let moveRight = true;
let moveLeft = true;
let j= x;
let t = y;
function draw(){
    background("black");
    background("black");
    fill("green");
    ellipse(x, 50, 30,);
    fill("blue");
    ellipse(x, 100, 30,);
    fill("white");
    ellipse(x, 150, 30,);
    if (moveRight){
        x++;
     } else {
          x--;

        }
        if (x == 500) {
            moveRight = false;
            x--;
        }
        if (x == 0) {
            moveRight = true;
            x++;
        }
    
     fill("red");
     rect(j, t, 25, 50);
     if (keyIsDown(LEFT_ARROW) && j > 3) {
         j-=10;
     }
     if (keyIsDown(RIGHT_ARROW) && j < 483) {
          j+=10;
     }
 }


        
    
    
       