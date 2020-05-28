var rows = 10;
var cols = 10;
var squareSize = 50;

var game = document.getElementById('game');

//grid
for(i=0; i<cols; i++) {
    for(j=0; j<rows; j++) {
        var square = document.createElement('div');
        game.appendChild(square);
        square.id = j.concat(i);
    }
}
