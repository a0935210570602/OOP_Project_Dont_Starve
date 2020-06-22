var Npc_event = function(map) {
    this.map = map;
    this.dialog_blue = new Framework.Sprite(define.materialPath + 'dialog_blue.png'); 
    this.dialog_blue.scale = 1.5;
    this.mission_block = new Framework.AnimationSprite({url: define.npcPath + '任務框.png', col:7 , row:1 , loop:false , speed:1.5});
    this.mission_block.position = {x: (13)*64, y: (6)*64};
    this.mission_block.scale = 0.8;
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
    this.npc1 =  new Framework.Sprite(define.npcPath + '莉莉.png'); 
    this.npc1.scale =  1.3;
    this.npc1.position = {x: 800, y:450};
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
            "劇本":[
                {key:"主角", des:"請問一下，這裡是...", finish:false, loop:false},
                {key:"小丑哥哥", des:"吵屁喔，沒看到我正在分莓果嗎？"},
                {key:"小丑哥哥", des:"有什麼問題先幫我把壞掉的莓果挑出來，拿給旁邊第二排第二個的遺跡裡的的莉莉，他會跟你說要怎麼做。"},
                {key:"小丑哥哥", des:"希望你找得到那個遺跡在哪裡，哈哈"},
                {key:"小丑哥哥", des:"什麼！你連怎麼撿東西都不會！？"},
                {key:"小丑哥哥", des:"你對著物品按空白鍵就撿起來了，很簡單吧"},
                {key:"主角", des:"好像真的蠻簡單的"},
                {key:"小丑哥哥", des:"那還不快去"},
                {key:"小丑哥哥", des:"最後提醒一下，如果按下\'E\'鍵，可以查看角色屬性。而且在左方角色狀態有一條灰色的" + 
                                    "那是飢餓值，如果他它0的話，生命就會開始下降，要特別小心。"},
                {key:"主角", des:"好喔"},
            ],
            "說了":false
        },
        "任務二":{ 
            "開始":"商人莉莉", //攻擊、
            "劇本":[
                {key:"主角", des:"姊姊", finish:false, loop:false},
                {key:"商人莉莉", des:"!!!!"},
                {key:"商人莉莉", des:"嘴巴真甜呢，女孩。"+
                                "你知道我今年已經兩百歲了嗎，哈哈"},
                {key:"主角", des:"!!!!!!!!!!!!!!!!!!!!!!!!!!!!"},
                {key:"商人莉莉", des:"看在你這麼可愛的份上，就跟你說這個世界的運作方式。"},                                                         
                {key:"商人莉莉", des:"別管什麼莓果了"},                                                         
                {key:"商人莉莉", des:"撿起來的東西會放進背包裡，如果想要丟棄的話，你要先將滑鼠移到物品上，按\'D\'，這樣就丟掉了。"},
                {key:"主角", des:"好麻煩的操作方式喔！"},
                {key:"商人莉莉", des:"再講講合成方式，左邊的欄位是合成欄，按一下就可以合成物資"},                                                                                                                                      
                {key:"商人莉莉", des:"但要小心背包裡如果沒有足夠的材料，是沒有辦法合成物品的"},                                                                     
                {key:"主角", des:"好喔"},
                {key:"主角", des:"那要怎麼裝備裝備呢？"},
                {key:"商人莉莉", des:"問得漂亮。"},
                {key:"商人莉莉", des:"用滑鼠點擊背包裡的裝備，就可以裝備囉。"},
                {key:"主角", des:"這麼簡單喔"},
                {key:"商人莉莉", des:"但知道這些是不夠的，再跟你說說種植物、砍樹和挖植物"},
                {key:"商人莉莉", des:"挖植物之前你需要一把鏟子、裝備上後，朝著植物按空白鍵，多按幾下你就可以把它挖起囉。"},
                {key:"商人莉莉", des:"砍樹和挖植物也是同樣的道理，裝備上斧頭和十字鎬，對著樹木和岩石按空白鍵有各自的效果。"},
                {key:"主角", des:"啊不就好棒棒"},
                {key:"商人莉莉", des:"別吵啦，再說說釣魚，你需要一把釣魚竿，裝備後對著湖面按\'F\'，等你覺得差不多就可以按空白收竿囉。"},
                {key:"商人莉莉", des:"湖裡的魚可好吃了，你一定要吃吃看。"},
                {key:"商人莉莉", des:"最後說到攻擊方式"},
                {key:"商人莉莉", des:"有些武器是需要詠唱的，像是魔杖類武器，按下\'S\'，就可以施放魔法"},
                {key:"商人莉莉", des:"其他武器也是，按下\'S\'，就可以有不同的攻擊效果，但就不需要詠唱。"},
                {key:"商人莉莉", des:"好啦，介紹就到這邊，你可以走了"},
                {key:"商人莉莉", des:"記得要贏得遊戲，不但要生存下來，還要打倒魔王喔。"},
                {key:"商人莉莉", des:"魔王就住在最右下角的岩漿那裡，快去吧。"},
            ],
            "說了":false
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
                {loop:true, des:"你知道", finish:false},
                {key:1, des:"偉凱的課很難修"},
                {key:2, des:"很多人都被當了"},
                {key:3, des:"你要不要放棄?"},
            ]
        },
        "商人莉莉":{
            "picture":[
                {key:0, picture:this.npc[2]},
            ],
            "dialog":[
                {loop:true, des:"還不快去", finish:false},
                {key:1, des:"不打倒魔王的話"},
                {key:2, des:"就永遠逃離不了這裡了"},
                {key:3, des:"你知道嗎？"},]
        }
    };
    this.mission_chain.push(this.description['任務一']);
    this.mission_chain.push(this.description['任務二']);
    this.npc_position = {x:0, y:0};
    this.characterHasMission = function(){
        switch(this.mission_chain[0]['開始']){
            case "小丑哥哥":
                this.npc_position = {x: 49, y:47}
                break;
            case "商人莉莉":
                this.npc_position = {x: 20, y:15}
                break;
            default:
                break
        }   
    }
    this.characterHasMission();
    this.checkMissionBlockHasStart = function(){
        if( Math.abs(this.npc_position.x - map.playerPositionOnMap.x)<=5 &&  Math.abs(this.npc_position.y - map.playerPositionOnMap.y)<=5){
            return true;;
        }else{
            return false;
        }
    }
    this.trigger = function(name, drama_name){
        this.npc_name = name;
        this.taking_is_start = true;
        if(this.mission_chain[0]["開始"] == this.npc_name && !this.mission_chain[0]["說了"]){
            this.drama = -999;
        }else
            this.drama = drama_name;
        this.amount = -1;
    }
    this.talking = function(){
        this.amount ++;
        if(this.drama == -999){
            if(this.mission_chain[0]["劇本"][0].finish)
                this.taking_is_start = false;
            else{
                if(this.amount >=  this.mission_chain[0]["劇本"].length){
                    this.taking_is_start = false;
                    this.amount = 0;
                    this.mission_chain[0]["說了"] = true;
                    if(! this.mission_chain[0]["劇本"][0].finish)
                        if(! this.mission_chain[0]["劇本"][0].loop)
                            this.mission_chain[0]["劇本"][0].finish = true;
                    else
                        this.taking_is_start = false;
                    if(this.mission_chain.length > 1)
                        this.mission_chain.splice(0, 1);
                    else
                        this.mission_block.stop();
                    this.characterHasMission();
                }else
                    this.talk_des = this.mission_chain[0]["劇本"][this.amount].des;
            }
        }else{
            if(this.description[this.npc_name][this.drama][0].finish)
                this.taking_is_start = false;
            else{
                if(this.amount >= this.returnSayLong()){
                    this.taking_is_start = false;
                    this.amount = 0;
                    if(!this.description[this.npc_name][this.drama][0].finish){
                        if(!this.description[this.npc_name][this.drama][0].loop)
                            this.description[this.npc_name][this.drama][0].finish = true;
                    }else
                        this.taking_is_start = false;
                }else
                    this.talk_des = this.description[this.npc_name][this.drama][this.amount].des;
            }
        }
    }
    this.returnSayLong = function(){
        return this.description[this.npc_name][this.drama].length;
    }
    this.update = function(){
        this.mission_block.update();
    }
    if(this.mission_chain.length != 0){
        this.mission_block.start({ from: 0, to: 2, loop: true});
    }
    this.draw = function(ctx){
        if(this.checkMissionBlockHasStart()){
            this.mission_block.position = {x:(13+this.npc_position.x - this.map.playerPositionOnMap.x)*64+16,y:(7+this.npc_position.y - this.map.playerPositionOnMap.y)*64-32};
            if(this.mission_block._start)
                this.mission_block.draw(ctx); 
        }
        if(this.taking_is_start){
            ctx.textAlign = 'center';
            ctx.font = "40px Arial";
            ctx.fillStyle = "gold";
            if(this.drama == -999){
                this.description[ this.mission_chain[0]["劇本"][this.amount].key ]["picture"][0].picture.draw(ctx);
                this.dialog_blue.draw(ctx);
                ctx.fillText(this.mission_chain[0]["劇本"][this.amount].key,370 ,615);
            }
            else{
                this.description[this.npc_name]["picture"][0].picture.draw(ctx);
                this.dialog_blue.draw(ctx);
                ctx.fillText(this.npc_name,370 ,615);
            }
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