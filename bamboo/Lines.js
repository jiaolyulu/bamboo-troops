class Lines{
  constructor(_posX,_posY,_i,_xPos,_yPos,_speed,_lineIndex,_clasterIndex){
    this.x=_posX;
    this.y=_posY;
    this.originX=_posX;
    this.originY=_posY;
    this.wavingX=_posX;
    this.wavingY=_posY;
    this.anchorX=_xPos;
    this.anchorY=_yPos;
    this.speed=_speed;
    this.speedOrigin=_speed;
    this.speedChange=0;
    this.index=_i;
    this.lineIndex=_lineIndex;
    this.clasterIndex=_clasterIndex;
    this.vX=0;
    this.vY=0;
    this.aX=0;
    this.aY=0;
    this.targetX=targetX[this.lineIndex];
    this.targetY=targetY[this.lineIndex];
    
    // console.log(this.index,this.originX,this.originY);
  }
  changePosition(){
    // let m=this.index*1/10*(abs(preMouseX-mouseX)+abs(preMouseY-mouseY));
   
    this.changeSpeed();
    // this.targetX=targetX[this.clasterIndex]+this.wavingX-this.anchorX+(4+this.speed)*sin((frameCount+this.lineIndex)/40);
    // this.targetY=targetY[this.clasterIndex]+this.wavingY-this.anchorY+(4+this.speed)*cos((frameCount+this.lineIndex)/40);
    this.targetX=targetX[this.clasterIndex]+this.wavingX-this.anchorX+(this.speed+40)/5
    *sin((this.index+frameCount)*0.065);
    this.targetY=targetY[this.clasterIndex]+this.wavingY-this.anchorY+(this.speed+40)/5
    *cos((this.index+frameCount)*(this.speed)/100000);
    // console.log(this.aX,this.aY,(this.targetX-this.x));
    this.aX=((this.index+4.1))*0.017*(this.targetX-this.x);
    this.aY=((this.index+4.1))*0.017*(-150/(this.index-150)*this.targetY-this.y);
    // this.vX+=this.aX;
    // this.vY+=this.aY;
    // if(this.vX>2){this.vX=2;}
    // if(this.vX<-2){this.vX=-2;}
    // if(this.vY>2){this.vY=2;}
    // if(this.vY<-2){this.vY=-2;}
    this.x+=this.aX;
    this.y+=this.aY;
    
  }
  
  changeSpeed(){
    if (pmouseX!=mouseX){
      this.speedChange+=3;
      if (this.speedChange>5){this.speedChange=5;}
      this.speed+=this.speedChange;
    }
    // if (this.speed<this.speedOrigin+1&pmouseX!=mouseX){
    //   this.speedChange+=1;
    //   if (this.speed>50){this.speedChange=50;}
    //   this.speed+=this.speedChange;
    // }
    if (pmouseX==mouseX){
      this.speedChange-=7;
      if (this.speedChange<-5){this.speedChange=-5;}
      if (this.speed<this.speedOrigin){this.speed=this.speedOrigin;}
      this.speed+=this.speedChange;
    }
  }
  
  newTarget(_x,_y){
    this.wavingX=_x;
    this.wavingY=_y;
    
  }
  
  newTowards(_x,_y){
    this.towardsX=_x;
    this.towardsY=_y;
  }
}