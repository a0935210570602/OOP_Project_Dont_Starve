var GameOver = Framework.Class(Framework.Level , {
    //初始化loadingProgress需要用到的圖片
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};
    },
    load: function() {
        this.menu = new Framework.Sprite(define.imagePath + 'GameOver.png');
        this.url = define.materialPath + 'gate.png';
        this.open = new Framework.AnimationSprite({url:this.url, col:3 , row:4 , loop:false , speed:12}); 
        this.handle_game_over = new Handle_game_over();
        this.background = new Framework.Sprite(define.materialPath + 'DecorativeTile.png');
        this.frame = new Framework.Sprite(define.materialPath + 'Floral2.png');
        this.audio = new Framework.Audio({
            soundeffects: {
                mp3: define.musicPath + 'soundeffects.mp3',
            }
        });
    },
    initialize: function(){
        this.counter = 0;
        this.gameOverCount = 50;
        this.handle_game_over.init();
    },
    update:function(){     
        this.counter++;
        this.handle_game_over.update();
    },
    click: function(e){
        this.handle_game_over.click(e); 
    },
    draw: function(parentCtx) { 
        this.handle_game_over.draw(parentCtx);
    },
});