var Level2_change = Framework.Class(Framework.Level , {
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
        this.map = new World_map();
        this.map.load();
        this.map.addMonsterRandom(10);
    },
    initialize: function() {
        this.map.init();
        this.map.setPlayerPosition({x:13,y:7});
    },
    update: function() {     
        this.map.update();
    },
    draw:function(parentCtx){
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