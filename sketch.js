var ball;
var database, position, gameState=0, form, player
var playerCount
var allPlayers
var car1, car2, car3, car4 , cars;

function setup(){
   createCanvas(displayWidth,displayHeight);
    database= firebase.database()
    game= new Game();
    game.getState();
    game.start()
}

function draw(){
    background("white");
    
if(playerCount===4)
{
game.update(1)
}
if(gameState===1)
{
game.play()
}


}