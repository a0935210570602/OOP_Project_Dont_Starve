var Monster_base = function(){
    this.monster;
    this.map;
    var PIXEL_CONST = 64;
    this.mapPosition = {x:0, y:0};
    this.walkTarget = {x:0, y:0};
    this.spritePosition = {x:0, y:0};
    this.constants = new Constants();
    this.isHurt = false;
    this.isdead = false;
    this.is_start = false;
    this.walkStep = {x:0,y:0};
    this.isWalking = false;
    this.monsterDirection = {x:0, y:0};
    this.walkVector = {x:0, y:0};
    this.hurt = new Framework.AnimationSprite({url:define.materialPath + 'Absorb.png', col:5, row:5, loop:false, speed:12}); 
    this.hurt.scale = 2;
    this.init = function(map, monster, monsterDie,walkSpeed){
        this.map = map;
        this.monster = monster;
        this.walkSpeed = walkSpeed;
        this.monsterDie = monsterDie;
    }
    this.walk = function(moveStep){
        if(this.isWalking === false){
            this.isWalking = true;
            this.walkTarget = {x:this.mapPosition.x + moveStep.x, y:this.mapPosition.y + moveStep.y};
        }
    }
    this.die = function(){
        this.isHurt = true;
        this.monsterDie.start({ from: 0, to: 2, loop: false});
        setTimeout(()=>{
            this.isdead = true;
        },500);
    }
    this.getHurt = function(){
        if(!this.isHurt){
            this.isHurt = true;
            this.monsterDie.start({ from: 0, to: 2, loop: false});
            this.hurt.start({ from: 17, to: 19, loop: false});
            setTimeout(()=>{
                this.isHurt = false;
            },300);
        }
    }
    this.walkAlittle = function(){
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
    this.update = function(){
        this.checkIsMonsterOutCanvus();
        if(!this.is_start){ return; }
        this.hurt.update();
        this.monster.update();
        this.monsterDie.update();
        if(this.isWalking){
            if(this.walkTarget.x * PIXEL_CONST === this.spritePosition.x && this.walkTarget.y * PIXEL_CONST === this.spritePosition.y){
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
    this.draw = function(ctx){
        if(!this.is_start){ return; }
        var xx = 13*64 + this.spritePosition.x - this.map.playerPositionOnMap.x*64;
        var yy = 7*64 + this.spritePosition.y - this.map.playerPositionOnMap.y*64;
        if(!this.isHurt){
            this.monster.position = {x: xx, y: yy};
            this.monster.draw(ctx);
        }else{
            this.monsterDie.position = {x: xx, y: yy};
            this.hurt.position = {x: xx, y: yy};
            this.monsterDie.draw(ctx);
            this.hurt.draw(ctx);
        }
    }
    this.checkIsMonsterOutCanvus = function(){
        if( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6){
            this.is_start = true;
        }else{
            this.is_start = false;
        }
    }
    this.howToWalk = function(restriction, thirdDirection){
        this.audio = new Framework.Audio({
            cow: {
                mp3: define.musicPath + '牛叫聲.mp3',
            },bat: {
                mp3: define.musicPath + '蝙蝠叫聲.mp3',
            },pig: {
                mp3: define.musicPath + '豬叫聲.mp3',
            },eye: {
                mp3: define.musicPath + '眼球叫聲.mp3',
            }
        });
        switch(this.name){
            case "閃耀魔眼":
                this.audio.play({name: 'cow', loop: false});
                break;
            case "小蝙蝠":
                this.audio.play({name: 'bat', loop: false});
                break;
            case "小豬":
                this.audio.play({name: 'pig', loop: false});
                break;
            case "大眼仔仔":
                this.audio.play({name: 'eye', loop: false});
                break;
            default:
                break;
        }
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
    this.isAttack = function(){
        if(this.monsterDirection.x + this.mapPosition.x == this.map.playerPositionOnMap.x && this.monsterDirection.y + this.mapPosition.y == this.map.playerPositionOnMap.y && !this.isHurt){
            return true;
        }
        return false;
    }
    this.rushToYou = function()
    {
        var walkStep = {x:0,y:0};
        this.walkVector = {x:this.mapPosition.x-this.map.playerPositionOnMap.x, y:this.mapPosition.y-this.map.playerPositionOnMap.y};
        if(this.walkVector.x == 0){
            walkStep = this.walkVector.y > 0 ? {x:0,y:-1} : {x:0,y:1};
        }else if(this.walkVector.y == 0){
            walkStep = this.walkVector.x > 0 ? {x:-1,y:0} : {x:1,y:0};
        }else if( Math.abs(this.walkVector.x) >= Math.abs(this.walkVector.y)){
            if(this.walkVector.x < 0){
                if(this.walkVector.y>0)
                    walkStep = this.howToWalk(0,3);
                else
                    walkStep = this.howToWalk(0,2);
            }else{
                if(this.walkVector.y>0)
                    walkStep = this.howToWalk(1,3); 
                else
                    walkStep = this.howToWalk(1,2);
            }
        }else if(Math.abs(this.walkVector.x) < Math.abs(this.walkVector.y)){
            if(this.walkVector.y < 0){
                if(this.walkVector.x>0)
                    walkStep = this.howToWalk(2,1);
                else
                    walkStep = this.howToWalk(2,0);
            }else{
                if(this.walkVector.x>0)
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
    this.changeWalkDirection = function(walkStep){
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
    this.randomWalk = function()
    {
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
}
Object.defineProperty(Monster_base.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.spritePosition = {x:this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
Object.defineProperty(Monster_base.prototype, 'isDead', {
    get: function() {
        return this.isdead;
    }
}); 