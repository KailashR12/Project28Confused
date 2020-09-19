class Mango {
    constructor(x,y) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x,y,25,options);
    }
    
}