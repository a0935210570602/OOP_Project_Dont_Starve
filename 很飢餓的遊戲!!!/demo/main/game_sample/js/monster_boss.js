var Monster_boss = function(map) {
    this.monster_boss = new Framework.AnimationSprite({url:define.materialPath + 'boss.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_boss.scale = 1.3;
    this.monster_boss.index = 1;
    this.monster_boss_die = new Framework.AnimationSprite({url:define.materialPath + 'boss_die.png', col:3 , row:1 , loop:false , speed:12}); 
    this.monster_boss_die.scale = 1.2;
    this.monster_tocan = new Framework.Sprite(define.materialPath + 'boss_tocan.png'); 
    this.monster_tocan.scale = 0.8; 
    this.normal_attack = new Framework.AnimationSprite({url:define.skillAnimationPath + 'ClawSpecial1.png', col:5 , row:5 , loop:false , speed:12}); 
    this.normal_attack.position = {x:13*64,y:7*64};
    this.normal_attack.scale = 0.8;
    this.hurtRevolution =  new Framework.AnimationSprite({url:define.skillAnimationPath + 'Darkness1.png', col:5 , row:4 , loop:false , speed:12}); 
    this.hurtRevolution.scale = 2;
    this.transport = new Framework.AnimationSprite({url:define.skillAnimationPath + 'Thunder3.png', col:5 , row:1 , loop:false , speed:12}); 
    this.transport.position = {x:13*64,y:7*64};
    this.transport.scale = 0.8;
    this.range_attack = new Framework.AnimationSprite({url:define.skillAnimationPath + 'Darkness5.png', col:5 , row:5 , loop:false , speed:12}); 
    this.range_attack.scale = 2;
    this.rangePosition = {x:0,y:0};
    this.remote_attack = new Framework.AnimationSprite({url:define.skillAnimationPath + 'Darkness4.png', col:5 , row:6 , loop:false , speed:12}); 
    this.remote_attack.scale = 0.8;
    this.remotePosition = {x:0,y:0};
    this.remoteSprite = {x:0,y:0};
    this.remoteTarget = {x:0,y:0};
    this.remoteDirection = {x:0,y:0};
    this.speed = 16;
    this.catch = [];
    this.catchPosition = [];
    for(var i=0;i < 4;i++){
        var img = new Framework.AnimationSprite({url:define.skillAnimationPath + 'StateDown2.png', col:5 , row:5 , loop:false , speed:12}); 
        img.scale = 0.4;
        this.catch.push(img);
    }
    this.name = "boss";
    this.attack = 150;
    this.health = 6000;
    this.maxHealth = 6000;
    this.monster_boss;
    this.map = map;
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
    this.walkSpeed = 8;
    this.attackTimer = 0;
    this.trace = false;
    this.isCatching = false;
    this.frequency = 15;
    this.catchPlayer = function(){
        var audio = new Framework.Audio({
            catch: {
                mp3: define.musicPath + '綑綁.mp3'
            }
        });
        audio.play({name: 'catch', loop: false});
        this.catchPosition = [];
        this.catchPosition.push({x:this.map.playerPositionOnMap.x+1, y:this.map.playerPositionOnMap.y});
        this.catchPosition.push({x:this.map.playerPositionOnMap.x-1, y:this.map.playerPositionOnMap.y});
        this.catchPosition.push({x:this.map.playerPositionOnMap.x, y:this.map.playerPositionOnMap.y-1});
        this.catchPosition.push({x:this.map.playerPositionOnMap.x, y:this.map.playerPositionOnMap.y+1});
        for(var i = 0;i < 4;i++){
            this.catch[i].start({from:11,to:24,loop:true});
        }
        this.isCatching = true;
        setTimeout(()=>{
            if(!this.map.player1.beCaught){
                this.isCatching = false;
                for(var i = 0;i < 4;i++){
                    this.catch[i].stop();
                }
            }
        },1500);
        var interval = setInterval(()=>{
            if(!this.map.player1.beCaught && this.isCatching)
                this.checkIfCatch();
            if(!this.isCatching || this.map.player1.beCaught)
                clearInterval(interval);
        },5)
    }
    this.checkIfCatch = function(){
        for(var i = 0;i < 4;i++){
            if(this.catchPosition[i].x == this.map.playerPositionOnMap.x && this.catchPosition[i].y == this.map.playerPositionOnMap.y){
                this.map.player1.beCaught = true;
                for(var j = 0;j < 4;j++){
                    if(i == j)
                        continue;
                    this.catch[j].stop();
                }
                setTimeout(()=>{ 
                    this.isCatching = false;
                    this.map.player1.beCaught = false;
                    this.catch[i].stop();
                },3000);
                break;
            }
        }
    }
    this.drop = function(){
        var random = Math.floor(Math.random()*2);
        if(random == 0)
            return new Bat_wing();
        if(random == 1)
            return new Item_monster_meat();
    }
    this.walk = function(moveStep){
        if(this.isWalking === false){
            this.isWalking = true;
            this.walkTarget = {x:this.mapPosition.x + moveStep.x, y:this.mapPosition.y + moveStep.y};
        }
    }
    this.die = function(){
        this.isHurt = true;
        this.monster_boss_die.start({ from: 0, to: 2, loop: false});
        setTimeout(()=>{
            this.isdead = true;
        },500);
    }
    this.getHurt = function(){
        if(!this.isHurt){
            this.isHurt = true;
            this.monster_boss_die.start({ from: 0, to: 2, loop: false});
            this.hurt.start({ from: 17, to: 19, loop: false});
            if(!this.hurtRevolution._start)
                this.revolution();
            setTimeout(()=>{
                this.isHurt = false;
            },200);
        }
    }
    this.revolution = function(){
        var random = Math.floor(Math.random()*5);
        if(random == 1)
            this.hurtRevolution.start({ from: 17, to: 19, loop: false});
        this.map.player1.gethurt(120);
    }
    this.walkAlittle = function(){
        if(this.playerDirection === this.constants.DirectionEnum.DOWN)
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y + this.walkSpeed};
        else if(this.playerDirection === this.constants.DirectionEnum.LEFT)
            this.spritePosition = {x:this.spritePosition.x - this.walkSpeed, y:this.spritePosition.y};
        else if(this.playerDirection === this.constants.DirectionEnum.RIGHT)
            this.spritePosition = {x:this.spritePosition.x + this.walkSpeed, y:this.spritePosition.y};
        else if(this.playerDirection === this.constants.DirectionEnum.UP)
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y - this.walkSpeed};
    }
    this.update = function(){
        if(this.isdead){ return; }
        this.checkIsMonsterOutCanvus();
        if(!this.is_start){ return; }
        if(this.health <= 0)
            this.die();
        this.normal_attack.update();
        this.hurt.update();
        this.monster_boss.update();
        this.monster_boss_die.update();
        this.transport.update();
        this.hurtRevolution.update();
        this.range_attack.update();
        this.remote_attack.update();
        for(var i = 0;i < 4;i++)
            this.catch[i].update();
        this.attackTimer += 1;
        if(this.remote_attack._start){
            this.remoteSprite.x += this.speed*this.remoteDirection.x;
            this.remoteSprite.y += this.speed*this.remoteDirection.y;
            if(this.remoteSprite.x == this.remoteTarget.x*64 && this.remoteSprite.y == this.remoteTarget.y*64){
                this.remotePosition.x = this.remoteTarget.x;
                this.remotePosition.y = this.remoteTarget.y;
                this.remoteTarget.x += this.remoteDirection.x;
                this.remoteTarget.y += this.remoteDirection.x;
            }
            if(this.remotePosition.x == this.map.playerPositionOnMap.x && this.remotePosition.y == this.map.playerPositionOnMap.y){
                this.map.player1.gethurt(150);
                this.remote_attack.stop();
            }
        }
        if(this.trace && this.attackTimer == this.frequency){
            this.transportToPlayer();
        }else{
            if(this.isWalking){
                if(this.walkTarget.x * PIXEL_CONST === this.spritePosition.x && this.walkTarget.y * PIXEL_CONST === this.spritePosition.y){
                    var audio = new Framework.Audio({
                        roar: {
                            mp3: define.musicPath + '魔王叫聲.mp3',
                        }
                    });
                    this.isWalking = false;
                    this.monster_boss.index = this.playerDirection * 3 + 1;
                    this.mapPosition = this.walkTarget;
                }else{
                    this.walkAlittle();
                }
            }else
            {
                if(this.map.player1.hide)
                    this.randomWalk();
                else{
                    this.rushToYou();
                }
            }
        }
        if(this.attackTimer == this.frequency)
            this.operationChoose();
        if(this.isAttack() && this.attackTimer == this.frequency && !this.normal_attack._start){
            this.normal_attack.start({ from: 0, to: 5, loop: false});
        }
        if(this.attackTimer == this.frequency)
            this.attackTimer = 0;
    }
    this.operationChoose = function(){
        var random = Math.floor(Math.random()*10);
        if(!this.isCatching && random == 1)
            this.catchPlayer();
        if(!this.range_attack._start && random == 2)
            this.rangeAttack();
        if(!this.remote_attack._start && random == 3)
            this.remoteAttack();
    }
    this.remoteAttack = function(){
        var audio1 = new Framework.Audio({
            drop: {
                mp3: define.musicPath + '摔東西.mp3'
            }
        });
        audio1.play({name: 'drop', loop: false});
        this.remote_attack.start({from:18,to:25,loop:false});
        this.remotePosition.x = this.mapPosition.x+this.monsterDirection.x;
        this.remotePosition.y = this.mapPosition.y+this.monsterDirection.y;
        this.remoteDirection.x = this.monsterDirection.x;
        this.remoteDirection.y = this.monsterDirection.y;
        this.remoteSprite = {x:this.remotePosition.x*64,y:this.remotePosition.y*64};
        this.remoteTarget.x = this.remotePosition.x + this.remoteDirection.x;
        this.remoteTarget.y = this.remotePosition.y + this.remoteDirection.y;
        var interval = setInterval(()=>{
            if(this.remote_attack._start){
                this.remotePosition.x += this.remoteDirection.x;
                this.remotePosition.y += this.remoteDirection.y;
            }else{
                clearInterval(interval);
            }
        },300)
    }
    this.rangeAttack = function(){
        var audio = new Framework.Audio({
            light: {
                mp3: define.musicPath + '範圍攻擊.mp3'
            }
        });
        audio.play({name: 'light', loop: false});
        this.range_attack.start({from:1,to:24,loop:false});
        this.rangePosition.x = this.map.playerPositionOnMap.x;
        this.rangePosition.y = this.map.playerPositionOnMap.y;
        setTimeout(()=>{
            this.checkIfRangeAttackHit();
        },200);
    }
    this.checkIfRangeAttackHit = function(){
        var interval = setInterval(()=>{
            if(this.range_attack._start){
                for(var i = -1;i < 2;i++){
                    for(var j = -1;j < 2;j++){
                        if(this.map.playerPositionOnMap.x == this.rangePosition.x + i && this.map.playerPositionOnMap.y == this.rangePosition.y + j)
                            this.map.player1.gethurt(120);
                    }
                }
            }else{
                clearInterval(interval);
            }
        },500)
    }
    this.draw = function(ctx){
        if(this.isdead){ return; }
        if(!this.is_start){ return; }
        if(!( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6)){return;}
        var xx = 13*64 + this.spritePosition.x - this.map.playerPositionOnMap.x*64;
        var yy = 7*64 + this.spritePosition.y - this.map.playerPositionOnMap.y*64;
        if(this.isCatching){
            for(var i = 0;i < 4;i++){
                var x1 = 13*64 + this.catchPosition[i].x*64 - this.map.playerPositionOnMap.x*64;
                var y1 = 7*64 + this.catchPosition[i].y*64 - this.map.playerPositionOnMap.y*64;
                if(this.catch[i]._start && this.checkIfDraw({x:this.catchPosition[i].x*64,y:this.catchPosition[i].y*64})){
                    this.catch[i].position = {x:x1,y:y1};
                    this.catch[i].draw(ctx);
                }
            }
        }
        if(this.range_attack._start){
            var x2 = 13*64 + this.rangePosition.x*64 - this.map.playerPositionOnMap.x*64;
            var y2 = 7*64 + this.rangePosition.y*64 - this.map.playerPositionOnMap.y*64;
            if(this.checkIfDraw({x:this.rangePosition.x*64,y:this.rangePosition.y*64})){
                this.range_attack.position = {x:x2,y:y2};
                this.range_attack.draw(ctx);
            }
        }
        if(this.remote_attack._start){
            var x3 = 13*64 + this.remoteSprite.x - this.map.playerPositionOnMap.x*64;
            var y3 = 7*64 + this.remoteSprite.y - this.map.playerPositionOnMap.y*64;
            if(this.checkIfDraw(this.remoteSprite)){
                this.remote_attack.position = {x:x3,y:y3};
                this.remote_attack.draw(ctx);
            }
        }
        if(this.hurtRevolution._start){
            this.hurtRevolution.position = {x:xx,y:yy};
            this.hurtRevolution.draw(ctx);
        }
        if(this.normal_attack._start && this.isAttack())
            this.normal_attack.draw(ctx);
        if(this.transport._start){
            this.transport.position = {x: xx, y: yy};
            this.transport.draw(ctx);
        }else{
            if(!this.isHurt){
                this.monster_boss.position = {x: xx, y: yy};
                this.monster_boss.draw(ctx);
            }else{
                this.monster_boss_die.position = {x: xx, y: yy};
                this.hurt.position = {x: xx, y: yy};
                this.monster_boss_die.draw(ctx);
                this.hurt.draw(ctx);
            }
        }
    }
    this.checkIsMonsterOutCanvus = function(){
        if( Math.abs((this.mapPosition.x-this.map.playerPositionOnMap.x)) <6 &&　Math.abs((this.mapPosition.y-this.map.playerPositionOnMap.y)) <6){
            this.is_start = true;
            this.trace = false;
        }else
            this.trace = true;
    }
    this.checkIfDraw = function(sprite){
        if( Math.abs((sprite.x-this.map.playerPositionOnMap.x*64)) <6*64 &&　Math.abs((sprite.y-this.map.playerPositionOnMap.y*64)) <6*64)
            return true;
        else
            return false;
    }
    this.transportToPlayer = function(){
        var i = (Math.floor(Math.random()*3) + 1)*(Math.random() > 0.5 ? 1 : -1);
        var j = (Math.floor(Math.random()*3) + 1)*(Math.random() > 0.5 ? 1 : -1);
        var audio1 = new Framework.Audio({
            move: {
                mp3: define.musicPath + '順移.mp3'
            }
        });
        audio1.play({name: 'move', loop: false});
        if(this.map.mapArray[5+i][5+j] != 91 &&
            this.map.mapArray[5+i][5+j] != 200 &&
            this.map.itemArray[5+i][5+j].item_num == 0 
        ){
            this.transport.start({ from: 0, to: 4, loop: false });
            this.mapPosition = {x:this.map.playerPositionOnMap.x+j,y:this.map.playerPositionOnMap.y+i};
            this.spritePosition = {x:this.mapPosition.x*64, y:this.mapPosition.y*64};
            this.isWalking = false;
        }
        else
            this.transportToPlayer();
    }
    this.howToWalk = function(restriction, thirdDirection){
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
        }
        else
        {
            directionArray.splice( randum_number, 1 );
            if(this.map.checkMonsterIsWalkAble({x: this.mapPosition.x +directionArray[0].x, y:this.mapPosition.y + directionArray[0].y}))
            {
                return directionArray[0];
            }else{
                if(this.map.checkMonsterIsWalkAble({x:this.mapPosition.x +thirdDirection.x, y:this.mapPosition.y +thirdDirection.y}))
                    return thirdDirection;
                else
                    return {x:0, y:0};
            }
        }
    }
    this.isAttack = function(){
        if(this.monsterDirection.x + this.mapPosition.x == this.map.playerPositionOnMap.x && this.monsterDirection.y + this.mapPosition.y == this.map.playerPositionOnMap.y && !this.isHurt)
            return true;
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
            this.walk(walkStep);
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
        this.monster_boss.start({ from: this.playerDirection * 3, to: this.playerDirection * 3 + 2, loop: true});
    }
    this.randomWalk = function()
    {
        var randNum = Framework.Game._currentLevel.cycleCount % 553;
        var walkStep = {x:0,y:0};
        if(randNum % 117 == 0)
            walkStep.x = 1
        else if(randNum % 79 == 0)
            walkStep.x = -1
        else if(randNum % 133 == 0)
            walkStep.y = 1
        else if(randNum % 157 == 0)
            walkStep.y = -1
        else
            return;
        if(this.walkStep.x != walkStep.x || this.walkStep.y != walkStep.y)
            this.changeWalkDirection(walkStep);
        if(this.map.checkMonsterIsWalkAble( {x: this.mapPosition.x + walkStep.x, y:this.mapPosition.y + walkStep.y} ))
            this.walk(walkStep);
    }
};
Object.defineProperty(Monster_boss.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.spritePosition = {x:this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
Object.defineProperty(Monster_boss.prototype, 'isDead', {
    get: function() {
        return this.isdead;
    }
}); 