var MyMenu_gameteam = Framework.exClass(Framework.GameMainMenu , {
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
        this.go_back_menu = new Framework.Sprite(define.welcomimgPath + 'go_back_menu.png');
    },

    initialize: function() {


        //為了讓之後的位置較好操控, new出一個位於中心點且可以黏貼任何東西的容器
        //注意, Position都是用中心點
        this.go_back_menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.go_back_menu.scale = 4;
        this.rootScene.attach(this.go_back_menu);

        this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            // y: Framework.Game.getCanvasHeight() / 2
            y: 0
        };
    },

    update:function(){     
        //this.rootScene.update();一定要在第一行
        this.rootScene.update(); 

        //目前的Framework, 當任何一個GameObject不做attach時, 則必須要自行update
    },

    draw: function(parentCtx) { 
        //this.rootScene.draw();一定要在第一行
        parentCtx.textAlign = 'center';
        parentCtx.fillStyle = 'black';
        parentCtx.fillText("遊戲專案團隊", 750, 100);
        parentCtx.fillText("106820003 電資三潘建蒼", 750, 200);
        parentCtx.fillText("106820046 電資三凃昱安", 750, 300);
        parentCtx.fillText("PS.偉凱好帥", 750, 800);
        this.rootScene.draw(parentCtx); 
        this.go_back_menu.draw(parentCtx);
        //可支援畫各種單純的圖形和字
        
    },

    mouseup: function(e) {
    },

    mousedown: function(e) {
        if(e.x<915 && e.x>682 && e.y<573 && e.y>285)
            Framework.Game.goToLevel('menu');                   
    },

    click:function(e){      
    },

    mousemove: function(e) {               
    },

    mouseup: function(e) {
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