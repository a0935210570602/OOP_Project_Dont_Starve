var Npc_event = function() {
    this.dialog_blue = new Framework.Sprite(define.materialPath + 'dialog_blue.png'); 
    this.dialog_blue.scale = 1.5;
    this.dialog_blue.position = {x: 800, y:700};
    this.npc1 =  new Framework.Sprite(define.materialPath + '小丑.png'); 
    this.npc1.scale =  1.5;
    this.npc1.position = {x: 800, y:350};
    this.npc_name = "";
    this.taking_is_start = false;
    this.amount = -1;
    this.talk_des = "";
    this.description = {
        "小丑哥哥":{
            "dialog":[
                {key:0, des:"看屁喔!"},
                {key:1, des:"跟你說個故事"},
                {key:2, des:"耶穌還對眾人說話的時候，不料他母親和他弟兄站在外邊，要與他說話。有人告訴他說：看哪，你母親和你" +
                            "弟兄站在外邊，要與你說話。他卻回答那人說：「誰是我的母親？誰是我的弟兄？就伸手指著門徒，說：看" +
                            "哪，我的母親，我的弟兄。凡遵行我天父旨意的人，就是我的弟兄姐妹和母親了。」"},
                {key:3, des:"你來到島上的目的很明顯了，不是嗎"},
                {key:4, des:"下地獄去吧，罪人!!"},
                {key:5, des:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" +
                            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" +
                            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"},]
        }
    };

    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    //可疊加物件有amount 不可疊加有durability
    this.durability = 100;
    this.place = "hand";
    
    this.trigger = function(name, event_name){
        this.npc_name = name;
        if(event_name == "talking"){
            this.taking_is_start = true;
            this.amount ++;
            console.log(this.amount);

            if(this.amount ==this.description[name]["dialog"].length){
                this.taking_is_start = false;
                this.amount = -1;
            }
            console.log( this.description[name]["dialog"]);

            this.talking(name, this.amount);
        }
    }
    this.talking = function(name, amount){
        this.talk_des = this.description[name]["dialog"][amount].des;
        console.log(this.talk_des);
    }
    this.update = function(){
    }

    this.draw = function(ctx){
        this.npc1.draw(ctx);
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
