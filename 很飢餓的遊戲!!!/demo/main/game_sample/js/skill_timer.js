var Skill_timer = function() {
    this.magic_time_counter = new Framework.Sprite(define.skillAnimationPath + 'magic_time_counter.png'); 
    this.magic_time_counter.scale = 2;
    this.magic_time_counter.position = {x: 13*64, y: 7*64-32};
    this.maxMagicEnergy = 175;
    this.currentMagicEnergy = 0;
    this.buttonPress = false;
    this.isEnergyFull = false;
    this.startAccumulateEnergy = function(){
        this.buttonPress = true;
        var interval = setInterval(()=>{
            if(this.buttonPress){
                if(this.currentMagicEnergy < 175)
                    this.currentMagicEnergy += 2.5;
                if(this.currentMagicEnergy >= 175)
                    this.isEnergyFull = true;
            }
            else
                clearInterval(interval);
        },50);
    }
    this.stopAccumulateEnergy = function(){
        this.buttonPress = false;
        this.isEnergyFull = false;
        this.currentMagicEnergy = 0;
    }
    this.clear = function(){
        this.buttonPress = false;
        this.currentMagicEnergy = false;
        this.isEnergyFull = false;
    }
    this.draw = function(ctx){
        ctx.beginPath();
        ctx.rect(746, 400, this.currentMagicEnergy, 17);
        ctx.fillStyle = "orange";
        ctx.fill();
        this.magic_time_counter.draw(ctx);
    }
};