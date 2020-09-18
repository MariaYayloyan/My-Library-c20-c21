function isTouching(R1, R2){

    if (R2.x - R1.x < R1.width/2+R2.width/2 
      && R1.x - R2.x < R1.width/2+R2.width/2 
      && R2.y - R1.y < R1.height/2+R2.height/2 
      && R1.y - R2.y < R1.height/2+R2.height/2  ) {
        return true;
    }
  else{
  
    return false;
  
  }
  }
  
  
  
  function bounce(Rect1, Rect2){
    if (Rect2.x - Rect1.x < Rect1.width/2 + Rect2.width/2 
      && Rect1.x - Rect2.x < Rect1.width/2 + Rect2.width/2 
      && Rect2.y - Rect1.y < Rect1.height/2 + Rect2.height/2 
      && Rect1.y - Rect2.y < Rect1.height/2 + Rect2.height/2  ) {
       
      Rect1.velocityX = Rect1.velocityX*-1;  
  
      Rect2.velocityX = Rect2.velocityX*-1;  
  
      
    }
  
  }