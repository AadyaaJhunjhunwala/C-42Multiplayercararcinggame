class Game
{

constructor()
{

}

getState()
{
var gameState=database.ref('gameState')
gametateRef.on("value", function(data){
    gameState=data.val()
})
}

update(state)
{
database.ref('/').update({
    gameState:state
})
}

start()
{
if (gameState===0){
    form=new Form();
    form.display()
}
}

}