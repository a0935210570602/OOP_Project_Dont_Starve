var Score = function() {
    this.score = 100;
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
 
    this.scoreAddBySynthesis = function(){
        this.score += 1;
    }

    this.scoreAddByKillMonster = function(){
        this.score += 5;
    }
    
    this.drawScore = function(){
        var interval = setInterval(()=>{
            if(this.scoreToDraw <= this.score){
                this.draw(Framework.Game._context);
                this.scoreToDraw++;
                if(this.scoreToDraw > this.score)
                    clearInterval(interval);
            }
        },10)
    }

    this.draw = function(ctx){
        this.background.draw(ctx);
        this.frame.draw(ctx);
        
        ctx.font = '90pt Algerian';
        ctx.globalAlpha=1;
        ctx.fillStyle = 'yellow';
        ctx.textBaseline = 'top';
        ctx.textAlign = 'center';
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2.5;

        ctx.fillText("Score: " + this.scoreToDraw, this.position.x, this.position.y);
        ctx.strokeText("Score: " + this.scoreToDraw, this.position.x, this.position.y);

    }
};

