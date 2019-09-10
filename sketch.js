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
    for(var i = 0; i<400; i+=2){
      point(i,i+2);
    }

    //point(240,60);
    //point(230,60);

   


  }