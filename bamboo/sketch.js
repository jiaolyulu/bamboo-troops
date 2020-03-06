let clasters=[];
let targetX=[];
let targetY=[];
let mouseXs=[];
let mouseYs=[];
let coin;
let bgX=200;
let bgY=200;
let degree=10;
let bg;
let speed=1;
let number=4;
function preload(){
  bg=loadImage('bg5.png');
  hair=loadImage('reference.png');
}
function setup() {
  hair.loadPixels();
  createCanvas(windowWidth,windowHeight);
  for (let i=0;i<number;i++){
    let newClaster=new Clasters(random(0,400),random(0,300),40,i+1,random(0,3),speed);
    clasters.push(newClaster);
    
  }
  for (let i=0;i<number;i++){
    targetX.push(200);
    targetY.push(100);
    
  }
  for (let i=0;i<20;i++){
    mouseXs.push(200);
    mouseYs.push(100);
    
  }
  
  
  // let targetX=xPos+(lineIndex-lineDivision/2)*2;
  // let targetY=yPos+(lineDivision)*4;
  // for (let i=0;i<lineDivision;i++){
  //   let newPosX=i/lineDivision*targetX+(lineDivision-i)/lineDivision*xPos;
  //   let newPosY=i/lineDivision*targetY+(lineDivision-i)/lineDivision*yPos;
  //   let lineNew=new Lines(newPosX,newPosY,i);
  //   lines.push(lineNew);
  // }
  
}

function draw() {
  // background(255,40);
  //draw the background picture
  imageMode(CENTER);
  if (abs(abs(pmouseX+pmouseY)-abs(mouseX+mouseY))>=4){
    degree--;
    if (degree<=1){degree=1;}
  }else{degree++;if (degree>=10){degree=10;} }
  tint(195+10*degree,195+10*degree,85+15*degree, 126);
  image(bg,bgX,bgY,2*windowWidth,2*windowHeight);
  
  
  //draw the troop
  for (let i=0;i<number;i++){
    clasters[i].show();
  }
  // targetX[0]=mouseX;
  // targetY[0]=mouseY-200;
  // console.log(hair.get(2,59));
  
  
  //getting the target of the four clasters
  mouseXs.splice(0,1);
  mouseYs.splice(0,1);
  mouseXs.push(mouseX);
  mouseYs.push(mouseY);
  for (let i=1;i<number;i++){
    noStroke();
    fill(255);
    targetX[i]=mouseXs[i*4-4];
    targetY[i]=mouseYs[i*4-4];
    
  }
  
  
    // console.log(targetX,targetY);
  
  
//   for (let i=0;i<lineDivision;i++){
//     lines[i].changePosition();
    
//   }
//   for (let i=0;i<lineDivision-1;i++){
//     stroke(random(100,200));
//     line(lines[i].x,lines[i].y,lines[i+1].x,lines[i+1].y);
//   }
  // preMouseX=mouseX;
  // preMouseY=mouseY;

}

