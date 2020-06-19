var Fishing = function() {
    this.url = define.materialPath + 'water.PNG';
    this.url2 = define.materialPath + 'Balloon.PNG';
    this.fishing = new Framework.AnimationSprite({url:this.url, col:3 , row:4 , loop:true , speed:12});
    this.fishing.scale = 1;
    this.remindFishCatch = new Framework.AnimationSprite({url:this.url2, col:8 , row:15 , loop:false , speed:12});
    this.remindFishCatch.position = {x: (13)*64, y: (6)*64};
    this.remindFishCatch.scale = 0.8;
    this.is_start = false;
    this.fishBeCaught = false;
    this.update = function(){
        this.fishing.update();
        this.remindFishCatch.update();
    }
    this.start = function(playerWalkDirection){  
        this.is_start = true;
        this.fishing.position = {x: (13+playerWalkDirection.x)*64 -30, y: (7+playerWalkDirection.y)*64 -25};
        this.fishing.start({ from: 0, to: 6, loop: true});
        this.waitForFishCatch();
    }
    this.waitForFishCatch = function(){
        var time = Math.floor(Math.random()*8) + 3;
        setTimeout(()=>{
            if(this.is_start)
                this.fishCatch();
        },time*1000);
    }
    this.fishCatch = function(){
        this.fishBeCaught = true;
        this.remindFishCatch.start({ from: 0, to: 7, loop: true});
        setTimeout(()=>{
            this.fishBeCaught = false;
            this.remindFishCatch.stop();
            if(this.is_start)
                this.waitForFishCatch();
        },1000);
    }
    this.stop = function(){
        this.fishing.stop();
        this.remindFishCatch.stop();
        this.is_start = false;
    }
    this.draw = function(ctx){
        this.fishing.draw(ctx);
        if(this.fishBeCaught)
            this.remindFishCatch.draw(ctx);
    }
};