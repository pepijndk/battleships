var images = ["","images/saucers.png", "images/bigsaucer.png","images/battleship.png","","images/freighter.png"]
var ships = [];

var main = function () {
    "use strict";
    console.log("hello world!");




    /*var $ship_image = $("<img>")
        .attr("src", "images/battleship.png").css({top: pos.top, left:pos.left, position: 'absolute'})*/




    $("#grid").on("click", function(event) {
        var coordinate = new Coordinate(
            Math.ceil((event.pageX - this.offsetLeft) / 55)-1,
            Math.ceil((event.pageY - this.offsetTop) / 55)-1
        )
        console.log(coordinate);
    });

    // setting up

    ships.push(new Ship(new Coordinate(5, 2), 3, true))
    ships.push(new Ship(new Coordinate(1, 1), 5, true))
    console.log(ships[0])
   renderShips()


    };


function Coordinate(x, y) {
    this.x = x
    this.y = y
}

var renderShips = function () {
    var pos = $("#grid").offset();
    for (var i = 0; i < ships.length; i++) {

        cShip = ships[i]
        var x = cShip.coordinates[0].x;
        var y = cShip.coordinates[0].y;

        console.log("x: " + x + "  y:"+y)

        var $ship_image = $("<img>")
            .attr("src", cShip.image)
            .attr("id", i)
            .css({top: pos.top+y*55, left:pos.left+x*55, position: 'absolute'})
            .on("click", function(event) {
                var id=event.target.id;

                if (ships[id].placed===false) {
                    ships[id].placed=true;
                    console.log("!");
                }

                else {
                    ships[id].placed=false;
                }


                (function() {


                    if (!ships[id].placed) {
                        document.onmousemove = handleMouseMove;

                        function handleMouseMove(event) {
                            console.log(ships.placed)
                            var dot, eventDoc, doc, body, pageX, pageY;

                            $("#" + id).css({
                                top: gridCoords().y * 55 + pos.top,
                                left: gridCoords().x * 55 + pos.left
                            })

                            console.log(Math.ceil((event.pageX - pos.left) / 55) - 1);
                            console.log(Math.ceil((event.pageY - pos.top) / 55) - 1)

                        }
                    }

                })();





            });
        $("body").append($ship_image);


    }

}

function gridCoords() {
    var pos = $("#grid").offset();

    var coordinate = new Coordinate(
        Math.ceil((event.pageX - pos.left) / 55)-1,
        Math.ceil((event.pageY - pos.top) / 55)-1
    )

    return coordinate;

}

function Ship(coordinate, length, horizontal) {
    this.placed = true;
    this.coordinates = [coordinate];
    this.image = images[length]

    for (var i = 1; i<length; i++) {
        if (horizontal) {
            this.coordinates[i] = new Coordinate(coordinate.x+i,coordinate.y)
            continue
        }
        coordinates[i] = new Coordinate(coordinate.x,coordinate.y+1)
    }

}


$(document).ready(main)

