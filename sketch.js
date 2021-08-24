var ball;
var database, position, gameState=0, form, player

function setup(){
    createCanvas(500,500);

    database= firebase.database()

    game= new Game();
    game.start()
}

function draw(){
    background("white");
    
}