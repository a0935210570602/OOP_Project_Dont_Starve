var MyMenu = Framework.exClass(Framework.GameMainMenu , {
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
        this.music_start = false;
        this.menu = new Framework.Sprite(define.imagePath + 'game_loading.png');
        this.botton_start = new Framework.Sprite(define.welcomimgPath + 'start_game_untouch.png');
        this.botton_tutorial = new Framework.Sprite(define.welcomimgPath + 'tutorial_game_untouch.png');
        this.botton_quit = new Framework.Sprite(define.welcomimgPath + 'quit_game_untouch.png');
        this.botton_team = new Framework.Sprite(define.welcomimgPath + 'team_game_untouch.png');
        this.tutorial_game_touch = new Framework.Sprite(define.welcomimgPath + 'tutorial_game_touch.png');
        this.start_game_touch = new Framework.Sprite(define.welcomimgPath + 'start_game_touch.png');
        this.team_game_touch = new Framework.Sprite(define.welcomimgPath + 'team_game_touch.png');
        this.quit_game_touch = new Framework.Sprite(define.welcomimgPath + 'quit_game_touch.png');
    },
    initialize: function() {
        this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.menu.scale = 0.9;
        this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: 0
        };
        this.botton_start.position = {
            x: 1050+196,
            y: 350
        };
        this.botton_start.scale = 1;
        this.botton_tutorial.position = {
            x: 1050+196,
            y: 460
        };
        this.botton_tutorial.scale = 1;
        this.botton_quit.position = {
            x: 1050+196,
            y: 570
        };
        this.botton_quit.scale = 1;
        this.botton_team.position = {
            x: 1050+196,
            y: 680
        };
        this.botton_team.scale = 1;
        this.audio = new Framework.Audio({
            start_game: {
                mp3: define.musicPath + '遊戲開場音樂.mp3',
            }, keyup:{
                mp3: define.musicPath + '按按鍵.mp3',
            }, song2:{
                mp3: define.musicPath + '刀劍神域op1《crossing field》鋼琴曲.mp3',
            }
        });
        this.audio.play({name: 'start_game', loop: true});
    },
    draw: function(parentCtx) { 
        this.menu.draw(parentCtx);
        this.botton_start.draw(parentCtx);
        this.botton_tutorial.draw(parentCtx);
        this.botton_quit.draw(parentCtx);
        this.botton_team.draw(parentCtx);
    },
    click:function(e){      
        this.audio.play({name: 'keyup', loop: false});
        if(e.x<1300+196 && e.x>1058+196 && e.y<465 && e.y>365){
            this.audio.stop('start_game');
            Framework.Game.goToLevel('drama0');  
        }
        if(e.x<1300+196 && e.x>1058+196 && e.y<577 && e.y>480){
            this.audio.stop('start_game');
            Framework.Game.goToLevel('menu_tutorial');  
        }
        if(e.x<1300+196 && e.x>1058+196 && e.y<686 && e.y>588){
            this.audio.stop('start_game');
            window.close();   
        }
        if(e.x<1300+196 && e.x>1058+196 && e.y<798 && e.y>699){
            this.audio.stop('start_game');
            Framework.Game.goToLevel('menu_gameteam');  
        }
    },
    mousemove: function(e) {        
        if(e.x >= 1060+196 && e.x<=1296+196 && e.y<=466 && e.y>=369)
            this.botton_start = new Framework.Sprite(define.welcomimgPath + 'start_game_touch.png');
        else
            this.botton_start = new Framework.Sprite(define.welcomimgPath + 'start_game_untouch.png');
        if(e.x >= 1060+196 && e.x<=1296+196 && e.y<=687 && e.y>=590)
            this.botton_quit = new Framework.Sprite(define.welcomimgPath + 'quit_game_touch.png');
        else
            this.botton_quit = new Framework.Sprite(define.welcomimgPath + 'quit_game_untouch.png');
        if(e.x >= 1060+196 && e.x<=1296+196 && e.y<=799 && e.y>=700)
            this.botton_team = new Framework.Sprite(define.welcomimgPath + 'team_game_touch.png');
        else
            this.botton_team = new Framework.Sprite(define.welcomimgPath + 'team_game_untouch.png');
        if(e.x >= 1060+196 && e.x<=1296+196 && e.y<=578 && e.y>=479)
            this.botton_tutorial = new Framework.Sprite(define.welcomimgPath + 'tutorial_game_touch.png');
        else
            this.botton_tutorial = new Framework.Sprite(define.welcomimgPath + 'tutorial_game_untouch.png');
        this.botton_start.position = {
            x: 1050+196,
            y: 350
        };
        this.botton_tutorial.position = {
            x: 1050+196,
            y: 460
        };
        this.botton_team.position = {
            x: 1050+196,
            y: 680
        };
        this.botton_quit.position = {
            x: 1050+196,
            y: 570
        };
        this.draw(Framework.Game._context);
    }
});