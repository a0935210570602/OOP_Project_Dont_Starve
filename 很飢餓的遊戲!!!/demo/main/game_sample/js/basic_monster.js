var Basic_monster = function(){}
Basic_monster.prototype.mapPosition = {x:0, y:0};
Basic_monster.prototype.walkTarget = {x:0, y:0};
Basic_monster.prototype.spritePosition = {x:0, y:0};
Basic_monster.prototype.isdieing = false;
Basic_monster.prototype.isdead = false;
Basic_monster.prototype.is_start = false;
Basic_monster.prototype.walkStep = {x:0,y:0};
Basic_monster.prototype.isWalking = false;
Basic_monster.prototype.monsterDirection = {x:0, y:0};

Basic_monster.prototype.init = function(map, monster, walkSpeed){
    this.map = map;
    this.monster = monster;
    this.walkSpeed = walkSpeed;
    this.constants = new Constants();
}
Basic_monster.prototype.walk = function(moveStep){
    if(this.isWalking === false){
        this.isWalking = true;
        this.walkTarget = {x:this.mapPosition.x + moveStep.x, y:this.mapPosition.y + moveStep.y};
    }
}
Basic_monster.prototype.die = function(){
    this.isdead = true;
}
Basic_monster.prototype.walkAlittle = function(){
    if(this.playerDirection === this.constants.DirectionEnum.DOWN){
        this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y + this.walkSpeed};
    }
    else if(this.playerDirection === this.constants.DirectionEnum.LEFT){
        this.spritePosition = {x:this.spritePosition.x - this.walkSpeed, y:this.spritePosition.y};
    }
    else if(this.playerDirection === this.constants.DirectionEnum.RIGHT){
        this.spritePosition = {x:this.spritePosition.x + this.walkSpeed, y:this.spritePosition.y};
    }
    else if(this.playerDirection === this.constants.DirectionEnum.UP){
        this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y - this.walkSpeed};
    }
}
Basic_monster.prototype.update = function(){
    if(this.isdead ){ return; }
    this.checkIsMonsterOutCanvus();
    if(!this.is_start){ return; }
    this.monster.update();
    if(this.isWalking){
        if(this.walkTarget.x * 64 === this.spritePosition.x && this.walkTarget.y * 64 === this.spritePosition.y){
            this.isWalking = false;
            this.monster.index = this.playerDirection * 3 + 1;
            this.mapPosition = this.walkTarget;
        }else{
            this.walkAlittle();
        }
    }else
    {
        if(this.is_start)
        {
            if(this.map.player1.hide)
                this.randomWalk();
            else{
                this.rushToYou();
            }
        }
    }
}
Basic_monster.prototype.draw = function(ctx){
    if(this.isdead){ return; }
    if(!this.is_start){ return; }
    var xx = 13*64 + this.spritePosition.x - this.map.playerPositionOnMap.x*64;
    var yy = 7*64 + this.spritePosition.y - this.map.playerPositionOnMap.y*64;
    this.monster.position = {x: xx, y: yy};
    this.monster.draw(ctx);
}
Basic_monster.prototype.randomWalk = function(){
    var randNum = Framework.Game._currentLevel.cycleCount % 553;
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
        return;
    }
    if(this.walkStep.x != walkStep.x || this.walkStep.y != walkStep.y)
        this.changeWalkDirection(walkStep);
    if(this.map.checkMonsterIsWalkAble( {x: this.mapPosition.x + walkStep.x, y:this.mapPosition.y + walkStep.y} ))
    {
        this.walk(walkStep);
    }
}
Basic_monster.prototype.changeWalkDirection = function(walkStep){
    this.walkStep = walkStep;
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
    this.monster.start({ from: this.playerDirection * 3, to: this.playerDirection * 3 + 2, loop: true});
}
Basic_monster.prototype.rushToYou = function(){
    var walkStep = {x:0,y:0};
    var walkVector = {x:this.mapPosition.x-this.map.playerPositionOnMap.x, y:this.mapPosition.y-this.map.playerPositionOnMap.y};
    
    if(walkVector.x == 0){
        walkStep = walkVector.y > 0 ? {x:0,y:-1} : {x:0,y:1};
    }else if(walkVector.y == 0){
        walkStep = walkVector.x > 0 ? {x:-1,y:0} : {x:1,y:0};
    }else if( Math.abs(walkVector.x) >= Math.abs(walkVector.y)){
        if(walkVector.x < 0){
            //{x:-1,y:0}
            if(walkVector.y>0)
                walkStep = this.howToWalk(0,3);
            else
                walkStep = this.howToWalk(0,2);
        }else{
            // {x:1,y:0}
            if(walkVector.y>0)
                walkStep = this.howToWalk(1,3);  //[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}];
            else
                walkStep = this.howToWalk(1,2);
        }
    }else if(Math.abs(walkVector.x) < Math.abs(walkVector.y)){
        if(walkVector.y < 0){
            // {x:0,y:-1}
            if(walkVector.x>0)
                walkStep = this.howToWalk(2,1);
            else
                walkStep = this.howToWalk(2,0);

        }else{
            // {x:0,y:1}
            if(walkVector.x>0)
                walkStep = this.howToWalk(3,1);
            else
                walkStep = this.howToWalk(3,0);
        }
    }else{
        this.changeWalkDirection(this.walkStep);
        return;
    }
    if(this.walkStep.x != walkStep.x || this.walkStep.y != walkStep.y)
        this.changeWalkDirection(walkStep);
    if(this.map.checkMonsterIsWalkAble({x: this.mapPosition.x + walkStep.x, y:this.mapPosition.y + walkStep.y}))
    {
        this.walk(walkStep);
    }
}
Basic_monster.prototype.isAttack = function(){
    if(this.monsterDirection.x + this.mapPosition.x == this.map.playerPositionOnMap.x && this.monsterDirection.y + this.mapPosition.y == this.map.playerPositionOnMap.y){
        return true;
    }
    return false;
}
Basic_monster.prototype.howToWalk = function(restriction, thirdDirection){
    var directionArray = [{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}];
    var thirdDirection = directionArray[thirdDirection];
    directionArray.splice( restriction, 1 );
    for(var i=0;i<directionArray.length;i++){
        if(directionArray[i].x == thirdDirection.x && directionArray[i].y == thirdDirection.y){
            directionArray.splice( i, 1 );
            break;
        }
    }
    var randum_number = Math.floor(Math.random()*2) ;
    if(this.map.checkMonsterIsWalkAble({x: this.mapPosition.x +directionArray[randum_number].x,y:this.mapPosition.y + directionArray[randum_number].y}))
    {
        return directionArray[randum_number];
    }else
    {
        directionArray.splice( randum_number, 1 );
        if(this.map.checkMonsterIsWalkAble({x: this.mapPosition.x +directionArray[0].x, y:this.mapPosition.y + directionArray[0].y}))
        {
            return directionArray[0];
        }else{
            if(this.map.checkMonsterIsWalkAble({x:this.mapPosition.x +thirdDirection.x, y:this.mapPosition.y +thirdDirection.y}))
            {
                return thirdDirection;
            }else{
                return {x:0, y:0};
            }
        }
    }
}
Basic_monster.prototype.checkIsMonsterOutCanvus = function(){
    if( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6){
        this.is_start = true;
    }else{
        this.is_start = false;
    }
}
