var Flying_arror = function(Direction,Position,Monster,Attack) {
    this.flying_arror_left = new Framework.Sprite(define.materialPath + 'arror_left.png'); 
    this.flying_arror_left.scale = 2;
    this.flying_arror_right = new Framework.Sprite(define.materialPath + 'arror_right.png'); 
    this.flying_arror_right.scale = 2;
    this.flying_arror_up = new Framework.Sprite(define.materialPath + 'arror_up.png'); 
    this.flying_arror_up.scale = 2;
    this.flying_arror_down = new Framework.Sprite(define.materialPath + 'arror_down.png'); 
    this.flying_arror_down.scale = 2;
    this.url = define.skillAnimationPath + 'Recovery4.png';
    this.flying_arror = new Framework.AnimationSprite({url:this.url, col:5 , row:4 , loop:true , speed:16}); 
    this.flying_arror.scale = 0.5;
    this.flying_arror.start({ from: 0, to: 8, loop: false});
    this.directionNum;
    this.constants = new Constants();
    this.mapPosition = Position;
    this.flyTarget = Position;
    this.spritePosition = {x:Position.x * 64,y:Position.y*64};
    this.limitPosition = {x:Position.x + Direction.x*5,y:Position.y + Direction.y*5};
    this.direction = Direction;
    this.attackEnd = false;
    this.is_start = false;
    this.init = function(){
        if(this.direction.x == this.constants.Direction.DOWN.x && this.direction.y == this.constants.Direction.DOWN.y)
            this.directionNum = 0;
        else if(this.direction.x == this.constants.Direction.LEFT.x && this.direction.y == this.constants.Direction.LEFT.y)
            this.directionNum = 1;
        else if(this.direction.x == this.constants.Direction.RIGHT.x && this.direction.y == this.constants.Direction.RIGHT.y)
            this.directionNum = 2;
        else
            this.directionNum = 3;
    }
    this.fly = function(){
        for(var i = 0;i < Monster.length;i++){
            if(Monster[i].is_start){
                if(this.mapPosition.x == Monster[i].mapPosition.x && this.mapPosition.y == Monster[i].mapPosition.y){
                    Monster[i].health -= Attack;
                    Monster[i].getHurt();
                    this.attackEnd = true;
                    break;
                }
            }
        }
        if(this.mapPosition.x == this.limitPosition.x && this.mapPosition.y == this.limitPosition.y)
            this.attackEnd = true;
    }
    var flySpeed = 16;
    this.flyAlittle = function(){
        if(this.directionNum == 0)
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y + flySpeed};
        else if(this.directionNum == 1)
            this.spritePosition = {x:this.spritePosition.x - flySpeed, y:this.spritePosition.y};
        else if(this.directionNum == 2)
            this.spritePosition = {x:this.spritePosition.x + flySpeed, y:this.spritePosition.y};
        else
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y - flySpeed};
    }
    this.update = function(){
        this.flying_arror.update();
        if(this.flyTarget.x * 64 === this.spritePosition.x && this.flyTarget.y * 64 === this.spritePosition.y){
            this.mapPosition = this.flyTarget;
            this.flyTarget = {x:this.flyTarget.x+this.direction.x, y:this.flyTarget.y+this.direction.y};
            this.flyAlittle();
            this.fly();
        }else{
            this.flyAlittle();
            this.fly();
        }
    }
    this.check = function(){
        if( Math.abs((this.spritePosition.x - Position.x*64)) <6*64 &&　Math.abs((this.spritePosition.y - Position.y*64)) <64*6)
            this.is_start = true;
        else
            this.is_start = false;
    }
    this.draw = function(ctx){
        this.is_start = false;
        this.check();
        if(this.is_start){
            var xx = 13*64 + this.spritePosition.x - Position.x*64;
            var yy = 7*64 + this.spritePosition.y - Position.y*64;
            this.flying_arror.position = {x: xx, y: yy};
            this.flying_arror.draw(ctx);
            if(this.directionNum == 0){
                this.flying_arror_down.position = {x: xx, y: yy};
                this.flying_arror_down.draw(ctx);
            }
            else if(this.directionNum == 1){
                this.flying_arror_left.position = {x: xx, y: yy};
                this.flying_arror_left.draw(ctx);
            }
            else if(this.directionNum == 2){
                this.flying_arror_right.position = {x: xx, y: yy};
                this.flying_arror_right.draw(ctx);
            }
            else{
                this.flying_arror_up.position = {x: xx, y: yy};
                this.flying_arror_up.draw(ctx);
            }
        }
    }
};
Object.defineProperty(Flying_arror.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.flying_arror.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 