
var MapTile = function(time_status) {
    var time_path;
    console.log(time_status);
    if(time_status == 0){
        time_path = define.imageMorningPath;
    }
    else if(time_status == 1){
        time_path = define.imageAfternoonPath;
    }
    else{
        time_path = define.imageNightPath;
    }
    console.log(time_path);
    // this.mapFloor = new Framework.Sprite(time_path + 'floor2.png');
    // this.mapFloor.scale = 2;

    this.terrain_plain = new Framework.Sprite(define.imageNightPath + 'terrain_plain.png');
    this.terrain_plain.scale = 2;

    this.terrain_water = new Framework.Sprite(define.imageNightPath + 'terrain_water.png');
    this.terrain_water.scale = 2;

    this.terrain_mountain = new Framework.Sprite(define.imageNightPath + 'terrain_mountain.png');
    this.terrain_mountain.scale = 2;

    this.terrain_blood_water = new Framework.Sprite(define.imageNightPath + 'terrain_blood_water.png');
    this.terrain_blood_water.scale = 2;

    this.terrain_forest = new Framework.Sprite(define.imageNightPath + 'terrain_forest.png');
    this.terrain_forest.scale = 2;

    this.terrain_lava = new Framework.Sprite(define.imageNightPath + 'terrain_lava.png');
    this.terrain_lava.scale = 2;

    this.terrain_snow_ground = new Framework.Sprite(define.imageNightPath + 'terrain_snow_ground.png');
    this.terrain_snow_ground.scale = 2;

    // this.mapWall = new Framework.Sprite(time_path + 'treeStone.png');
    // this.mapWall.scale = 2;

    // this.increaseBombNum  = new Framework.Sprite(time_path + 'increaseBombNum.png');
    // this.increaseBombNum.scale = 1.5;

    // this.increaseBombPower  = new Framework.Sprite(time_path + 'increaseBombPower.png');
    // this.increaseBombPower.scale = 1.5;

    // this.stopMonster  = new Framework.Sprite(time_path + 'stopMonster.png');
    // this.stopMonster.scale = 1.5;

    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this._tileType = 0;

    this.update = function(){

    }

    this.draw = function(ctx){

        this.mapFloor.draw(ctx);
        if(this._tileType === 1){
            this.mapWall.draw(ctx);
        }else if(this._tileType === -1){
            this.increaseBombNum.draw(ctx);
        }else if(this._tileType === -2){
            this.increaseBombPower.draw(ctx);
        }else if(this._tileType === -3){
            this.stopMonster.draw(ctx);
        }else if(this._tileType === -4){
            this.terrain_plain.draw(ctx);
        }else if(this._tileType === -5){
            this.terrain_water.draw(ctx);
        }else if(this._tileType === -6){
            this.terrain_mountain.draw(ctx);
        }else if(this._tileType === -7){
            this.terrain_blood_water.draw(ctx);
        }else if(this._tileType === -8){
            this.terrain_forest.draw(ctx);
        }else if(this._tileType === -9){
            this.terrain_lava.draw(ctx);
        }else if(this._tileType === -10){
            this.terrain_snow_ground.draw(ctx);
        }
    }

};

Object.defineProperty(MapTile.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.mapWall.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.increaseBombNum.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.increaseBombPower.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.stopMonster.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.terrain_plain.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.terrain_water.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.terrain_mountain.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.terrain_blood_water.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.terrain_forest.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.terrain_lava.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.terrain_snow_ground.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

Object.defineProperty(MapTile.prototype, 'tileType', {
    get: function() {
        return this._tileType;
    },
    set: function(newValue) {
        this._tileType = newValue;
    }
}); 