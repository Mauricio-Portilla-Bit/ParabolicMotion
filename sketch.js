var g = 1
var dt = 0.1

x = 80
y = 250

dx = 3
dy = 0 

x1 = 300
y1 = 230

dx1 = -5
dy1 = 0

function setup() {
  createCanvas(400, 400);
    background(220);
}

function draw() {
  
  ellipse (x,y,20)
  rect(0,390,400,10)
  
  x = x + dx
  dx = dx*0.998
  y = y + dy
  dy = (dy + g*dt)*.98
  
  
  if (y > 385)
    dy = -dy

  if (x > 390)
    dx = - dx  
    
  if (x < 0)
    dx = - dx
  
  text("Click en la pantalla",30,30)
  
  if (mouseIsPressed){
      x = pmouseX
      y = pmouseY
      dx = random(-5,5)
      dy = random(-10,10)
      background(220)
      }    
}
