var MyMenu = Framework.exClass(Framework.GameMainMenu , {
            //初始化loadingProgress需要用到的圖片
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)                  
    },

    //在initialize時會觸發的事件
    loadingProgress: function(ctx, requestInfo) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },

    load: function() {
        this.menu = new Framework.Sprite(define.imagePath + 'Title.png');
        this.botton_start = new Framework.Sprite(define.welcomimgPath + 'start_game_untouch.png');
        this.botton_tutorial = new Framework.Sprite(define.welcomimgPath + 'tutorial_game_untouch.png');
        this.botton_quit = new Framework.Sprite(define.welcomimgPath + 'quit_game_untouch.png');
        this.botton_team = new Framework.Sprite(define.welcomimgPath + 'team_game_untouch.png');
        
        // this.audio = new Framework.Audio({
        //     kick: {
        //         mp3: define.musicPath + 'kick2.mp3',
        //         //ogg: define.musicPath + 'kick2.ogg',
        //         //wav: define.musicPath + 'kick2.wav'
        //     }, song1:{
        //         mp3: define.musicPath + '遊戲王經典配樂.mp3',
        //         //ogg: define.musicPath + 'Hot_Heat.ogg',
        //         //wav: define.musicPath + 'Hot_Heat.wav'
        //     }, song2:{
        //         mp3: define.musicPath + '刀劍神域op1《crossing field》鋼琴曲.mp3',
        //         //ogg: define.musicPath + 'Hot_Heat.ogg',
        //         //wav: define.musicPath + 'Hot_Heat.wav'
        //     }
        // });
        //播放時, 需要給name, 其餘參數可參考W3C

    },

    initialize: function() {


        //為了讓之後的位置較好操控, new出一個位於中心點且可以黏貼任何東西的容器
        //注意, Position都是用中心點
        this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.menu.scale = 2;
        // this.rootScene.attach(this.menu);

        this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            // y: Framework.Game.getCanvasHeight() / 2
            y: 0
        };
        this.botton_start.position = {
            x: 1050,
            y: 350
        };
        this.botton_start.scale = 1;
        this.rootScene.attach(this.botton_start);

        this.botton_tutorial.position = {
            x: 1050,
            y: 460
        };
        this.botton_tutorial.scale = 1;
        this.rootScene.attach(this.botton_tutorial);
        
        this.botton_quit.position = {
            x: 1050,
            y: 570
        };
        this.botton_quit.scale = 1;
        this.rootScene.attach(this.botton_quit);
        
        this.botton_team.position = {
            x: 1050,
            y: 680
        };
        this.botton_team.scale = 1;
        this.rootScene.attach(this.botton_team);
        

        // this.botton_rootScene.attach(this.botton_start);
    },

    update:function(){     
        //this.rootScene.update();一定要在第一行
        this.rootScene.update(); 
        // this.botton_rootScene.update(); 
        
        //目前的Framework, 當任何一個GameObject不做attach時, 則必須要自行update
    },

    draw: function(parentCtx) { 
        //this.rootScene.draw();一定要在第一行
        this.rootScene.draw(parentCtx);
        this.menu.draw(parentCtx);
        this.botton_start.draw(parentCtx);
        this.botton_tutorial.draw(parentCtx);
        this.botton_quit.draw(parentCtx);
        this.botton_team.draw(parentCtx);
        
        // this.botton_rootScene.draw(parentCtx);
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
    },

    mousedown: function(e) {
        //console.log為Browser提供的function, 可以在debugger的console內看到被印出的訊息                    
        // Framework.Game.goToNextLevel();
    },

    click:function(e){      

        if(e.x<1300 && e.x>1058 && e.y<465 && e.y>365){
            Framework.Game.goToLevel('level1');  
        }
        if(e.x<1300 && e.x>1058 && e.y<577 && e.y>480)
            Framework.Game.goToLevel('menu_tutorial');  
        if(e.x<1300 && e.x>1058 && e.y<686 && e.y>588)
            window.close();   
        if(e.x<1300 && e.x>1058 && e.y<798 && e.y>699)
            Framework.Game.goToLevel('menu_gameteam');  
        },
    mousemove: function(e) {        
        console.log(e);     
        if(e.x >= 1060 && e.x<=1296 && e.y<=466 && e.y>=369){
            this.botton_start = new Framework.Sprite(define.welcomimgPath + 'start_game_touch.png');
        }else{
            this.botton_start = new Framework.Sprite(define.welcomimgPath + 'start_game_untouch.png');
        }  
        if(e.x >= 1060 && e.x<=1296 && e.y<=687 && e.y>=590){
            this.botton_quit = new Framework.Sprite(define.welcomimgPath + 'quit_game_touch.png');
        }else{
            this.botton_quit = new Framework.Sprite(define.welcomimgPath + 'quit_game_untouch.png');
        }
        if(e.x >= 1060 && e.x<=1296 && e.y<=799 && e.y>=700){
            this.botton_team = new Framework.Sprite(define.welcomimgPath + 'team_game_touch.png');
        }else{
            this.botton_team = new Framework.Sprite(define.welcomimgPath + 'team_game_untouch.png');
        } 
        if(e.x >= 1060 && e.x<=1296 && e.y<=578 && e.y>=479){
            this.botton_tutorial = new Framework.Sprite(define.welcomimgPath + 'tutorial_game_touch.png');
        }else{
            this.botton_tutorial = new Framework.Sprite(define.welcomimgPath + 'tutorial_game_untouch.png');
        } 
        this.botton_start.position = {
            x: 1050,
            y: 350
        };

        this.botton_tutorial.position = {
            x: 1050,
            y: 460
        };

        this.botton_team.position = {
            x: 1050,
            y: 680
        };

        this.botton_quit.position = {
            x: 1050,
            y: 570
        };
        this.draw(Framework.Game._context);
    },

    mouseup: function(e) {
        // console.log("mouseup");
        // console.log(e);

        this.isTouchArrow = false;
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        this.mousedown(e[0]);
    },

    touchend: function (e) {
        this.mouseup();
    },
    
    touchmove: function (e) {
        this.mousemove(e[0]);
    }
});