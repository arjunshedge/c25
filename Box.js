class Box extends BaseClass{ 
  constructor(x, y, width, height) {
   // what should be written here?
   // connect to baseClass constructor. how?
   super(x,y,width,height);
   this.image= loadImage("sprites/wood1.png");
  }
  //everything in display function is part of the baseClass display , so we need not write it here again. (DRY)
};


