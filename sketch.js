let treeRoot;
var maxLevel = 0;
var currentLevel = 0;
var angle = 45;
var begin;
var end;
const flowerLevel = 8;
let FALLEN = false;
let flowers = [];
var length;
var ab = 0;
let GET_FLOWER = false;
let dropedFlower = [];
let dropedFlowerId = [];

let trees = [];

function setup()
{
    angleMode( DEGREES );
    createCanvas( windowWidth, windowHeight );
    length = windowHeight / 4;
    begin = createVector( windowWidth / 2, windowHeight );
    end = createVector( windowWidth / 2, windowHeight - length );
    treeRoot = new tree( begin, end, 0, angle );
    trees.push( treeRoot );
    frameRate( 24 );
}

function draw()
{
    background( 50 );

    currentLevel = 0;
    trees = [];
    flowers = [];
    treeRoot = new tree( begin, end, 0, angle );
    trees.push( treeRoot );
    while ( currentLevel < maxLevel )
    {
        for ( var i = trees.length - 1; i >= 0; i-- )
        {
            if ( !trees[ i ].done )
            {
                if ( currentLevel != flowerLevel )
                {
                    trees[ i ].generate();
                    trees[ i ].done = true;
                }
                else
                {
                    trees[ i ].generateFlower( i );
                    trees[ i ].done = true;
                }

            }
        }
        currentLevel++;
    }



    for ( let treei of trees )
    {
        treei.show();
    }

    for ( let floweri of dropedFlower )
    {
        floweri.drop();
        floweri.show();

    }

    for ( let floweri of flowers )
    {
        if ( dropedFlowerId.includes( floweri.id ) )
        {
            continue;
        }
        floweri.show();
    }


}

function mousePressed()
{
    if ( mouseButton === LEFT )
    {
        if ( maxLevel <= flowerLevel )
        {
            maxLevel++;
        }
        else
        {
            let dropedFlowercount = 0;
            while ( dropedFlowercount < round( ( flowers.length - dropedFlower.length ) / 6 ) )
            {
                for ( let floweri of flowers )
                {
                    if ( round( random( 0, 10 ) ) % 3 == 0 )
                    {
                        if ( dropedFlowerId.includes( floweri.id ) )
                        {
                            continue;
                        }
                        dropedFlower.push( floweri );
                        dropedFlowerId.push( floweri.id );
                        dropedFlowercount++;

                    }
                }
            }
        }
    }
    else if ( mouseButton === RIGHT )
    {
        dropedFlower = [];
        dropedFlowerId = [];
    }


}



function mouseMoved()
{
    angle = map( mouseY, height / 2, height, 0, 90 );
    ab = map( mouseX, 0, windowWidth, -45, 45 );

}

function touchMoved()
{
    angle = map( mouseY, height / 2, height, 0, 90 );
    ab = map( mouseX, 0, windowWidth, -45, 45 );

}

function touchStarted()
{
    if ( maxLevel <= flowerLevel )
    {
        maxLevel++;
    }
    else
    {
        let dropedFlowercount = 0;
        while ( dropedFlowercount < round( ( flowers.length - dropedFlower.length ) / 6 ) )
        {
            for ( let floweri of flowers )
            {
                if ( round( random( 0, 10 ) ) % 3 == 0 )
                {
                    if ( dropedFlowerId.includes( floweri.id ) )
                    {
                        continue;
                    }
                    dropedFlower.push( floweri );
                    dropedFlowerId.push( floweri.id );
                    dropedFlowercount++;

                }
            }
        }
    }
}