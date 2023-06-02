function setup() {
  createCanvas(400, 400);
} 



function draw() {
  

  background(220);
  fill('#FFF3D0')
  ellipse (200,200,250,300) //head
  
  fill ('')  //eye 1
  circle (140,190,40,)
  
  
    fill (' rgb(255,0,255)').   // eye 1
  circle (250,190,40,)
  
  

  
  circle (250,190,20,) //sharigan red part 2
  
  
    fill ('red')
  circle (140,190,20,) //sharigan red part 1
  
  
    fill ('black')
  circle (140,190,10,) //sharigan black part 1
    
    fill ('black')
  circle (250,190,5,) //sharigan black part 2
      fill ('black')
  circle (240,190,5,) //sharigan black part 3
      fill ('black')
  circle (260,190,5,) //sharigan black part 4
    circle (250,200,5,) //sharigan black part 5
  
    circle (250,176,5,) //sharigan black part 5
  
  
  
  
  
  
  line(86,136,316,136)  //up line

  line(99,102,300,102) //down line
  
  
  stroke('black')
  strokeWeight(2)
  fill('grey')
  rect(91,105,220,32)
  
  
  fill(GRAY)
  circle(191,121,30)
  
  
  
  line(153,291,210,294) //mouth
   
  line(150,121,230,121) //crossed line 
  
//Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);``
}
