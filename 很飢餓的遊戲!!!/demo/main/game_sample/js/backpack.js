var Backpack = function() {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;

    this.item_branch = new Framework.Sprite(define.materialPath + 'item_branch.png');
    this.item_branch.scale = 2;

    this.item_droplet = new Framework.Sprite(define.materialPath + 'item_droplet.png');
    this.item_droplet.scale = 2;

    this.item_pixilart = new Framework.Sprite(define.materialPath + 'item_pixilart.png');
    this.item_pixilart.scale = 2;

    this.item_gold_pixilart = new Framework.Sprite(define.materialPath + 'item_gold_pixilart.png');
    this.item_gold_pixilart.scale = 2;

    this.item_space_wand = new Framework.Sprite(define.materialPath + 'item_space_wand.png');
    this.item_space_wand.scale = 2;
    
    this.item_fire_wand = new Framework.Sprite(define.materialPath + 'item_fire_wand.png');
    this.item_fire_wand.scale = 2;

    this.item_king_wand = new Framework.Sprite(define.materialPath + 'item_king_wand.png');
    this.item_king_wand.scale = 2;

    this.item_ice_wand = new Framework.Sprite(define.materialPath + 'item_ice_wand.png');
    this.item_ice_wand.scale = 2;

    this.item_gold = new Framework.Sprite(define.materialPath + 'item_gold.png');
    this.item_gold.scale = 2;

    this.item_ax = new Framework.Sprite(define.materialPath + 'item_ax.png');
    this.item_ax.scale = 2;

    this.item_gold_ax = new Framework.Sprite(define.materialPath + 'item_gold_ax.png');
    this.item_gold_ax.scale = 2;

    this.item_rope = new Framework.Sprite(define.materialPath + 'item_rope.png');
    this.item_rope.scale = 2;

    this.item_camp = new Framework.Sprite(define.materialPath + 'item_camp.png');
    this.item_camp.scale = 2;

    this.item_campfire = new Framework.Sprite(define.materialPath + 'item_campfire.png');
    this.item_campfire.scale = 2;

    this.item_wood = new Framework.Sprite(define.materialPath + 'item_wood.png');
    this.item_wood.scale = 2;

    this.item_firebundle = new Framework.Sprite(define.materialPath + 'item_firebundle.png');
    this.item_firebundle.scale = 1.5;

    this.item_spider_web = new Framework.Sprite(define.materialPath + 'item_spider_web.png'); 
    this.item_spider_web.scale = 2;

    this.item_grass = new Framework.Sprite(define.materialPath + 'item_grass.png');
    this.item_grass.scale = 2;

    this.item_grass_mowed = new Framework.Sprite(define.materialPath + 'item_grass_mowed.png'); 
    this.item_grass_mowed.scale = 2;
    
    this.item_flower = new Framework.Sprite(define.materialPath + 'item_flower.png'); 
    this.item_flower.scale = 2;

    this.item_stone = new Framework.Sprite(define.materialPath + 'item_stone.png');
    this.item_stone.scale = 2;

    this.item_waikei_homework = new Framework.Sprite(define.materialPath + 'item_waikei_homework.png');
    this.item_waikei_homework.scale = 2;

    this.backpackPosition = [];
    this.itemList = [];

    
    for(var j = 0; j < 17; j++){
        this.backpackPosition.push({x: (j+5)*64, y: 13*64});
    }
    
    this.addItem = function(item_num){
        var check = this.checkIfExist(item_num);
        if(check == -1){
            this.itemList.push({item: item_num, amount: 1});
        }else{
            this.itemList[check].amount += 1;
        }
    }

    this.checkIfPickAvailable = function(item_num){
        if(this.itemList.length < 17)
            return true;
        else if(this.checkIfExist(item_num) != -1)
            return true;
        else 
            return false;
    }
    //1:可合成 -1:材料夠沒空間 0:材料不夠
    this.checkIfSynthesisAvailable = function(material, item_num){
        if(this.checkIfMaterialEnough(material)){
            if(this.itemList.length < 17)
                return 1;
            if(this.checkIfSpaceEnoughAfterSynthesis(material))
                return 1;
            else
                return -1;
        }else{
            return 0;
        }
    }

    this.checkIfSpaceEnoughAfterSynthesis = function(material){
        var check = false;
        for(var i = 0;i < material.length-1;i++){
            for(var j = 0;j < this.itemList.length;j++){
                if(this.itemList[j].item == material[i].item && this.itemList[j].amount == material[i].amount)
                    check = true;
            }
        }
        return check;
    }

    this.checkIfMaterialEnough = function(material){
        var check = false;
        for(var i = 0;i < material.length-1;i++){
            check = false;
            for(var j = 0;j < this.itemList.length;j++){
                if(this.itemList[j].item == material[i].item && this.itemList[j].amount >= material[i].amount)
                    check = true;
            }
            if(!check)
                return false;
        }
        return true;
    }

    this.checkIfExist = function(item_num){
        for(var i = 0;i < this.itemList.length; i++){
            if(this.itemList[i].item == item_num)
                return i;
        }
        return -1;
    }

    this.getItemList = function(){
        return this.itemList;
    }

    this.update = function(material){
        for(var i = 0;i < material.length-1;i++){
            for(var j = 0;j <　this.itemList.length;j++){
                if(material[i].item == this.itemList[j].item)
                    this.itemList[j].amount -= material[i].amount;
            }
        }
        this.arrayRemoveEmpty();
    }

    this.arrayRemoveEmpty = function() {
        var i = 0;
        while(i < this.itemList.length) {
            if (this.itemList[i].amount == 0) {
            this.itemList.splice(i, 1);
            } else {
            i++;
            }
        }
    }

    this.itemNameArray = [
        "小花", "蜘蛛網", "石頭", "樹枝", "偉凱的作業簿", "草", "木頭", "燧石", "黃金", "豬皮",
        "蜂刺", "雪球", "繩索", "露水", "十字鎬", "斧頭", "釣魚竿", "鏟子", "黃金斧頭", "黃金鏟子", 
        "黃金十字鎬", "頭盔", "草製盔甲", "木製盔甲", "長矛", "吹箭", "國王法杖", "空間法杖", "火法杖", "冰法杖",
        "黃金提燈", "火把", "帳篷", "篝火", "冰塊", "漿果叢"
    ];

    //1:小花 2:蜘蛛網 3:石頭 4:樹枝 5:偉凱的作業簿 6:草 7:木頭 8:燧石 9:黃金 10:豬皮
    //11:蜂刺 12:雪球 13:繩索 14:露水 15:十字鎬 16:斧頭 17:釣魚竿 18:鏟子 19:黃金斧頭 20:黃金鏟子 
    //21:黃金十字鎬 22:頭盔 23:草製盔甲 24:木製盔甲 25:長矛 26:吹箭 27:國王法杖 28:空間法杖 29:火法杖 30:冰法杖
    //31:黃金提燈 32:火把 33:帳篷 34:篝火 35:冰塊 36:漿果叢
    this.draw = function(ctx){
        for(var j = 0; j < 17; j++){
            this.backpack.position = this.backpackPosition[j];
            this.backpack.draw(ctx);
        }

        for(var i = 0; i < this.itemList.length; i++){
            switch(this.itemList[i].item){
                case 1:
                    this.item_flower.position = this.backpackPosition[i];
                    this.item_flower.draw(ctx);
                    break;
                case 2:
                    this.item_spider_web.position = this.backpackPosition[i];
                    this.item_spider_web.draw(ctx);
                    break;
                case 3:
                    this.item_stone.position = this.backpackPosition[i];
                    this.item_stone.draw(ctx);
                    break;
                case 4:
                    this.item_branch.position = this.backpackPosition[i];
                    this.item_branch.draw(ctx);
                    break;
                case 5:
                    this.item_waikei_homework.position = this.backpackPosition[i];
                    this.item_waikei_homework.draw(ctx);
                    break;
                case 6:
                    this.item_grass.position = this.backpackPosition[i];
                    this.item_grass.draw(ctx);
                    break;
                case 7:
                    this.item_wood.position = this.backpackPosition[i];
                    this.item_wood.draw(ctx);
                    break;
                case 9:
                    this.item_gold.position = this.backpackPosition[i];
                    this.item_gold.draw(ctx);
                    break;
                case 13:
                    this.item_rope.position = this.backpackPosition[i];
                    this.item_rope.draw(ctx);
                    break;
                case 14:
                    this.item_droplet.position = this.backpackPosition[i];
                    this.item_droplet.draw(ctx);
                    break;
                case 15:
                    this.item_pixilart.position = this.backpackPosition[i];
                    this.item_pixilart.draw(ctx);
                    break;
                case 16:
                    this.item_ax.position = this.backpackPosition[i];
                    this.item_ax.draw(ctx);
                    break;
                case 19:
                    this.item_gold_ax.position = this.backpackPosition[i];
                    this.item_gold_ax.draw(ctx);
                    break;
                case 21:
                    this.item_gold_pixilart.position = this.backpackPosition[i];
                    this.item_gold_pixilart.draw(ctx);
                    break;
                case 27:
                    this.item_king_wand.position = this.backpackPosition[i];
                    this.item_king_wand.draw(ctx);
                    break;
                case 28:
                    this.item_space_wand.position = this.backpackPosition[i];
                    this.item_space_wand.draw(ctx);
                    break;
                case 29:
                    this.item_fire_wand.position = this.backpackPosition[i];
                    this.item_fire_wand.draw(ctx);
                    break;
                case 30:
                    this.item_ice_wand.position = this.backpackPosition[i];
                    this.item_ice_wand.draw(ctx);
                    break;
                case 32:
                    this.item_firebundle.position = this.backpackPosition[i];
                    this.item_firebundle.draw(ctx);
                    break;
                case 33:
                    this.item_camp.position = this.backpackPosition[i];
                    this.item_camp.draw(ctx);
                    break;
                case 34:
                    this.item_campfire.position = this.backpackPosition[i];
                    this.item_campfire.draw(ctx);
                    break;
                default:
                    ctx.font = "20px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText(this.itemNameArray[this.itemList[i].item-1], this.backpackPosition[i].x, this.backpackPosition[i].y);
            }

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(this.itemList[i].amount.toString(), this.backpackPosition[i].x, this.backpackPosition[i].y+20);
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 2.5;
            ctx.strokeText(this.itemList[i].amount.toString(), this.backpackPosition[i].x, this.backpackPosition[i].y+20);
        }
    }
};