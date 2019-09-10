function setup() {
    // Put things you want to run once in here.
    
    createCanvas(500,330);
    
  
  }
  
  function draw() {
    // Put things you want to over and over here. 
    // tan background color
    background(239,220,210);

    // dots in the background

    // creating a loop for the dots in the background 
    // for (init; test; update){statments} 

    /*
    for (var t = 0; t <500; t+=2){
      
    for(var i = 0; i<500; i+=2){
      point(i,i+t);
    }
    for(var i = 0; i<500; i+=2){
      point(i+2,i+2);
    }
    for(var i = 0; i<500; i+=2){
      point(i+4,i+2);
    }
    for(var i = 0; i<500; i+=2){
      point(i-2,i+2);
    }
    for(var i = 0; i<500; i+=2){
      point(i-4,i+2);
    }
    for(var i = 0; i<500; i+=2){
      point(i-6,i+2);
    }
    for(var i = 0; i<500; i+=2){
      point(i-8,i+2);
    }
    for(var i = 0; i<500; i+=2){
      point(i+6,t+2);
    }
  }
  */
  // hairline 
// remember canvas size is 550,330 where length is 550 and heaight is 330
  
point(440,329)
point(460,300)
point(480,250)
point(475,250)
point(438,300)
point(415,329)

// line by eye
fill(5);
stroke(2);
beginShape();
curveVertex(440,330)
curveVertex(440,339);
curveVertex(460,300);
curveVertex(480,250);
curveVertex(475,250);
curveVertex(438,300);
curveVertex(415,330);
curveVertex(415,330)
endShape();

  }
