//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var Final_Monster = function(file, map, options) {
    this.url = file;      
    //AnimationSprite當圖片是一整張圖片(連續圖), 而非Array時一定要給col, row三個(url是一定要的)   
    this.sprite = new Framework.AnimationSprite({url:this.url, col:4 , row:4 , loop:true , speed:12}); 
    this.sprite.scale = 2;
    this.sprite.index = 1;
    var PIXEL_CONST = 64;
    //this.sprite.start({ from: 0, to: 2, loop: true});
    this.mapPosition = {x:0, y:0};
    this.spritePosition = {x:0, y:0};
    this.constants = new Constants();
    this.walkTarget = {x:0, y:0};

    this.canWalking = true;

    this.isWalking = false;

    this.playerDirection = this.constants.DirectionEnum.DOWN;

    this.walk = function(moveStep){
        if(this.isWalking === false){
            if(moveStep.x > 0){
                this.playerDirection = this.constants.DirectionEnum.RIGHT;
            }else if(moveStep.x <0){
                this.playerDirection = this.constants.DirectionEnum.LEFT;
            }

            if(moveStep.y > 0){
                this.playerDirection = this.constants.DirectionEnum.DOWN;
            }else if(moveStep.y < 0){
                this.playerDirection = this.constants.DirectionEnum.UP;
            }
            this.isWalking = true;
            this.walkTarget = {x:this.mapPosition.x + moveStep.x, y:this.mapPosition.y + moveStep.y};
            this.sprite.start({ from: this.playerDirection * 4, to: this.playerDirection * 4 + 3, loop: true});
        }
    }

    this.die = function(){
        this.isdead = true;
    }

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
        this.sprite.update();
        // console.log("this.walkTarget.x");
        // console.log(this.walkTarget.x);
        // console.log("this.walkTarget.y");
        // console.log(this.walkTarget.y);
        // console.log("this.isWalking");
        // console.log(this.isWalking);
        if(this.isWalking){
            if(this.walkTarget.x * PIXEL_CONST === this.spritePosition.x && this.walkTarget.y * PIXEL_CONST === this.spritePosition.y){
                this.isWalking = false;
                this.sprite.stop();
                this.sprite.index = this.playerDirection * 4 + 1;
                this.mapPosition = this.walkTarget;
                //callback
                for(var i=0; i<this.StepMovedCallBack.length; i++){
                    this.StepMovedCallBack[i](this);
                }
            }else{
                this.walkAlittle();
            }
        }else
        {
            if(this.canWalking)
            {
                this.randomWalk();
            }
        }
    }


    this.draw = function(ctx){
        console.log("this.isWalking");
        console.log(this.isWalking);
        if(this.isdead){ return; }
        this.sprite.position = {x: this.spritePosition.x, y: this.spritePosition.y};
        this.sprite.draw(ctx);
    }
    var walkDir = 0;
    this.randomWalk = function()
    {
        //var randNum = Math.floor(Math.random() * 100);
        var randNum = Framework.Game._currentLevel.cycleCount % 553;
        walkDir++;
        var walkStep = {x:0,y:0}
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

        if(this.map.checkIsWalkAble(this.mapPosition.x + walkStep.x,this.mapPosition.y + walkStep.y))
        {
            this.walk(walkStep);
        }else{
            console.log("false");
        }
    }

};

Object.defineProperty(Monster.prototype, 'position', {
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