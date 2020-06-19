var MyMenu_gameteam = Framework.exClass(Framework.GameMainMenu , {
    //初始化loadingProgress需要用到的圖片
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};
    },
    //在initialize時會觸發的事件
    loadingProgress: function(ctx, requestInfo) {
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },
    load: function() {
        this.go_back_menu = new Framework.Sprite(define.welcomimgPath + 'go_back_menu.png');
        this.audio = new Framework.Audio({
            start_game: {
                mp3: define.musicPath + '遊戲開場音樂.mp3',
            }, keyup:{
                mp3: define.musicPath + '按按鍵.mp3',
            }, song2:{
                mp3: define.musicPath + '刀劍神域op1《crossing field》鋼琴曲.mp3',
            }
        });
        this.audio.play({name: 'song2', loop: true});
    },
    initialize: function() {
        this.go_back_menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.go_back_menu.scale = 4;
        this.rootScene.attach(this.go_back_menu);
        this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: 0
        };
    },
    update:function(){     
        this.rootScene.update(); 
    },
    draw: function(parentCtx) { 
        parentCtx.textAlign = 'center';
        parentCtx.fillStyle = 'black';
        parentCtx.fillText("遊戲專案團隊", 750, 100);
        parentCtx.fillText("106820003 電資三 潘建蒼", 750, 200);
        parentCtx.fillText("106820046 電資三 凃昱安", 750, 300);
        parentCtx.fillText("指導老師：陳偉凱", 750, 700);
        parentCtx.fillText("PS.偉凱好帥", 750, 800);
        this.rootScene.draw(parentCtx); 
        this.go_back_menu.draw(parentCtx);
    },
    click:function(e){      
        this.audio.play({name: 'keyup', loop: false});
        if(e.x<915 && e.x>682 && e.y<573 && e.y>285){
            this.audio.stop('song2');
            Framework.Game.goToLevel('menu');                   
        }
    }
});