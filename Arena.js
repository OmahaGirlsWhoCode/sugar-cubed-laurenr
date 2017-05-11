//Global varibles
var alienOne;

var pointsToHearts;

var scoreForHp;

var gameStarted = false;

function textSetup(){
     alienScore = toybox.add.text(20, 20, "score "+playerPoints,{fill:"#ffffff"});
 
 info = toybox.add.text(200, 200, "press shift to start",{fill:"#ffffff"});
 
 alienHP = toybox.add.text(20, 70, "HP",{fill:"#ffffff"});
};

function gameStart(){
    alienOptions = {startingX: 350,startingY: 400,speed: 150,jumpforce: 150, color: "blue"}
        if(true){
    alienOne = toybox.add.alien(alienOptions);}
    info.setText("")
    scoreForHp = 30;
    gameStarted = true;
}
var alienOptions;

var playerPoints = 0;

function randomSlimes(A, B){
    var b = Phaser.Math.between(1,10000);
    var X = Phaser.Math.between(A,B);
    if (b <= 35 ){
var newSlime = toybox.add.slime({startingX: X, startingY: 450});
newSlime.events.onKilled.add(function(){playerPoints = playerPoints + 10});
    };
    };

var game = new Phaser.Game(740, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

var toybox;
var settings = {
    gravity: 980,
    plugins: ["alien","slime","jelly","fly","backdrop"], demoMode: true
};

function preload() {
    toybox = new Toybox(game, settings);
    toybox.preload();
}

function create() {           //Create
  toybox.create();
  gameStartKey = toybox.game.input.keyboard.addKey(16);
 
 textSetup();
/* alienScore = toybox.add.text(20, 20, "score "+playerPoints,{fill:"#ffffff"});
 info = toybox.add.text(200, 200, "press shift to start",{fill:"#ffffff"});
 alienHP = toybox.add.text(20, 70, "HP",{fill:"#ffffff"});*/
}
    var sP = false; //start Pressed?

function update() {          //Update
    toybox.update();
    
    if(gameStartKey.isDown){
        if(gameStarted == false){
            gameStart();
        }
    };
    
   if(gameStarted == true){ //< everything that I want to run while the game is playing
       randomSlimes(3, 10);
       randomSlimes(650, 700);
       
       alienOne.events.onKilled.add(function(){gameStarted = false; playerPoints = 0; toybox.clear(); pointsToHearts = 0;
          textSetup(); 
       });

    if(playerPoints == scoreForHp /*% 30 == 0 && playerPoints != 0*/){
        if(pointsToHearts != playerPoints){ 
        alienOne.health ++;
        pointsToHearts = playerPoints;
        scoreForHp = scoreForHp + pointsToHearts; 
        }}
    
    alienHP.setText("HP "+ alienOne.health);
   }
   
   
   
alienScore.setText("score "+playerPoints);
    
}
