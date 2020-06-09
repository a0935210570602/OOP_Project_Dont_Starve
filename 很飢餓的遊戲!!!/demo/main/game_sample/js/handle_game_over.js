var Handle_game_over = function(){
    this.position = {
        x: Framework.Game.getCanvasWidth() / 2,
        y: Framework.Game.getCanvasHeight() / 2
    };
    this.gameClear = new Framework.Sprite(define.materialPath + 'CrossedSwords.png');
    this.gameClear.scale = 2;
    this.gameClear.position = this.position;
    this.menu = new Framework.Sprite(define.imagePath + 'GameOver.png');
    this.menu.scale = 2;
    this.menu.position = this.position;
    this.url = define.materialPath + 'gate.png';
    this.open = new Framework.AnimationSprite({url:this.url, col:3 , row:4 , loop:false , speed:12}); 
    this.open.scale = 11;
    this.open.position = this.position;
    this.showScore = false;

    this.init = function(){
        this.open.start({ from: 0, to: 11, loop: false});
    }

    this.update = function(){
        this.open.update();
    }

    this.click = function(e){
        if(!this.showScore && !this.open._start){
            this.showScore = true;
            this.draw(Framework.Game._context);
        }
        if(Framework.Game._levels[1].level.map.score.scoreToDraw >= Framework.Game._levels[1].level.map.score.score)
            Framework.Game.goToLevel('menu'); 
    }

    this.draw = function(ctx){
        if(this.open._start)
            this.open.draw(ctx);
        else{
            if(Framework.Game._levels[1].level.map.player1.character_descruption_point[0] <= 0){
                this.menu.draw(ctx);
            }else{
                this.gameClear.draw(ctx);
                ctx.font = '90pt Algerian';
                ctx.globalAlpha=1;
                ctx.fillStyle = 'aqua';
                ctx.textBaseline = 'top';
                ctx.textAlign = 'center';
                ctx.strokeStyle = 'orange';
                ctx.lineWidth = 2.5;
                ctx.fillText("Game Clear !!!", this.position.x, this.position.y);
                ctx.strokeText("Game Clear !!!", this.position.x, this.position.y);
            }
        }

        if(this.showScore){
            Framework.Game._levels[1].level.map.score.drawScore();
        }
    }
}