class Ground
{
	constructor(x,y,w,h)
	{
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h ,{isStatic:true});
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill("green")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}