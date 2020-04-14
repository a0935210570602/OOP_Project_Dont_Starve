var Terrain_forest = function() {
    this.terrain_forest = [];
    this.terrain_forest.push(new Framework.Sprite(define.imageMorningPath + 'terrain_forest.png')); 
    this.terrain_forest[0].scale = 2;
    this.terrain_forest.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_forest.png')); 
    this.terrain_forest[1].scale = 2;
    this.terrain_forest.push(new Framework.Sprite(define.imageNightPath + 'terrain_forest.png')); 
    this.terrain_forest[2].scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.timeStatus = 0;


    this.update = function(){
    }

    this.draw = function(ctx){
        this.terrain_forest[this.timeStatus].draw(ctx);
    }

};

Object.defineProperty(Terrain_forest.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.terrain_forest[this.timeStatus].position = {x: this.mapPosition.x, y: this.mapPosition.y};
    }
}); 
