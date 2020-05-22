var Monster_cute_little_eye = function(map, options) {
    
    this.monster_cute_little_eye = new Framework.AnimationSprite({url:define.materialPath + 'monster_cute_litter_eye.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_cute_little_eye.scale = 1.5;
    this.monster_cute_little_eye.index = 1;
    var PIXEL_CONST = 64;
    //怪獸的名字
    this.name = "大眼仔仔";

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

    // this.StepMovedCallBack = [];

    this.isWalking = false;

    this.health = 200;
    this.attack = 5;

    var m_monster = this;

    // this.monsterDirection = this.constants.DirectionEnum.DOWN;
    this.monsterDirection = {x:0, y:0};
    this.walk = function(moveStep){
        if(this.isWalking === false){
            this.isWalking = true;
            this.walkTarget = {x:this.mapPosition.x + moveStep.x, y:this.mapPosition.y + moveStep.y};
            this.changeWalkDirection(moveStep);
        }
    }

    this.die = function(){
        this.isdead = true;
    }

    this.stopWalk = function()
    {
        this.canWalking = false;
    }

    this.walkEnd = function(){    }

    var walkSpeed = 8;
    this.walkAlittle = function(){

        if(this.playerDirection === this.constants.DirectionEnum.DOWN){
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y + walkSpeed};
        }
        else if(this.playerDirection === this.constants.DirectionEnum.LEFT){
            this.spritePosition = {x:this.spritePosition.x - walkSpeed, y:this.spritePosition.y};
        }
        else if(this.playerDirection === this.constants.DirectionEnum.RIGHT){
            this.spritePosition = {x:this.spritePosition.x + walkSpeed, y:this.spritePosition.y};
        }
        else if(this.playerDirection === this.constants.DirectionEnum.UP){
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y - walkSpeed};
        }
    }

    this.update = function(){
        if(this.isdead ){ return; }
        this.monster_cute_little_eye.update();
        if(this.isWalking){
            if(this.walkTarget.x * PIXEL_CONST === this.spritePosition.x && this.walkTarget.y * PIXEL_CONST === this.spritePosition.y){
                this.isWalking = false;
                this.monster_cute_little_eye.stop();
                this.monster_cute_little_eye.index = this.playerDirection * 3 + 1;
                this.mapPosition = this.walkTarget;
                //callback
                // for(var i=0; i<this.StepMovedCallBack.length; i++){
                //     this.StepMovedCallBack[i](this);
                // }
            }else{
                this.walkAlittle();
            }
        }else
        {
            if(this.canWalking && this.is_start)
            {
                this.rushToYou();
                console.log("rush")
            }
        }
    }


    this.draw = function(ctx){
        if(this.isdead){ return; }
        var xx = 13*64 + this.spritePosition.x - this.map.playerPositionOnMap.x*64;
        var yy = 7*64 + this.spritePosition.y - this.map.playerPositionOnMap.y*64;

        this.monster_cute_little_eye.position = {x: xx, y: yy};
        // console.log("this.map.playerPositionOnMap");
        // console.log(this.map.playerPositionOnMap);
        // console.log(this.mapPosition);
        this.checkIsMonsterOutCanvus();
        if(this.is_start){
            this.monster_cute_little_eye.draw(ctx);
        }
    }
    var walkDir = 0;
    this.checkIsMonsterOutCanvus = function(){
        if( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6){
            this.is_start = true;
        }else{

            this.is_start = false;
        }
    }

    this.howToWalk = function(restriction, thirdDirection){
        var directionArray = [{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}];
        var thirdDirection = directionArray[thirdDirection];
        // console.log( directionArray);
        // console.log( 'directionArray.indexOf(thirdDirection)');
        directionArray.splice( restriction, 1 );
        // console.log( directionArray);

        // console.log( 'directionArray.indexOf(thirdDirection)');
        for(var i=0;i<directionArray.length;i++){
            if(directionArray[i].x == thirdDirection.x && directionArray[i].y == thirdDirection.y){
                directionArray.splice( i, 1 );
                break;
            }
        }
        var randum_number = Math.floor(Math.random()*2) ;
        if(this.map.checkIsWalkAble(this.mapPosition.x +directionArray[randum_number].x,this.mapPosition.y + directionArray[randum_number].y))
        {
            return directionArray[randum_number];
        }else
        {
            directionArray.splice( randum_number, 1 );
            if(this.map.checkIsWalkAble(this.mapPosition.x +directionArray[0].x,this.mapPosition.y + directionArray[0].y))
            {
                return directionArray[0];
            }else{
                if(this.map.checkIsWalkAble(this.mapPosition.x +thirdDirection.x,this.mapPosition.y +thirdDirection.y))
                {
                    return thirdDirection;
                }else{
                    return {x:0, y:0};
                }
            }

        }
    }
    this.walkVector = {x:0, y:0};
    this.isAttack = function(){
        if(this.monsterDirection.x + this.mapPosition.x == this.map.playerPositionOnMap.x && this.monsterDirection.y + this.mapPosition.y == this.map.playerPositionOnMap.y){
            return true;
        }
        return false;
    }

    this.rushToYou = function()
    {
        walkDir++;
        var walkStep = {x:0,y:0};
        this.walkVector = {x:this.mapPosition.x-this.map.playerPositionOnMap.x, y:this.mapPosition.y-this.map.playerPositionOnMap.y};
        var walkDirection;
        if(this.walkVector.x == 0){
            walkStep = this.walkVector.y > 0 ? {x:0,y:-1} : {x:0,y:1};
        }else if(this.walkVector.y == 0){
            walkStep = this.walkVector.x > 0 ? {x:-1,y:0} : {x:1,y:0};
        }else if( Math.abs(this.walkVector.x) >= Math.abs(this.walkVector.y)){
            if(this.walkVector.x < 0){
                //{x:-1,y:0}
                if(this.walkVector.y>0)
                    walkStep = this.howToWalk(0,3);
                else
                    walkStep = this.howToWalk(0,2);
            }else{
                // {x:1,y:0}
                if(this.walkVector.y>0)
                    walkStep = this.howToWalk(1,3);  //[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}];
                else
                    walkStep = this.howToWalk(1,2);
            }
        }else if(Math.abs(this.walkVector.x) < Math.abs(this.walkVector.y)){
            if(this.walkVector.y < 0){
                // {x:0,y:-1}
                if(this.walkVector.x>0)
                    walkStep = this.howToWalk(2,1);
                else
                    walkStep = this.howToWalk(2,0);

            }else{
                // {x:0,y:1}
                if(this.walkVector.x>0)
                    walkStep = this.howToWalk(3,1);
                else
                    walkStep = this.howToWalk(3,0);
            }
        }else{
            walkDir = 0;
            return;
        }
        
        if( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6){
             this.is_start = true;
             this.changeWalkDirection(walkStep);
            if(this.map.checkIsWalkAble(this.mapPosition.x + walkStep.x,this.mapPosition.y + walkStep.y))
            {
                this.walk(walkStep);
            }
        }else{
            this.is_start = false;
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
        this.monster_cute_little_eye.start({ from: this.playerDirection * 3, to: this.playerDirection * 3 + 2, loop: true});
    }

    this.randomWalk = function()
    {

        var randNum = Framework.Game._currentLevel.cycleCount % 553;
        walkDir++;
        var walkStep = {x:0,y:0};

        if(randNum % 117 == 0)
        {
            walkStep.x = 1
        }else if(randNum % 79 == 0)
        {
            walkStep.x = -1
        }else if(randNum % 133 == 0)
        {
            walkStep.y = 1
        }else if(randNum % 157 == 0)
        {
            walkStep.y = -1
        }else
        {
            walkDir = 0;
            return;
        }
        if( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6){
            this.walk(walkStep);
            if(this.map.checkIsWalkAble(this.mapPosition.x + walkStep.x,this.mapPosition.y + walkStep.y))
            {
                this.is_start = true;
            }
        }else{
            this.is_start = false;
        }
    }
};

Object.defineProperty(Monster_cute_little_eye.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.spritePosition = {x:this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

Object.defineProperty(Monster.prototype, 'isDead', {
    get: function() {
        return this.isdead;
    }
}); 