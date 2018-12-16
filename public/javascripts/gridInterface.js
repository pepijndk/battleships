function Coordinate(x, y) {
    this.x = x
    this.y = y
}

function gridCoords(gridID = "#grid") {
    var pos = $(gridID).offset();
    var coordinate = new Coordinate(
        Math.ceil((event.pageX - pos.left) / 55) - 1,
        Math.ceil((event.pageY - pos.top) / 55) - 1
    )
    return coordinate;
}

