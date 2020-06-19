var Drama0 = Framework.Class(Framework.Level , {
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};
    },
    loadingProgress: function(ctx, requestInfo) {
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },
    load: function() {
        this.audio = new Framework.Audio({
            song1: {
                ogg: define.musicPath + '開場.mp3',
            }
        });
        this.audio.play({name: 'song1', loop: true});
        this.playerPositionOnMap = {x:0,y:0};
        this.npc_event = new Npc_event(this);
        this.npc_event.trigger("主角", "drama0");
        this.npc_event.talking();
    },
    draw:function(parentCtx){
        this.npc_event.draw(parentCtx);
    },
    keydown:function(e, list){
        if(e.key === 'F11') {
            if(!this.isFullScreen) {
                Framework.Game.fullScreen();
                this.isFullScreen = true;
            } else {
                Framework.Game.exitFullScreen();
                this.isFullScreen = false;
            }
        }else if(e.key === 'Space'){
            this.npc_event.talking();
            if( !this.npc_event.taking_is_start){
                this.audio.stopAll();
                Framework.Game.goToLevel('level1');  
            }
            this.draw(Framework.Game._context);
        }else if(e.key === 'Z'){
            this.npc_event.amount -= 2;
            if( this.npc_event.amount <= -1){
                this.npc_event.amount = -1;
            }
            this.npc_event.talking();
            this.draw(Framework.Game._context);
        }
    },
    click: function (e) {  
    },
});