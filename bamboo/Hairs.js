class Hairs{
  constructor(_posX,_posY,_index,_clasterIndex,_size){
    this.x=_posX;
    this.y=_posY;
    this.lineDivision=50;
    this.lineIndex=_index;
    this.lines=[];
    this.color=random(3,195);
    this.speed=random(-50,50);
    this.clasterIndex=_clasterIndex;
    this.size=_size;
    // console.log(this.clasterIndex);
    // this.v=0;
    // this.v=abs(preMouseX-mouseX)+abs(preMouseY-mouseY);
    let w1=100*sin((frameCount+this.lineIndex)*this.speed/50);
    let w2=100*cos((frameCount+this.lineIndex)*this.speed/50);
    this.targetX=this.x+this.size*((this.lineIndex-this.lineDivision/2)*random(-5,5))+random(-1560,1560);
    this.targetY=this.y+this.size*((this.lineIndex-this.lineDivision/2)*random(-5,5))+random(-1580,1580);

    for (let i=0;i<this.lineDivision;i++){
      let newPosX=i/this.lineDivision*this.targetX+(this.lineDivision-i)/this.lineDivision*(this.x+w1);
      let newPosY=i/this.lineDivision*this.targetY+(this.lineDivision-i)/this.lineDivision*(this.y+w2);
      
      let lineNew=new Lines(newPosX,newPosY,i,this.x+w1,this.y+w2,this.speed,this.lineIndex,this.clasterIndex);
      this.lines.push(lineNew);
    }
  }
  
    
  changeLines(){
    for (let i=0;i<this.lineDivision;i++){
      this.lines[i].changePosition();
    
    }
    for (let i=0;i<this.lineDivision-1;i++){
      if (i==0&this.lineIndex==1){if(this.lines[1].x){bgX=this.lines[1].x;bgY=this.lines[1].y;}}
      let c=hair.get(2,floor(i/4+10*sin(frameCount%this.lineDivision/this.lineDivision)*2));
      // c[3]=abs((100-i))*2;
      // c[1]+=80;
      // c[0]+=random(20,60);
      c[3]=abs((70-i))*2;
      c[2]+=-70+(70-i)*1.5-70;
      c[1]+=40*(1+(noise(i+700*sin(frameCount/this.lineDivision)/this.lineDivision)))-110;
      c[0]=100*noise(i+800*sin(frameCount/this.lineDivision)/this.lineDivision)-70;
      stroke(c);
      strokeWeight(i/2);
      // strokeWeight(2);
      noFill();
      // circle(this.lines[i].x,this.lines[i].y,abs(3*this.lines[i+1].x-2*this.lines[i].x));
      
      line(this.lines[i].x,this.lines[i].y,1*this.lines[i+1].x-0*this.lines[i].x,1*this.lines[i+1].y-0*this.lines[i].y);
      
      
      // image(sand,this.lines[i].x,this.lines[i].y,1*abs(this.lines[i+1].y-this.lines[i].y),1*abs(this.lines[i+1].y-this.lines[i].y))
  }
  }

}