var Monster_cute_little_eye = function() {
    this.monster_cute_little_eye = new Framework.AnimationSprite({url:define.materialPath + 'monster_cute_litter_eye.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_cute_little_eye.scale = 2;
    this.monster_cute_little_eye.index = 1;
    this.canvasPosition = {x: 0, y: 0};
    this.mapPosition = {x: 0, y: 0};
    this.isWalkable = false;
    var PIXEL_CONST = 64;
    
    this.mapPosition = {x:0, y:0};
    this.update = function(){
    }

    this.draw = function(ctx){
        this.monster_cute_little_eye.draw(ctx);
    }       

    this.randomWalk  = function(){
        if(this.isWalkable){
            
            var randNum = Framework.Game._currentLevel.cycleCount % 553;
            var walkStep = {x:0,y:0}
            if(randNum % 117 == 0)
            {
                walkStep.y = 1
            }else if(randNum % 79 == 0)
            {
                walkStep.y = -1
            }else if(randNum % 133 == 0)
            {
                walkStep.x = 1
            }else if(randNum % 157 == 0)
            {
                walkStep.x = -1
            }else
            {
                walkDir = 0;
                return;
            }
        }

    }

    this.isWalkable  = function(is_start){
        this.isWalkable = is_start;
    }

};

Object.defineProperty(Monster_cute_little_eye.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
    }
}); 
