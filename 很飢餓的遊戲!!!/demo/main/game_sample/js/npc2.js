var Npc2 = function(map) {
    this.npc1 = new Framework.AnimationSprite({url:define.materialPath + '莉莉.png', 
        col:3 , row:4 , loop:true , speed:12}); 
    this.npc1.scale = 1.5;
    this.npc1.index = 1;
    this.item_num = -11;
    var PIXEL_CONST = 64;
    this.name = "商人莉莉";
    this.mapPosition = {x:0, y:0};
    this.walkTarget = {x:0, y:0};
    this.spritePosition = {x:0, y:0};
    this.constants = new Constants();
    this.map = map;
    this.isdieing = false;
    this.isdead = false;
    this.dieingCounter = 0;
    this.is_start = false;
    this.canWalking = true;
    this.isWalking = false;
    this.health = 200;
    this.attack = 5;
    var m_monster = this;
    this.monsterDirection = {x:0, y:0};
    this.walk = function(moveStep){
        if(this.isWalking === false){
            this.isWalking = true;
            this.walkTarget = {x:this.mapPosition.x + moveStep.x, y:this.mapPosition.y + moveStep.y};
            this.changeWalkDirection(moveStep);
        }
    }
    this.changeWalkDirection = function(walkStep){
        if(walkStep.x > 0){
            this.playerDirection = this.constants.DirectionEnum.RIGHT;
            this.monsterDirection = this.constants.Direction.RIGHT;
        }else if(walkStep.x <0){
            this.playerDirection = this.constants.DirectionEnum.LEFT;
            this.monsterDirection = this.constants.Direction.LEFT;
        }
        if(walkStep.y > 0){
            this.playerDirection = this.constants.DirectionEnum.DOWN;
            this.monsterDirection = this.constants.Direction.DOWN;
        }else if(walkStep.y < 0){
            this.playerDirection = this.constants.DirectionEnum.UP;
            this.monsterDirection = this.constants.Direction.UP;
        }
        this.npc1.start({ from: this.playerDirection * 3, to: this.playerDirection * 3 + 2, loop: true});
    }
    this.die = function(){
        this.isdead = true;
    }
    this.stopWalk = function(){   
        this.canWalking = false;
    }
    var walkSpeed = 8;
    this.walkAlittle = function(){
        if(this.playerDirection === this.constants.DirectionEnum.DOWN)
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y + walkSpeed};
        else if(this.playerDirection === this.constants.DirectionEnum.LEFT)
            this.spritePosition = {x:this.spritePosition.x - walkSpeed, y:this.spritePosition.y};
        else if(this.playerDirection === this.constants.DirectionEnum.RIGHT)
            this.spritePosition = {x:this.spritePosition.x + walkSpeed, y:this.spritePosition.y};
        else if(this.playerDirection === this.constants.DirectionEnum.UP)
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y - walkSpeed};
    }
    this.update = function(){
        if(this.isdead ){ return; }
        this.checkIsMonsterOutCanvus();
        if(!this.is_start){ return; }
        this.npc1.update();
        if(this.isWalking){
            if(this.walkTarget.x * PIXEL_CONST === this.spritePosition.x && this.walkTarget.y * PIXEL_CONST === this.spritePosition.y){
                this.isWalking = false;
                this.npc1.stop();
                this.npc1.index = this.playerDirection * 3 + 1;
                this.mapPosition = this.walkTarget;
            }else
                this.walkAlittle();
        }else{
            if(this.canWalking && this.is_start){
                // this.randomWalk();
            }
        }
    }
    this.draw = function(ctx){
        if(this.isdead){ return; }
        if(!this.is_start){ return; }
        var xx = 13*64 + this.spritePosition.x - this.map.playerPositionOnMap.x*64;
        var yy = 7*64 + this.spritePosition.y - this.map.playerPositionOnMap.y*64;
        this.npc1.position = {x: xx, y: yy};
        this.npc1.draw(ctx);
    }
    var walkDir = 0;
    this.checkIsMonsterOutCanvus = function(){
        if( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6)
            this.is_start = true;
        else
            this.is_start = false;
    }
    this.randomWalk = function()
    {   var randNum = Framework.Game._currentLevel.cycleCount % 553;
        walkDir++;
        var walkStep = {x:0,y:0};
        if(randNum % 133 == 0)
            walkStep.y = 1
        else if(randNum % 157 == 0)
            walkStep.y = -1
        else{
            walkDir = 0;
            return;
        }
        if(this.map.checkMonsterIsWalkAble( {x: this.mapPosition.x + walkStep.x, y:this.mapPosition.y + walkStep.y} ))
            this.walk(walkStep);
    }
};
Object.defineProperty(Npc2.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.spritePosition = {x:this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
Object.defineProperty(Npc2.prototype, 'isDead', {
    get: function() {
        return this.isdead;
    }
}); 