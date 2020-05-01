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

    this.ItemEnum = {
        NONE : 0,
        INCREASE_BOMB : -1,
        INCREASE_POWER : -2,
        STOP_MONSTER : -3,
        Terrain_PLAIN : -4,
        Terrain_WATER : -5
    };
    this.Items = {
        NONE : 0,
        ITEM_1 : 1,
        ITEM_2 : 2,
        ITEM_3 : 3,
        ITEM_4 : 4,
        ITEM_5 : 5,
        BRANCH : 6,
    }
};
