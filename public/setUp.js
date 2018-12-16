var playerboard;
var Game;

function setUp(passedShips) {
    console.log("Setup started!")

    console.log(passedShips)
    playerBoard = new Board(passedShips)

    /* PLACEHOLDER FOR ACTUAL BOARD:
    *
    * Implement get board from opponent and save it in
    * opponentBoard
    * */

    var placeHolderShip = new Ship(new Coordinate(1, 1), 3, true)
    placeHolderShip.id = 0;
    opponentBoard = new Board([placeHolderShip])

    /* End of placeholder*/


    //game = new gameState(playerboard, opponentBoard)
    console.log(playerBoard)

}



function gameState(board1, board2) {
    this.playerBoard = board1;
    this.opponentBoard = board2
    this.enemyShipSpaces = 0

    for(var i = 0; i<this.playerBoard.length; i++) {
        this.enemyShipSpaces+=ships[i].coordinates.length;
        console.log("")
    }
}




function CheckHit(coordinate) {
    for(var i = 0; i < ships.length; i++) {
        ships[i].coordinates.contains(coordinate);
    }
}

function Board(ships) {
    this.ships = ships;
    this.shots = [];
}

function loaded() {
   console.log(playerBoard)
}


$(document).ready(loaded)
