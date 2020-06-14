var Level2_change = Framework.Class(Framework.Level , {
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
            kick: {
                mp3: define.musicPath + 'kick2.mp3',
                //ogg: define.musicPath + 'kick2.ogg',
                //wav: define.musicPath + 'kick2.wav'
            }, song1:{
                mp3: define.musicPath + '遊戲王經典配樂.mp3.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, song2:{
                mp3: define.musicPath + '刀劍神域op1《crossing field》鋼琴曲.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, song3:{
                mp3: define.musicPath + 'night.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }
        });
        //播放時, 需要給name, 其餘參數可參考W3C
        // this.audio.play({name: 'song3', loop: true});
        if(!Framework.Game.playerInitial){
            this.map = new World_map();
        }
        this.map.load();
        this.map.addMonsterRandom(10);
    },

    initialize: function() {
        if(!Framework.Game.playerInitial){
            this.map.init();
            //for demo
            this.map.setPlayerPosition({x:13,y:7});
        }
    },

    update: function() {     
        this.map.update();
    },

    draw:function(parentCtx){
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
        this.map.draw(parentCtx);
    },

    keydown:function(e, list){
        
        Framework.DebugInfo.Log.warning(e.key);

        this.map.keydown(e, list);
        if(e.key === 'F11') {
            if(!this.isFullScreen) {
                Framework.Game.fullScreen();
                this.isFullScreen = true;
            } else {
                Framework.Game.exitFullScreen();
                this.isFullScreen = false;
            }
        }
    },

    keyup:function(e, list){
        this.map.keyup(e, list);
    },

    click: function (e) {  
        this.map.click(e);
    },

    mousemove: function(e) {        
        this.map.mousemove(e);
    },
});