class Clasters{
  constructor(_posX,_posY,_number,_index,_size,_speed){
    this.x=_posX;
    this.y=_posY;
    this.n=_number;
    this.index=_index;
    this.wavingSpeed=_speed
    this.size=_size;
    this.hairs=[];
    for (let i=0;i<this.n;i++){
      let newHair=new Hairs(this.x,this.y,i,this.index,this.size,this.wavingSpeed);
      this.hairs.push(newHair);
      // console.log(this.hairs[i].targetX,this.hairs[i].targetY);
    }
    
  }
  
  show(){
    for (let i=0;i<this.n;i++){
      this.hairs[i].changeLines();
    }
  }

}