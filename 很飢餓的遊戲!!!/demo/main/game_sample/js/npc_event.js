var Npc_event = function() {
    this.dialog_blue = new Framework.Sprite(define.materialPath + 'dialog_blue.png'); 
    this.dialog_blue.scale = 1.5;
    this.dialog_blue.position = {x: 800, y:700};
    this.npc = [];
    this.npc1 =  new Framework.Sprite(define.npcPath + '小丑.png'); 
    this.npc1.scale =  1.5;
    this.npc1.position = {x: 800, y:350};
    this.npc.push(this.npc1);
    this.npc1 =  new Framework.Sprite(define.npcPath + '主角.jpg'); 
    this.npc1.scale =  1.5;
    this.npc1.position = {x: 800, y:350};
    this.npc.push(this.npc1);

    this.npc_name = "";
    this.drama = "";
    this.taking_is_start = false;
    this.amount = -1;
    this.talk_des = "";
    this.mission_chain = [];
    this.description = {
        "任務一":{
            "開始":"小丑哥哥",
            "主角":[
                {key:1, des:"請問一下，這裡是..."},
            ],
            "小丑哥哥":[
                {key:1, des:"吵屁喔，沒看到我正在分莓果嗎？"},
                {key:2, des:"有什麼問題先幫我把壞掉的莓果挑出來，拿給旁邊遺跡4裡的的莉莉，並把退的錢拿來給我。"},
                {key:3, des:"馬的，淨賣些爛東西給我"},
            ],
            "主角":[
                {key:1, des:"(......)"},
                {key:2, des:"好像也只能照做了。"},
            ],
            "任務":1
        },
        "主角":{
            "picture":[
                {key:0, picture:this.npc[1]},
            ],
            "drama0":[
            {loop:false, key:0, des:"(...)", finish:false},
            {key:0, des:"(...睜開眼)"},
            {key:0, des:"這裡是......"},
            {key:1, des:"剛剛我不是還在學校嗎？"},
            {key:2, des:"這地方怎麼看起來這麼奇怪"},
            {key:3, des:"難不成我被綁架了！！！！！！"},
            {key:4, des:"啊那邊有一個看起來很好心的人"},
            {key:5, des:"去問問他好了"},]
        
        },
        "小丑哥哥":{
            "picture":[
                {key:0, picture:this.npc[0]},
            ],
            "dialog":[
                {loop:true, des:"看屁喔!", finish:false},
                {key:1, des:"還看"},
                {key:2, des:"看你媽媽"},],
            "drama1":[
                {loop:false, des:"對你，就是你。!", finish:false},
                {key:"主角", des:"(我？))"},
                {key:"小丑哥哥", des:"對，還看"},
                {key:2, des:"看你媽媽"},]
        },
        "凝視者":{
            "神秘力量":[
                {key:0, des:"請稍等一下，在你前往<奧術平原>之前我有話想要跟你說。"},
                {key:1, des:"你記得這裡的神官中有一位叫做卡歐的嗎？"},
                {key:2, des:"那孩子直到最後都沒有辦法找到自己是什麼，看來好像為了找尋自我什麼什麼都願意做，不過一切終究只是說" +
                            "說而已。" },
                {key:3, des:"神官為了追尋愛爾達斯異常運行的原因異常的原因前往門的那端時，那孩子也一起消失在那邊了。" +
                            "雖然我極力挽留她，但一切燈已經太遲了。" +
                            "" +
                            "" +
                            "我要馬上前往門的那端找看看"},
                {key:4, des:"請稍等，奧術平原的怪物是從充滿高密度愛爾達斯的河流中誕生......." +
                            ""+
                            "你必須要帶<神祕福斯>才能夠完全發揮力量。" +
                            "" +
                            "" +
                            "<神祕福斯>？"},
                {key:5, des:"百聞不如一見，先去到那邊狩獵一些怪物看看吧！ 之後我會去找你的。" +
                            "" +
                            "" +
                            "(先跟門的那端奧術平原中第一個見到的怪物交手看看之後，在接受凝視者的幫助吧！)"},
                {key:6, des:"這邊的蘋果你先拿一點去吃吧。"}]
        }
    };
    this.trigger = function(name, drama_name){
        this.npc_name = name;
        this.taking_is_start = true;
        this.drama = drama_name;
        this.amount = -1;
    }

    this.talking = function(){
        this.amount ++;
        if(this.description[this.npc_name][this.drama][0].finish){
            this.taking_is_start = false;
        }else{
            if(this.amount >= this.returnSayLong()){
                this.taking_is_start = false;
                this.amount = 0;
                if(!this.description[this.npc_name][this.drama][0].finish){
                    if(!this.description[this.npc_name][this.drama][0].loop)
                        this.description[this.npc_name][this.drama][0].finish = true;
                }else{
                    this.taking_is_start = false;
                }
            }else
                this.talk_des = this.description[this.npc_name][this.drama][this.amount].des;
        }
    }

    this.returnSayLong = function(){
        return this.description[this.npc_name][this.drama].length;
    }

    this.update = function(){
    }
    this.close =false;
    this.close = function(){
        this.taking_is_start = false;
    }
    this.draw = function(ctx){
        if(this.taking_is_start){
            this.description[this.npc_name]["picture"][0].picture.draw(ctx);
            this.dialog_blue.draw(ctx);
            ctx.textAlign = 'center';
            ctx.font = "40px Arial";
            ctx.fillStyle = "gold";
            ctx.fillText(this.npc_name,370 ,615);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            for(var i=0,j=0,k=0;i<this.talk_des.length;i++){
                if(i%35 == 0){
                    j +=35;
                    k=0;
                }
                ctx.fillText(this.talk_des.charAt(i),290 +k*30,635+j);
                k++;
            }
        }
    }
    this.keydown = function(e){

    }
};

Object.defineProperty(Npc_event.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.Npc_event.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
