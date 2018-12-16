function startGame() {
    "use strict";
    console.log("game started");



    $("#grid2").on("click", function (event) {

        if (gridCoords("#grid2").x===0 || gridCoords("#grid2").y===0) {return}

        var pos = $("#grid2").offset();
        var $expl_image = $("<img>")
            .attr("class", "expl_image")
            .css({
                top: pos.top + gridCoords("#grid2").y * 55,
                left: pos.left + gridCoords("#grid2").x * 55,
                position: 'absolute'})


        if (checkHit(gridCoords("#grid2"))) {
            $expl_image.attr("src", "images/hit.png")
        }
        else {
            $expl_image.attr("src", "images/miss.png")
        }

        $("body").append($expl_image);


    })
}

function checkHit(coordinate) {
    return false;
}


$(document).ready(startGame())