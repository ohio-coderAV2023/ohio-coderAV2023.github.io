

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

    background('lightskyblue');
  //The Ground
  noStroke();
  fill('green'); //defines color
  rect(0,400,windowWidth,200) ; //shape size placement

  

  //The House
  fill('orange');  // makes the color
  stroke('pink'); //makes stoke
  rect(50,200,220,200);  //shape size and placement

  //Windows
  fill('white');  //makes color
  strokeWeight(10); //defines weight of stroke
  stroke('black'); //defines color 
  rect(80,250,50,50); //shape size and placement
  rect(180,250,50,50); //shape size and placement

  //Triangle
  fill('brown'); //defines color
  triangle(50,200, 100,100,270,200); //shape size and placement




//chim
  fill('red');    //defines color
stroke('black'); //color of stroke
  rect(229,112,30,90); //shape size and placement

//door
  fill('brown'); //color
  stroke('black'); //stroke color 
   rect(125,325,50,75); //shape size and placement




//tree
  fill('brown')  //defines color
stroke('black'); //stroke color 
  rect(323,398,30,90); //shape size and placement



  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);



//sun
   fill('pink')   //defines color
strokeWeight(5); //stroke weight 
  circle(0,0,100); //shape size and placement
line(50,50,75,75); //lines on the sun
line(20,60,30,80); //lines on the sun
  line(60,20,90,45);  //lines on the sun
  

//pool
  fill('red') //define color
  rect(0,450,200,50) //shape
  fill('lightblue') //defines color
  ellipse(100,450,205,30) //shape size and placement
  

//The poll
  noStroke();
  fill('blue'); //defines color
  rect(0,499,windowWidth,300) ; //shape size and placement






  //circle
  fill('green')  //defines color
stroke('black'); //stoke color
  circle(340,399,120,120); //shape size and placement
  
  }



