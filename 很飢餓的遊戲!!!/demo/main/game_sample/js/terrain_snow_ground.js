var Terrain_snow_ground = function() {
    this.terrain_snow_ground = [];
    this.terrain_snow_ground.push(new Framework.Sprite(define.imageMorningPath + 'terrain_snow_ground.png')); 
    this.terrain_snow_ground[0].scale = 2;
    this.terrain_snow_ground.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_snow_ground.png')); 
    this.terrain_snow_ground[1].scale = 2;
    this.terrain_snow_ground.push(new Framework.Sprite(define.imageNightPath + 'terrain_snow_ground.png')); 
    this.terrain_snow_ground[2].scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.timeStatus = 0;

    this.update = function(){
    }

    this.draw = function(ctx){
        this.terrain_snow_ground[this.timeStatus].draw(ctx);
    }

};

Object.defineProperty(Terrain_snow_ground.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.terrain_snow_ground[this.timeStatus].position = {x: this.mapPosition.x, y: this.mapPosition.y};
    }
}); 
