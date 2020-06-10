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
    this.description = {
        "小丑哥哥":{
            "picture":[
                {key:0, picture:this.npc[0]},
            ],
            "dialog":[
                {loop:true, des:"看屁喔!", finish:false},
                {key:1, des:"跟你說個故事"},
                {key:2, des:"耶穌還對眾人說話的時候，不料他母親和他弟兄站在外邊，要與他說話。有人告訴他說：看哪，你母親和你" +
                            "弟兄站在外邊，要與你說話。他卻回答那人說：「誰是我的母親？誰是我的弟兄？就伸手指著門徒，說：看" +
                            "哪，我的母親，我的弟兄。凡遵行我天父旨意的人，就是我的弟兄姐妹和母親了。」"},
                {key:3, des:"你來到島上的目的很明顯了，不是嗎"},
                {key:4, des:"下地獄去吧，罪人！！"},
                {key:5, des:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" +
                            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" +
                            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"},],
            "drama0":[
            {loop:true, key:0, des:"看屁喔!"},
            {key:1, des:"跟你說個故事"},
            {key:2, des:"耶穌還對眾人說話的時候，不料他母親和他弟兄站在外邊，要與他說話。有人告訴他說：看哪，你母親和你" +
                        "弟兄站在外邊，要與你說話。他卻回答那人說：「誰是我的母親？誰是我的弟兄？就伸手指著門徒，說：看" +
                        "哪，我的母親，我的弟兄。凡遵行我天父旨意的人，就是我的弟兄姐妹和母親了。」"},
            {key:3, des:"你來到島上的目的很明顯了，不是嗎"},
            {key:4, des:"下地獄去吧，罪人!!"},
            {key:5, des:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" +
                        "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" +
                        "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"},]
        },
        "主角":{
            "picture":[
                {key:0, picture:this.npc[1]},
            ],
            "drama0":[
            {loop:true, key:0, des:"(...)", finish:false},
            {key:0, des:"(...睜開眼)"},
            {key:0, des:"這裡是......"},
            {key:1, des:"剛剛我不是還在學校嗎？"},
            {key:2, des:"這地方怎麼看起來這麼奇怪"},
            {key:3, des:"難不成我被綁架了！！！！！！"},
            {key:4, des:"啊那邊有一個看起來很好心的人"},
            {key:5, des:"去問問他好了"},]
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
