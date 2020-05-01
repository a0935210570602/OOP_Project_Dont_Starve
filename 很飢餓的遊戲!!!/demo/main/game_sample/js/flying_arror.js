var Flying_arror = function(Direction,Position,Monster) {
    this.flying_arror = new Framework.Sprite(define.materialPath + 'item_snow_ball.png'); 
    this.flying_arror.scale = 2;
    this.constants = new Constants();
    this.mapPosition = Position;
    this.flyTarget = Position;
    this.spritePosition = {x:Position.x * 64,y:Position.y*64};
    this.limitPosition = {x:Position.x + Direction.x*5,y:Position.y + Direction.y*5};
    this.direction = Direction;
    this.attackEnd = false;
    this.is_start = false;

    this.fly = function(){

        for(var i = 0;i < Monster.length;i++){
            if(Monster[i].is_start){
                if(this.mapPosition.x == Monster[i].mapPosition.x && this.mapPosition.y == Monster[i].mapPosition.y){
                    Monster[i].health -= 10;
                    this.attackEnd = true;
                    break;
                }
            }
        }
        if(this.mapPosition.x == this.limitPosition.x && this.mapPosition.y == this.limitPosition.y)
            this.attackEnd = true;
    }

    var flySpeed = 32;
    this.flyAlittle = function(){
        console.log("flyalittle");
        console.log(this.direction);

        if(this.direction.x == this.constants.Direction.DOWN.x && this.direction.y == this.constants.Direction.DOWN.y){
            console.log("flyalittleDown");
            console.log(this.spritePosition);
            

            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y + flySpeed};
        }
        else if(this.direction.x == this.constants.Direction.LEFT.x && this.direction.y == this.constants.Direction.LEFT.y){
            this.spritePosition = {x:this.spritePosition.x - flySpeed, y:this.spritePosition.y};
        }
        else if(this.direction.x == this.constants.Direction.RIGHT.x && this.direction.y == this.constants.Direction.RIGHT.y){
            this.spritePosition = {x:this.spritePosition.x + flySpeed, y:this.spritePosition.y};
        }
        else{
            this.spritePosition = {x:this.spritePosition.x, y:this.spritePosition.y - flySpeed};
        }
    }

    this.update = function(){
        if(this.flyTarget.x * 64 === this.spritePosition.x && this.flyTarget.y * 64 === this.spritePosition.y){
            this.mapPosition = this.flyTarget;
            this.flyTarget = {x:this.flyTarget.x+this.direction.x, y:this.flyTarget.y+this.direction.y};
            this.flyAlittle();
            this.fly()
        }else{
            this.flyAlittle();
            this.fly();
        }
    }

    this.check = function(){
        if( Math.abs((this.mapPosition.x-Position.x)) <6 &&　Math.abs((this.mapPosition.y-Position.y)) <6){
            this.is_start = true;
        }else{
            this.is_start = false;
        }
    }

    this.draw = function(ctx){
        this.check();
        if(this.is_start){
            var xx = 13*64 + this.spritePosition.x - Position.x*64;
            var yy = 7*64 + this.spritePosition.y - Position.y*64;
            this.flying_arror.position = {x: xx, y: yy};
            this.flying_arror.draw(ctx);
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
