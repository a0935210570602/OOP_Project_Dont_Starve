var Game_object_detail = function() {
    this.back_ground_picture = new Framework.Sprite(define.materialPath + 'Floral.png'); 
    this.back_ground_picture.scale = 2.9;
    this.back_ground_picture.position = {x:145, y:720};
    //1:小花 2:蜘蛛網 3:石頭 4:樹枝 5:偉凱的作業簿 6:草 7:木頭 8:燧石 9:黃金 10:豬皮
    //11:蜂刺 12:雪球 13:繩索 14:露水 15:十字鎬 16:斧頭 17:釣魚竿 18:鏟子 19:黃金斧頭 20:黃金鏟子 
    //21:黃金十字鎬 22:頭盔 23:草製盔甲 24:木製盔甲 25:長矛 26:吹箭 27:國王法杖 28:空間法杖 29:火法杖 30:冰法杖
    //31:黃金提燈 32:火把 33:帳篷 34:篝火 35:冰塊 36:漿果叢 37:採摘的花 38:採摘的草 39:漿果 40:挖的漿果叢(拔)
    //41:挖的花(拔) 42:挖的樹 43:挖的草(拔) 44:挖的漿果叢(未拔) 45:挖的花(未拔) 46:挖的草(未拔)
    this.description;
    this.init = function(){
        this.description =  [
                {key:1,name:"小花", des:"好可愛的一朵花上面有花蜜喔~"},
                {key:2,name:"蜘蛛網", des:"蜘蛛的家"},
                {key:3,name:"石頭", des:"萬用小石頭，是合成的好材料。"},
                {key:4,name:"樹枝", des:"小小一枝，不知到有什麼用處。"},
                {key:5,name:"偉凱的作業簿", des:"不好好寫功課，會被偉凱當掉喔~"},
                {key:6,name:"草", des:"草草草操操操!"},
                {key:7,name:"木頭", des:"木頭，不懂暗示的人"},
                {key:8,name:"燧石", des:"小小硬硬的"},
                {key:9,name:"黃金", des:"很稀有，要好好保存"},
                {key:10,name:"豬皮", des:"油到出水的一塊組織"},
                {key:11,name:"蜂刺", des:"從蜜蜂的屁屁上拔下來的，上面有一點毒液"},
                {key:12,name:"雪球", des:"白白的，做銼冰的好材料"},
                {key:13,name:"繩索", des:"非常的萬用"},
                {key:14,name:"露水", des:"跟明星花露水蠻像的"},
                {key:15,name:"十字鎬", des:"可以拿來挖礦"},
                {key:16,name:"斧頭", des:"不只可以砍樹，還可以砍人喔~"},
                {key:17,name:"釣魚竿", des:"釣釣釣"},
                {key:18,name:"鏟子", des:"挖哇哇"},
                {key:19,name:"黃金斧頭", des:"非常奢華，你捨得用嗎？"},
                {key:20,name:"黃金鏟子", des:"非常奢華，你捨得用嗎？"},
                {key:21,name:"黃金十字鎬", des:"非常奢華，你捨得用嗎？"},
                {key:22,name:"頭盔", des:"騎機車必帶的"},
                {key:23,name:"草製盔甲", des:"有點破爛的鎧甲"},
                {key:24,name:"木製盔甲", des:"還可以的鎧甲"},
                {key:25,name:"長矛", des:"獵殺怪物專用"},
                {key:26,name:"吹箭", des:"偷襲的好武器"},
                {key:27,name:"國王法杖", des:"消失吧！"},
                {key:28,name:"空間法杖", des:"移動吧！"},
                {key:29,name:"火法杖", des:"燃燒吧！"},
                {key:30,name:"冰法杖", des:"結凍吧！"},
                {key:31,name:"黃金提燈", des:"可以許願嗎？"},
                {key:32,name:"火把", des:"在夜晚派的上用場"},
                {key:33,name:"帳篷", des:"休息的好地方"},
                {key:34,name:"篝火", des:"烤肉囉"},
                {key:35,name:"冰塊", des:"好冰"},
                {key:36,name:"漿果叢", des:"結滿了果實"},
                {key:37,name:"採摘的花", des:"小花"},
                {key:38,name:"採摘的草", des:"小草"},
                {key:39,name:"漿果", des:"果實好好吃"},
                {key:40,name:"挖的漿果叢(拔)", des:"被挖起來的漿果叢"},
                {key:41,name:"挖的花(拔)", des:"被拔起來的花"},
                {key:42,name:"挖的樹", des:"被拔起來的樹"},
                {key:43,name:"挖的草(拔)", des:"被拔起來的草"},
                {key:44,name:"挖的漿果叢(未拔)", des:"!!!!"},
                {key:45,name:"挖的花(未拔)", des:"!!!!"},
                {key:46,name:"挖的草(未拔)", des:"!!!!"},
                {key:47,name:"挖的樹苗(拔)", des:"粗壯的小樹苗"},
                {key:48,name:"挖的樹苗(未拔)", des:"小樹苗好可愛"},
                {key:49,name:"蝙蝠翅膀", des:"會飛喔"},
                {key:50,name:"眼球", des:"好好吃"},
                {key:51,name:"蜂蜜", des:"好甜"},
                {key:52,name:"大肉", des:"肥肥"},
                {key:53,name:"怪物肉", des:"3分熟左右"},
                {key:54,name:"黑漿果", des:"上面長滿了黴菌，好臭，不能吃了。"},
            ];
    }
    this.title_string = "";
    this.des_string = "";
    this.showUpdate = function(item_number){
        if(item_number != null){
            if(item_number <= 54 && item_number >=1 && item_number){
                this.title_string = this.description[item_number-1].name;
                this.des_string = this.description[item_number-1].des;
            }else{
                this.title_string = "";
                this.des_string = "";
            }
        }else{
            this.title_string = "";
            this.des_string = "";
        }
    }
    this.draw = function(ctx){
        if(this.title_string != ""){
            ctx.beginPath();
            ctx.rect(15, 557, 250, 330);
            ctx.fillStyle = "brown";
            ctx.fill();
            this.back_ground_picture.draw(ctx);
            ctx.font = "25px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = 'center';
            ctx.fillText(this.title_string, 139 ,605);
            ctx.fillText("---------------",139 ,640);
            ctx.textAlign = 'left';
            for(var i=0,j=0,k=0;i<this.des_string.length;i++){
                if(i%8 == 0){
                    j +=30;
                    k=0;
                }
                ctx.fillText(this.des_string.charAt(i),45 +k*25,645+j);
                k++;
            }
        }else{
            ctx.beginPath();
            ctx.rect(0, 557, 282, 380);
            ctx.fillStyle = "#BEBEBE";
            ctx.fill();
        }
    }
};