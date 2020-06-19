var Constants = function() {
    this.DirectionEnum = {
        DOWN : 0,
        LEFT : 1,
        RIGHT : 2,
        UP : 3
    };
    this.Direction = {
        DOWN : {x:0, y:1},
        LEFT : {x:-1,y:0},
        RIGHT : {x:1,y:0},
        UP : {x:0,y:-1}
    };
};