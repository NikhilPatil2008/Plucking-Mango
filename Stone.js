class Stone{
    constructor(x,y,r){
        var options={
            friction:1,
            density:1.2,
            isStatic:false,
            restitution:0
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        this.stone=loadImage("images/stone.png");
    }
    display(){
        var stonepos=this.body.position;
        push()
        translate(stonepos.x,stonepos.y);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.stone,0,0,this.r*2,this.r*2);
        pop()
    }

}