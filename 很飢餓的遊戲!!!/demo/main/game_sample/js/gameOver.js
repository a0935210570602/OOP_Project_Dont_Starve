var GameOver = Framework.Class(Framework.Level , {
            //初始化loadingProgress需要用到的圖片
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)                  
    },

    load: function() {
        this.menu = new Framework.Sprite(define.imagePath + 'GameOver.png');
    },

    initialize: function() {

        this.counter = 0;
        this.gameOverCount = 50;
        //為了讓之後的位置較好操控, new出一個位於中心點且可以黏貼任何東西的容器
        //注意, Position都是用中心點
        this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.menu.scale = 2;

        this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: Framework.Game.getCanvasHeight() / 2
        };
    },

    update:function(){     
        //this.rootScene.update();一定要在第一行


        if(this.counter > this.gameOverCount){
            //Framework.Game.goToLevel('menu');
        }
        this.counter++;
    },

    click: function(e){
        Framework.Game.goToLevel('menu');  
    },

    draw: function(parentCtx) { 
        this.menu.draw(parentCtx);
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
    },

    mouseup: function(e) {
    },

    mousedown: function(e) {
    },

    mousemove: function(e) {        
        
    },

    mouseup: function(e) {
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
    },

    touchend: function (e) {
    },
    
    touchmove: function (e) {
    }
});