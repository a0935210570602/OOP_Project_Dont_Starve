var MyMenu_tutorial = Framework.exClass(Framework.GameMainMenu , {
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
            x: Framework.Game.getCanvasWidth() *0.75,
            y: Framework.Game.getCanvasHeight() *0.25
        };
        this.go_back_menu.scale = 4;
        this.rootScene.attach(this.go_back_menu);
        this.rectPosition = { 
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: 0
        };
    },
    draw: function(parentCtx) { 
        parentCtx.font = '24pt Algerian';
        parentCtx.textAlign = 'left';
        parentCtx.fillStyle = 'black';
        parentCtx.fillText("撿取：對著物品按空白鍵", 60, 50);
        parentCtx.fillText("丟棄：滑鼠需移至背包欲丟棄物品上，按D鍵", 60, 90);
        parentCtx.fillText("對話：對著npc按空白鍵", 60, 130);
        parentCtx.fillText("普攻(無裝備武器)：按S", 60, 170);
        parentCtx.fillText("突刺(裝備長矛)：按S", 60, 210);
        parentCtx.fillText("射箭(裝備弓箭)：按S", 60, 250);
        parentCtx.fillText("傳送(裝備空間法杖)：按S", 60, 290);
        parentCtx.fillText("放魔法(裝備火法杖、冰法杖)：長按S，直到詠唱完畢", 60, 330);
        parentCtx.fillText("吃食物：點擊背包中的食物", 60, 370);
        parentCtx.fillText("裝裝備：點擊背包中的裝備", 60, 410);
        parentCtx.fillText("合成：點擊合成欄位的合成紐", 60, 450);
        parentCtx.fillText("釣魚：裝備釣竿，對著池塘按F鍵，當人物出現\'!\'時，按空白鍵", 60, 490);
        parentCtx.fillText("挖植物：裝備鏟子，對著植物按空白鍵，適用目標：花、草、樹、樹苗和漿果", 60, 530);
        parentCtx.fillText("種植物：點擊背包中的植物(須為挖掘過的植物)", 60, 570);
        parentCtx.fillText("砍樹：裝備斧頭，對著樹木按空白鍵", 60, 610);
        parentCtx.fillText("挖礦：裝備十字搞，對著岩石按空白鍵", 60, 650);
        parentCtx.fillText("查看角色狀態：按E鍵", 60, 690);
        parentCtx.fillText("---------------------------------------------密技一---------------------------------------------", 60, 730);
        parentCtx.fillText("無敵：按P鍵", 60, 770);
        parentCtx.fillText("死亡：按Q鍵", 60, 810);
        parentCtx.fillText("勝利：按W鍵", 60, 850);
        parentCtx.fillText("召喚蜜蜂：按R鍵", 60, 890);
        parentCtx.fillText("召喚豬豬：按T鍵", 400, 770);
        parentCtx.fillText("召喚牛牛：按Y鍵", 400, 810);
        parentCtx.fillText("召喚眼球：按U鍵", 400, 850);
        parentCtx.fillText("召喚蝙蝠：按I鍵", 400, 890);
        parentCtx.fillText("召喚BOSS：按O鍵", 740, 770);
        parentCtx.fillText("大祕寶：往左走", 740, 810);
        //Q:死亡結束  W:勝利結束 R:蜜蜂 T:豬 Y:牛 U:眼球 I:蝙蝠 O:boss
        this.rootScene.draw(parentCtx); 
        this.go_back_menu.draw(parentCtx);
    },
    click:function(e){ 
        this.audio.play({name: 'keyup', loop: false});
        if(e.x<1329 && e.x>1078 && e.y<348 && e.y>83){
            this.audio.stop('song2');
            Framework.Game.goToLevel('menu');                   
        }
    },
});