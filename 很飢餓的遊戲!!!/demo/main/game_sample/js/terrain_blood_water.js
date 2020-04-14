var Terrain_blood_water = function() {
    this.terrain_blood_water = [];
    this.terrain_blood_water.push(new Framework.Sprite(define.imageMorningPath + 'terrain_blood_water.png')); 
    this.terrain_blood_water[0].scale = 2;
    this.terrain_blood_water.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_blood_water.png')); 
    this.terrain_blood_water[1].scale = 2;
    this.terrain_blood_water.push(new Framework.Sprite(define.imageNightPath + 'terrain_blood_water.png')); 
    this.terrain_blood_water[2].scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.timeStatus = 0;

    this.update = function(){
    }

    this.draw = function(ctx){
        this.terrain_blood_water[this.timeStatus].draw(ctx);
    }

};

Object.defineProperty(Terrain_blood_water.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.terrain_blood_water[this.timeStatus].position = {x: this.mapPosition.x, y: this.mapPosition.y};
    }
}); 
