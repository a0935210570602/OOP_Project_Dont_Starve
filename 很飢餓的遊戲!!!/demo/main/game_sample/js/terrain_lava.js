var Terrain_lava = function() {
    this.terrain_lava = [];
    this.terrain_lava.push(new Framework.Sprite(define.imageMorningPath + 'terrain_lava.png')); 
    this.terrain_lava[0].scale = 2;
    this.terrain_lava.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_lava.png')); 
    this.terrain_lava[1].scale = 2;
    this.terrain_lava.push(new Framework.Sprite(define.imageNightPath + 'terrain_lava.png')); 
    this.terrain_lava[2].scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.timeStatus = 0;

    this.update = function(){
    }

    this.draw = function(ctx){
        this.terrain_lava[this.timeStatus].draw(ctx);
    }

};

Object.defineProperty(Terrain_lava.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.terrain_lava[this.timeStatus].position = {x: this.mapPosition.x, y: this.mapPosition.y};
    }
}); 
