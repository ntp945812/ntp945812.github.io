class tree
{
    constructor( begin, end, level, angle )
    {
        this.level = level;
        this.begin = begin;
        this.end = end;
        this.angle = angle;
        this.dir = p5.Vector.sub( end, begin );
        this.done = false;

    }

    generate()
    {

        this.dir.mult( 0.67 );
        //noFill();
        //line( this.begin.x, this.begin.y, this.end.x, this.end.y );
        //ellipse( this.begin.x, this.begin.y, 2 * this.dir.mag(), 2 * this.dir.mag() );

        let rEnd = p5.Vector.add( this.end, this.dir.rotate( this.angle + ab ) );
        let RT = new tree( this.end, rEnd, this.level + 1, this.angle );
        trees.push( RT );
        let lEnd = p5.Vector.add( this.end, this.dir.rotate( -2 * this.angle + ab ) );
        let LT = new tree( this.end, lEnd, this.level + 1, this.angle );
        trees.push( LT );



    }

    show()
    {
        stroke( 255 );
        line( this.begin.x, this.begin.y, this.end.x, this.end.y );
    }

    generateFlower( i )
    {
        let f = new flower( this.end, i );
        flowers.push( f );
    }


}

class flower
{
    constructor( begin, id )
    {
        this.begin = begin;
        this.id = id;
    }

    show()
    {
        fill( 255, 120, 120, 122 );
        ellipse( this.begin.x, this.begin.y, 10, 10 );
    }

    drop()
    {
        this.begin.y += 1 + random( 0, 4 );
        this.begin.x += random( -6, 6 ) + random( 0, 2 );
    }
}