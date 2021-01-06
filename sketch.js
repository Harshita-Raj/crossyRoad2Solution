var grid = 50;
var width = 1366;
var height = 2100;
var grassHeight = 100;
var carGroup1,carGroup2,carGroup3,carGroup4,carGroup5,carGroup6,carGroup7,carGroup8,carGroup9;
var logGroup1,logGroup2,logGroup3,logGroup4,logGroup5,logGroup6;
var player;

function setup() {
  createCanvas(1366,2100);

  carGroup1 = new Group();
  carGroup2 = new Group();
  carGroup3 = new Group();
  carGroup4 = new Group();
  carGroup5 = new Group();
  carGroup6 = new Group();
  carGroup7 = new Group();
  carGroup8 = new Group();
  carGroup9 = new Group();

  logGroup1 = new Group();
  logGroup2 = new Group();
  logGroup3 = new Group();
  logGroup4 = new Group();
  logGroup5 = new Group();
  logGroup6 = new Group();
  
  
  var bottomGrass1 = createSprite(683,height-50,width,grassHeight);
  bottomGrass1.shapeColor = "green";

  //add the for loop for the 3 rows of the car
  
  //To create first row of car
  for(var i = 0; i < 5; i++){
    var x = i*300;
    cars = new Car(x,height-150,grid*2,grid,2);
    carGroup1.add(cars.spt);
  }

  //To create second row of car
  for(var i = 0; i < 5; i++){
    var x = i*200 +150;
    cars = new Car(x,height-250,grid,grid,-3.5);
    carGroup2.add(cars.spt);
  }

  //To create third row of car
  for(var i = 0; i < 5; i++){
    var x = i*300 +25
    cars = new Car(x,height-350,grid+20,grid,1.2);
    carGroup3.add(cars.spt);
  }


  var bottomGrass2 = createSprite(683,height-450,width,grassHeight);
  bottomGrass2.shapeColor = "green";
  
  //add the for loop for the 3 rows of the log
  //To create first row of Log
  index = 0;
  for(var i = 0; i < 4; i++){
    var x = i*300 +100;
    log = new Log(x,height-550,grid*3,grid,5);
    logGroup1.add(log.spt);
    index++;
  }

  //To create secoond row of Log
  for(var i = 0; i < 6; i++){
    var x = i*224 +30;
    log = new Log(x,height-620,grid*2,grid,-3);
    logGroup2.add(log.spt);
    index++;
  }

  //To create third row of Log
  for(var i = 0; i < 3; i++){
    var x = i*400 +10;
    log = new Log(x,height-700,grid*4,grid,1.3);
    logGroup3.add(log.spt);
    index++;
  }

  var bottomGrass3 = createSprite(683,height-850,width,grassHeight);
  bottomGrass3.shapeColor = "green";

  //add the for loop for the next 3 rows of the car
  //To create 4th row of Car
  for(var i = 0; i < 5; i++){
    var x = i*300 +25
    cars = new Car(x,height-950,grid+20,grid,1.2);
    carGroup4.add(cars.spt);
  }

  //To create 5th row of Car
  for(var i = 0; i < 6; i++){
    var x = i*200 +150;
    cars = new Car(x,height-1050,grid,grid,-3.5);
    carGroup5.add(cars.spt);
  }

  //To create 6th row of Car
  for(var i = 0; i < 5; i++){
    var x = i*300;
    cars = new Car(x,height-1150,grid*2,grid,2);
    carGroup6.add(cars.spt);
  }

  var bottomGrass4 = createSprite(683,height-1250,width,grassHeight);
  bottomGrass4.shapeColor = "green";
  
  //add the for loop for the next 3 rows of the log
  for(var i = 0; i < 3; i++){
    var x = i*400 +10;
    log = new Log(x,height-1350,grid*4,grid,1.3);
    logGroup4.add(log.spt);
    index++;
  }

  //To create 5th row of Log
  for(var i = 0; i < 6; i++){
    var x = i*224 +30;
    log = new Log(x,height-1420,grid*2,grid,-3);
    logGroup5.add(log.spt);
    index++;
  }

  //To create 6th row of Log
  for(var i = 0; i < 4; i++){
    var x = i*300 +100;
    log = new Log(x,height-1500,grid*3,grid,5);
    logGroup6.add(log.spt);
    index++;
  }

  var bottomGrass5 = createSprite(683,height-1650,width,grassHeight);
  bottomGrass5.shapeColor = "green";
 
  //add the for loop for the next 3 rows of the car
  //To create 7th row of Car
  for(var i = 0; i < 5; i++){
    var x = i*300;
    cars = new Car(x,height-1750,grid*2,grid,2);
    carGroup7.add(cars.spt);
  }

  //To create 8th row of Log
  for(var i = 0; i < 7; i++){
    var x = i*200 +150;
    cars = new Car(x,height-1850,grid,grid,-3.5);
    carGroup8.add(cars.spt);
  }

  //To create 9th row of Log
  for(var i = 0; i < 5; i++){
    var x = i*300 +25
    cars = new Car(x,height-1950,grid+20,grid,1.2);
    carGroup9.add(cars.spt);
  }

  bottomGrass6 = createSprite(683,height-2050,width,grassHeight);
  bottomGrass6.shapeColor = "green";

  player = new Player(width/2,height-25);
}

