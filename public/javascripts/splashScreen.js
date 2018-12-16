var images = ["", "images/saucer.png", "images/bigsaucer.png", "images/battleship.png", "", "images/freighter.png"]
var ships = [];
var movingShip = null
var idShips=0;


function main() {
    "use strict";


    // Sets up a ship
    ships[idShips] =  new Ship(new Coordinate(1, 1), 3, true)
    ships[idShips] =  new Ship(new Coordinate(1, 3), 3, true)
    ships[idShips] =  new Ship(new Coordinate(1, 5), 1, true)
    ships[idShips] =  new Ship(new Coordinate(3, 5), 1, true)
    ships[idShips] =  new Ship(new Coordinate(1, 7), 5, true)

    $("#grid").on("click", function (event) {

        if (gridCoords("#grid").x===0 || gridCoords("#grid").y===0) {return}
        var coordinate = gridCoords();


        if (movingShip !== null) {

            movingShip.coordinates[0] = coordinate;
            movingShip.placed=true;
            movingShip.draw();
            movingShip=null
        }
    });

    $("#setupspan").on("click", function (event) {
        setUp(ships)
    });


}



// Mouse moved event

// Returns current coordinates of mouse over grid



// Class for ship
function Ship(coordinate, length, horizontal) {
    this.id=idShips++;
    this.placed=true;
    this.coordinates = [coordinate];
    this.image = images[length]




    var pos = $("#grid").offset();
    var $ship_image = $("<img>")
        .attr("src", this.image)
        .attr("id", this.id)
        .css({
            top: pos.top + this.coordinates[0].y * 55,
            left: pos.left + this.coordinates[0].x * 55,
            position: 'absolute'})
        .on("click", function (event) {

            var $id = $(this).attr('id');
            var cShip = ships[$id];


            if (cShip.placed==false) {
                movingShip=null;
                cShip.placed = true;
                cShip.draw();
            }

            else if (movingShip===null){
                movingShip=cShip;
                cShip.placed = false;
                cShip.draw()
            }



        });


    this.draw = function() {
        for (var i = 1; i < length; i++) {
            if (horizontal) {
                this.coordinates[i] = new Coordinate(coordinate.x + i, coordinate.y)
                continue
            }
            coordinates[i] = new Coordinate(coordinate.x, coordinate.y + 1)
        }

        if (!this.placed) {
            $("#" + this.id).css({
                opacity:0.5
            })
        }
        else {

            //TODO: Check if Possible

            $("#" + this.id).css({

                top: pos.top + this.coordinates[0].y * 55,
                left: pos.left + this.coordinates[0].x * 55,
                opacity:1
            })
        }

    };
    this.draw()
    $("body").append($ship_image);





}


$(document).ready(main)