var Terrain_plain = function() {
    this.terrain_plain = [];
    this.terrain_plain.push(new Framework.Sprite(define.imageMorningPath + 'terrain_plain.png')); 
    this.terrain_plain[0].scale = 2;
    this.terrain_plain.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_plain.png')); 
    this.terrain_plain[1].scale = 2;
    this.terrain_plain.push(new Framework.Sprite(define.imageNightPath + 'terrain_plain.png')); 
    this.terrain_plain[2].scale = 2;
    this.terrain_plain.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.timeStatus = 0;

    this.update = function(){
    }

    this.draw = function(ctx){
        this.terrain_plain[this.timeStatus].draw(ctx);
    }

};

Object.defineProperty(Terrain_plain.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.terrain_plain[this.timeStatus].position = {x: this.mapPosition.x, y: this.mapPosition.y};
    }
}); 
