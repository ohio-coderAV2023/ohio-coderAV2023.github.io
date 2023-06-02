function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(120);
  line(150, 0, 150, 600);
  line(300, 0, 300, 600);
    line(450, 0, 450, 600);
  
  if (mouseX > 0 && mouseX <= 150) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(20);
    text('i wanna🫵🏻 ',0,100)
  }
  
  else if (mouseX > 150 && mouseX <= 300) {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
     textSize(30);
    text('go  🚣🏻‍♂️ ',150,100)
  }
  
  else if (mouseX > 300 && mouseX <= 400) {
    fill(0, 50, 0);
    ellipse(mouseX, mouseY, 40, 40);
         textSize(40);
    text('to  🏊🏼 ',300,100)
    
  }
  
  
  
  
  else if (mouseX > 400 && mouseX <= 600) {
    fill(0, 100, 0);
    ellipse(mouseX, mouseY, 40, 40);
         textSize(50);
    text('the trip 🚵🏼‍♂️',390,100)
    
  }
  
   
  
  
  
}







