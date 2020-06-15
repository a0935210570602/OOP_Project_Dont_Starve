var Drama0 = Framework.Class(Framework.Level , {
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)                  
    },
    loadingProgress: function(ctx, requestInfo) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },
    load: function() {

        this.audio = new Framework.Audio({
            song1: {
                // mp3: define.musicPath + 'kick2.mp3',
                ogg: define.musicPath + '開場.mp3',
                //wav: define.musicPath + 'kick2.wav'
            }
        });
        //播放時, 需要給name, 其餘參數可參考W3C
        // this.audio.play({name: 'song1', loop: true});

        this.npc_event = new Npc_event();
        this.npc_event.trigger("主角", "drama0");
        this.npc_event.talking();
    },

    initialize: function() {
        
    },

    update: function() {     
    },

    draw:function(parentCtx){
        this.npc_event.draw(parentCtx);
    },

    keydown:function(e, list){
        
        // Framework.DebugInfo.Log.warning(e.key);
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
            if( !this.npc_event.taking_is_start)
                Framework.Game.goToLevel('level1');  
            
            this.draw(Framework.Game._context);
        }else if(e.key === 'Z'){
            this.npc_event.amount -= 2;
            if( this.npc_event.amount <= 0){
                this.npc_event.amount = -1;
            }
            this.npc_event.talking();
            this.draw(Framework.Game._context);
        }
    },

    keyup:function(e){
    },

    click: function (e) {  
        Framework.Game.goToLevel('level1');  
    },

    mousemove: function(e) {        
    },
});