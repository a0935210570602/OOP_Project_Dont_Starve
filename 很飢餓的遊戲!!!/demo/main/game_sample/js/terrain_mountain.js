var Terrain_mountain = function() {
    this.terrain_mountain = [];
    this.terrain_mountain.push(new Framework.Sprite(define.imageMorningPath + 'terrain_mountain.png')); 
    this.terrain_mountain[0].scale = 2;
    this.terrain_mountain.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_mountain.png')); 
    this.terrain_mountain[1].scale = 2;
    this.terrain_mountain.push(new Framework.Sprite(define.imageNightPath + 'terrain_mountain.png')); 
    this.terrain_mountain[2].scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.timeStatus = 0;

    this.update = function(){
    }

    this.draw = function(ctx){
        this.terrain_mountain[this.timeStatus].draw(ctx);
    }

};

Object.defineProperty(Terrain_mountain.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.terrain_mountain[this.timeStatus].position = {x: this.mapPosition.x, y: this.mapPosition.y};
    }
}); 
