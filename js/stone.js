class Stone
{
	constructor(x,y,r)
	{
		var options={
			restitution:0,
			friction:1,
			density:1.2
			}
		this.r=r
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			imageMode(CENTER)
			translate(pos.x, pos.y);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}