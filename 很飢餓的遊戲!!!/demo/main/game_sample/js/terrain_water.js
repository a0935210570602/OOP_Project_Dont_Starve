var Terrain_water = function() {
    this.terrain_water = [];
    this.terrain_water.push(new Framework.Sprite(define.imageMorningPath + 'terrain_water.png')); 
    this.terrain_water[0].scale = 2;
    this.terrain_water.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_water.png')); 
    this.terrain_water[1].scale = 2;
    this.terrain_water.push(new Framework.Sprite(define.imageNightPath + 'terrain_water.png')); 
    this.terrain_water[2].scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.timeStatus = 0;

    this.update = function(){
    }

    this.draw = function(ctx){
        this.terrain_water[this.timeStatus].draw(ctx);
    }

};

Object.defineProperty(Terrain_water.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.terrain_water[this.timeStatus].position = {x: this.mapPosition.x, y: this.mapPosition.y};
    }
}); 