function draw() {
  background(0);  

  //To make the logs and obstacles move and agin come back
  for (var i = 0; i < carGroup1.length; i++) {
    carGroup1[i].position.x += carGroup1[i].width * 0.02;
    if (carGroup1[i].position.x > width) {
      carGroup1[i].position.x = 0;
    }
  }

  for (var i = 0; i < carGroup2.length; i++) {
    carGroup2[i].position.x += carGroup2[i].width * 0.01;
    if (carGroup2[i].position.x < 0) {
      carGroup2[i].position.x = 1366;
    }
  }

  for (var i = 0; i < carGroup3.length; i++) {
    carGroup3[i].position.x += carGroup3[i].width * 0.02;
    if (carGroup3[i].position.x > width) {
      carGroup3[i].position.x = 0;
    }
  }

  for (var i = 0; i < carGroup6.length; i++) {
    carGroup6[i].position.x += carGroup6[i].width * 0.02;
    if (carGroup6[i].position.x > width) {
      carGroup6[i].position.x = 0;
    }
  }

  for (var i = 0; i < carGroup5.length; i++) {
    carGroup5[i].position.x += carGroup5[i].width * 0.01;
    if (carGroup5[i].position.x < 0) {
      carGroup5[i].position.x = 1366;
    }
  }

  for (var i = 0; i < carGroup4.length; i++) {
    carGroup4[i].position.x += carGroup4[i].width * 0.02;
    if (carGroup4[i].position.x > width) {
      carGroup4[i].position.x = 0;
    }
  }

  for (var i = 0; i < carGroup7.length; i++) {
    carGroup7[i].position.x += carGroup7[i].width * 0.02;
    if (carGroup7[i].position.x > width) {
      carGroup7[i].position.x = 0;
    }
  }

  for (var i = 0; i < carGroup8.length; i++) {
    carGroup8[i].position.x += carGroup8[i].width * 0.01;
    if (carGroup8[i].position.x < 0) {
      carGroup8[i].position.x = 1366;
    }
  }

  for (var i = 0; i < carGroup9.length; i++) {
    carGroup9[i].position.x += carGroup9[i].width * 0.02;
    if (carGroup9[i].position.x > width) {
      carGroup9[i].position.x = 0;
    }
  }

  for (var i = 0; i < logGroup1.length; i++) {
    logGroup1[i].position.x += logGroup1[i].width * 0.02;
    if (logGroup1[i].position.x > width) {
      logGroup1[i].position.x = 0;
    }
  }

  for (var i = 0; i < logGroup2.length; i++) {
    logGroup2[i].position.x += logGroup2[i].width* (-0.02);
    if (logGroup2[i].position.x < 0) {
      logGroup2[i].position.x = 1366;
    }
  }

  for (var i = 0; i < logGroup3.length; i++) {
    logGroup3[i].position.x += logGroup3[i].width * 0.02;
    if (logGroup3[i].position.x > width) {
      logGroup3[i].position.x = 0;
    }
  }

  for (var i = 0; i < logGroup6.length; i++) {
    logGroup6[i].position.x += logGroup6[i].width * 0.02;
    if (logGroup6[i].position.x > width) {
      logGroup6[i].position.x = 0;
    }
  }

  for (var i = 0; i < logGroup5.length; i++) {
    logGroup5[i].position.x += logGroup5[i].width* (-0.02);
    if (logGroup5[i].position.x < 0) {
      logGroup5[i].position.x = 1366;
    }
  }

  for (var i = 0; i < logGroup4.length; i++) {
    logGroup4[i].position.x += logGroup4[i].width * 0.02;
    if (logGroup4[i].position.x > width) {
      logGroup4[i].position.x = 0;
    }
  }

  //to make the player go to the starting position if he will touch car
  if(carGroup1.isTouching(player.spt) || carGroup2.isTouching(player.spt)|| carGroup3.isTouching(player.spt)||
     carGroup4.isTouching(player.spt) || carGroup5.isTouching(player.spt)|| carGroup6.isTouching(player.spt)||
     carGroup7.isTouching(player.spt) || carGroup8.isTouching(player.spt)|| carGroup9.isTouching(player.spt)){
        player.spt.x = width/2;
        player.spt.y = height-25;
  }
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0,-1);
  }else if(keyCode == DOWN_ARROW){
    player.move(0,1);
  }else if(keyCode == LEFT_ARROW){
    player.move(-1,0);
  }else if(keyCode == RIGHT_ARROW){
    player.move(1,0);
  }
}