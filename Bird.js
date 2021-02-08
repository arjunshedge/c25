
// class is blueprint . 
//It contains peoperties and functions of object that can be created 
//using the blueprint. 



class Bird extends BaseClass{
    // class child extends parent
  // for initialising properties. 
  constructor(x, y) {
     super(x,y,50,50)
      this.image= loadImage("sprites/bird.png");
   
    };

    // functions 
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
     super.display()
    };
  };
  