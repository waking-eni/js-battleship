var rows = 10;
var cols = 10;
var fieldSize = 50;

var game = document.getElementById('game');

//grid
for(i=0; i<cols; i++) {
    for(j=0; j<rows; j++) {
        var field = document.createElement('div');
        game.appendChild(field);
        field.id = j.concat(i);
        field.style.top = j*fieldSize + 'px';
        field.style.left = i*fieldSize + 'px';
    }
}
