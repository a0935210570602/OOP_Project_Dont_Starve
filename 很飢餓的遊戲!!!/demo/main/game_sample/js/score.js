var Score = function() {
    this.score = 500;
    this.scoreToDraw = 0;
    this.position = {
        x: Framework.Game.getCanvasWidth() / 2,
        y: Framework.Game.getCanvasHeight() / 2
    };;
    this.background = new Framework.Sprite(define.materialPath + 'DecorativeTile.png');
    this.background.scale = 2;
    this.background.position = this.position;
    this.frame = new Framework.Sprite(define.materialPath + 'Floral2.png');
    this.frame.scale = 2;
    this.frame.position = this.position;
    this.kill = 0;
    this.synthesis = 0;
    this.state = 0;
    this.scoreAddBySynthesis = function(){
        this.score += 2;
        this.synthesis += 1;
    }
    this.scoreAddByKillMonster = function(){
        this.score += 4;
        this.kill += 1;
    }
    this.drawScore = function(){
        var interval = setInterval(()=>{
            if(this.scoreToDraw <= this.score){
                this.draw(Framework.Game._context);
                this.scoreToDraw += 2;
                if(this.scoreToDraw > this.score)
                    clearInterval(interval);
            }
        },10);
        var stateInterval = setInterval(()=>{
            this.state += 1;
            if(this.state == 3)
                clearInterval(stateInterval);
        },350);
    }
    this.draw = function(ctx){
        this.background.draw(ctx);
        this.frame.draw(ctx);
        ctx.font = '90pt Algerian';
        ctx.fillStyle = 'yellow';
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2.5;
        if(this.state == 0){
            ctx.fillText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y);
            ctx.strokeText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y);
        }else if(this.state == 1){
            ctx.fillText("Kill: " + this.kill, this.position.x, this.position.y+64);
            ctx.strokeText("Kill: " + this.kill, this.position.x, this.position.y+64);
            ctx.fillText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y-64);
            ctx.strokeText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y-64);
        }else if(this.state == 2){
            ctx.fillText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y-128);
            ctx.strokeText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y-128);
            ctx.fillText("Kill: " + this.kill, this.position.x, this.position.y);
            ctx.strokeText("Kill: " + this.kill, this.position.x, this.position.y);
            ctx.fillText("Synthesis: " + this.synthesis, this.position.x, this.position.y+128);
            ctx.strokeText("Synthesis: " + this.synthesis, this.position.x, this.position.y+128);
        }else{
            ctx.fillText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y-196);
            ctx.strokeText("Day: " + Framework.Game._levels[2].level.map.clock.day, this.position.x, this.position.y-196);
            ctx.fillText("Kill: " + this.kill, this.position.x, this.position.y-64);
            ctx.strokeText("Kill: " + this.kill, this.position.x, this.position.y-64);
            ctx.fillText("Synthesis: " + this.synthesis, this.position.x, this.position.y+64);
            ctx.strokeText("Synthesis: " + this.synthesis, this.position.x, this.position.y+64);
            ctx.fillText("Score: " + this.scoreToDraw, this.position.x, this.position.y+196);
            ctx.strokeText("Score: " + this.scoreToDraw, this.position.x, this.position.y+196);
        }    
    }
};