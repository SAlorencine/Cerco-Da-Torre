class SLING{
    constructor(bodyA,pointB){
       var opitions = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness :0.1,
           length : 14
       }
       this.poitB = pointB
       this.sling = Contraint.create(opitions);
       World.add(world, this.sling);
    } 
   Voa() {
      this.sling.bodyA = null;
    }   
    display(){
       if (this.sling.bodyA != null){
         var pontA = this.sling.bodyA.position;
         var pontB = this.poitB 
        strokeWeight(3)
        line(pontA.x, pontA.y, pontB.x, pontB.y);
       }
     
    }
   }