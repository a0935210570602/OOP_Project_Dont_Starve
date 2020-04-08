var Backpack = function() {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;

    // this.item_branch = new Framework.Sprite(define.materialPath + 'item_branch.png');
    // this.item_branch.scale = 2;

    // this.item_droplet = new Framework.Sprite(define.materialPath + 'item_droplet.png');
    // this.item_droplet.scale = 2;

    // this.item_pixilart = new Framework.Sprite(define.materialPath + 'item_pixilart.png');
    // this.item_pixilart.scale = 2;

    // this.item_gold_pixilart = new Framework.Sprite(define.materialPath + 'item_gold_pixilart.png');
    // this.item_gold_pixilart.scale = 2;

    // this.item_space_wand = new Framework.Sprite(define.materialPath + 'item_space_wand.png');
    // this.item_space_wand.scale = 2;
    
    // this.item_fire_wand = new Framework.Sprite(define.materialPath + 'item_fire_wand.png');
    // this.item_fire_wand.scale = 2;

    // this.item_king_wand = new Framework.Sprite(define.materialPath + 'item_king_wand.png');
    // this.item_king_wand.scale = 2;

    // this.item_ice_wand = new Framework.Sprite(define.materialPath + 'item_ice_wand.png');
    // this.item_ice_wand.scale = 2;

    // this.item_gold = new Framework.Sprite(define.materialPath + 'item_gold.png');
    // this.item_gold.scale = 2;

    // this.item_spear = new Framework.Sprite(define.materialPath + 'item_spear.png');
    // this.item_spear.scale = 2;

    // this.item_armor = new Framework.Sprite(define.materialPath + 'item_armor.png');
    // this.item_armor.scale = 2;

    // this.item_wood_armor = new Framework.Sprite(define.materialPath + 'item_wood_armor.png');
    // this.item_wood_armor.scale = 2;

    // this.item_helmat = new Framework.Sprite(define.materialPath + 'item_helmat.png');
    // this.item_helmat.scale = 2;

    // this.item_bee_sting = new Framework.Sprite(define.materialPath + 'item_bee_sting.png');
    // this.item_bee_sting.scale = 2;

    // this.item_ax = new Framework.Sprite(define.materialPath + 'item_ax.png');
    // this.item_ax.scale = 2;

    // this.item_gold_shovel = new Framework.Sprite(define.materialPath + 'item_gold_shovel.png');
    // this.item_gold_shovel.scale = 2;

    // this.item_flint = new Framework.Sprite(define.materialPath + 'item_flint.png');
    // this.item_flint.scale = 2;

    // this.item_snow_ball = new Framework.Sprite(define.materialPath + 'item_snow_ball.png');
    // this.item_snow_ball.scale = 2;

    // this.item_shovel = new Framework.Sprite(define.materialPath + 'item_shovel.png');
    // this.item_shovel.scale = 2;

    // this.item_gold_ax = new Framework.Sprite(define.materialPath + 'item_gold_ax.png');
    // this.item_gold_ax.scale = 2;

    // this.item_shovel = new Framework.Sprite(define.materialPath + 'item_shovel.png');
    // this.item_shovel.scale = 2;

    // this.item_pigskin = new Framework.Sprite(define.materialPath + 'item_pigskin.png');
    // this.item_pigskin.scale = 2;

    // this.item_fishing_rod = new Framework.Sprite(define.materialPath + 'item_fishing_rod.png');
    // this.item_fishing_rod.scale = 2;

    // this.item_rope = new Framework.Sprite(define.materialPath + 'item_rope.png');
    // this.item_rope.scale = 2;

    // this.item_camp = new Framework.Sprite(define.materialPath + 'item_camp.png');
    // this.item_camp.scale = 2;

    // this.item_campfire = new Framework.Sprite(define.materialPath + 'item_campfire.png');
    // this.item_campfire.scale = 2;

    // this.item_wood = new Framework.Sprite(define.materialPath + 'item_wood.png');
    // this.item_wood.scale = 2;

    // this.item_lamp = new Framework.Sprite(define.materialPath + 'item_lamp.png');
    // this.item_lamp.scale = 2;

    // this.item_bush = new Framework.Sprite(define.materialPath + 'item_bush.png');
    // this.item_bush.scale = 2;

    // this.item_arror = new Framework.Sprite(define.materialPath + 'item_arror.png');
    // this.item_arror.scale = 2;

    // this.item_ice = new Framework.Sprite(define.materialPath + 'item_ice.png');
    // this.item_ice.scale = 2;

    // this.item_firebundle = new Framework.Sprite(define.materialPath + 'item_firebundle.png');
    // this.item_firebundle.scale = 1.5;

    // this.item_spider_web = new Framework.Sprite(define.materialPath + 'item_spider_web.png'); 
    // this.item_spider_web.scale = 2;

    // this.item_grass = new Framework.Sprite(define.materialPath + 'item_grass.png');
    // this.item_grass.scale = 2;

    // this.item_grass_mowed = new Framework.Sprite(define.materialPath + 'item_grass_mowed.png'); 
    // this.item_grass_mowed.scale = 2;
    
    // this.item_flower = new Framework.Sprite(define.materialPath + 'item_flower.png'); 
    // this.item_flower.scale = 2;

    // this.item_flower_pulled = new Framework.Sprite(define.materialPath + 'item_flower_pulled.png'); 
    // this.item_flower_pulled.scale = 2;

    
    // this.item_stone = new Framework.Sprite(define.materialPath + 'item_stone.png');
    // this.item_stone.scale = 2;
    
    // this.item_waikei_homework = new Framework.Sprite(define.materialPath + 'item_waikei_homework.png');
    // this.item_waikei_homework.scale = 2;

    this.backpackPosition = [];
    this.objectPosition = [];
    this.itemList = [];
    this.stackableList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,35,36,37,38];
    
    for(var j = 0; j < 17; j++){
        this.backpackPosition.push({x: (j+5)*64, y: 13*64});
        this.objectPosition.push({x: (j+5), y: 13});
    }
    
    this.addItemBySynthesis = function(item_num){
        var check = this.checkIfStackableExist(item_num);
        if(check == -1){
            switch(item_num){
                case 1:
                    this.itemList.push(new Item_flower());
                    break;
                case 2:
                    this.itemList.push(new Item_spider_web());
                    break;
                case 3:
                    this.itemList.push(new Item_stone());
                    break;
                case 4:
                    this.itemList.push(new Item_branch());
                    break;
                case 5:
                    this.itemList.push(new Item_waikei_homework());
                    break;
                case 6:      
                    this.itemList.push(new Item_grass());
                    break;
                case 7:      
                    this.itemList.push(new Item_wood());
                    break;
                case 8:      
                    this.itemList.push(new Item_flint());
                    break;
                case 9:      
                    this.itemList.push(new Item_gold());
                    break;
                case 10:      
                    this.itemList.push(new Item_pigskin());
                    break;
                case 11:      
                    this.itemList.push(new Item_bee_sting());
                    break;
                case 12:
                    this.itemList.push(new Item_snow_ball());
                    break;
                case 13:
                    this.itemList.push(new Item_rope());
                    break;
                case 14:
                    this.itemList.push(new Item_droplet());
                    break;
                case 15:
                    this.itemList.push(new Item_pixilart());
                    break;
                case 16:
                    this.itemList.push(new Item_ax());
                    break;
                case 17:
                    this.itemList.push(new Item_fishing_rod());
                    break;
                case 18:
                    this.itemList.push(new Item_shovel());
                    break;
                case 19:
                    this.itemList.push(new Item_gold_ax());
                    break;
                case 20:
                    this.itemList.push(new Item_gold_shovel());
                    break;
                case 21:
                    this.itemList.push(new Item_gold_pixilart());
                    break;
                case 22:
                    this.itemList.push(new Item_helmat());
                    break;
                case 23:
                    this.itemList.push(new Item_armor());
                    break;
                case 24:
                    this.itemList.push(new Item_wood_armor());
                    break;
                case 25:
                    this.itemList.push(new Item_spear());
                    break;
                case 26:
                    this.itemList.push(new Item_arror());
                    break;
                case 27:
                    this.itemList.push(new Item_king_wand());
                    break;
                case 28:
                    this.itemList.push(new Item_space_wand());
                    break;
                case 29:
                    this.itemList.push(new Item_fire_wand());
                    break;
                case 30:
                    this.itemList.push(new Item_ice_wand());
                    break;
                case 31:
                    this.itemList.push(new Item_lamp());
                    break;
                case 32:
                    this.itemList.push(new Item_firebundle());
                    break;
                case 33:
                    this.itemList.push(new Item_camp());
                    break;
                case 34:
                    this.itemList.push(new Item_campfire());
                    break;
                case 35:
                    this.itemList.push(new Item_ice());
                    break;
                case 36:
                    this.itemList.push(new Item_bush());
                    break;
                case 37:
                    this.itemList.push(new Item_flower_picked());
                    break;
                case 38:
                    this.itemList.push(new Item_bush());
                    break;
            }
        }else{
            this.itemList[check].amount += 1;
        }
    }

    this.addItemByPick = function(object){
        var check = this.checkIfStackableExist(object.item_num);
        if(check != -1)
            this.itemList[check].amount += object.amount;
        else
            this.itemList.push(object);
    }

    this.checkIfPickAvailable = function(item_num){
        if(this.itemList.length < 17)
            return true;
        else if(item_num == 1){
            for(var i = 0;i < this.itemList.length;i++){
                if(this.itemList[i].item_num == 37)
                    return true;
            }
        }
        else if(item_num == 6){
            for(var i = 0;i < this.itemList.length;i++){
                if(this.itemList[i].item_num == 38)
                    return true;
            }
        }
        else if(this.checkIfStackableExist(item_num) != -1)
            return true;

        return false;
    }
    //1:可合成 -1:材料夠沒空間 0:材料不夠
    this.checkIfSynthesisAvailable = function(material){
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
                if(this.itemList[j].item_num == material[i].item && this.itemList[j].amount == material[i].amount)
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
                if(this.itemList[j].item_num == material[i].item && this.itemList[j].amount >= material[i].amount)
                    check = true;
            }
            if(!check)
                return false;
        }
        return true;
    }

    this.checkIfStackableExist = function(item_num){
        if(this.stackableList.indexOf(item_num) != -1){
            for(var i = 0;i < this.itemList.length;i++){
                if(this.itemList[i].item_num == item_num)
                    return i;
            }
        }
        return -1;
    }

    this.getItemList = function(){
        return this.itemList;
    }

    this.update = function(material){
        for(var i = 0;i < material.length-1;i++){
            for(var j = 0;j <　this.itemList.length;j++){
                if(material[i].item == this.itemList[j].item_num)
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
            this.itemList[i].position = this.objectPosition[i];
            this.itemList[i].draw(ctx);
            console.log(this.itemList[i]);
            // switch(this.itemList[i].item){
            //     case 1:
            //         this.item_flower.position = this.backpackPosition[i];
            //         this.item_flower.draw(ctx);
            //         break;
            //     case 2:
            //         this.item_spider_web.position = this.backpackPosition[i];
            //         this.item_spider_web.draw(ctx);
            //         break;
            //     case 3:
            //         this.item_stone.position = this.backpackPosition[i];
            //         this.item_stone.draw(ctx);
            //         break;
            //     case 4:
            //         this.item_branch.position = this.backpackPosition[i];
            //         this.item_branch.draw(ctx);
            //         break;
            //     case 5:
            //         this.item_waikei_homework.position = this.backpackPosition[i];
            //         this.item_waikei_homework.draw(ctx);
            //         break;
            //     case 6:
            //         this.item_grass.position = this.backpackPosition[i];
            //         this.item_grass.draw(ctx);
            //         break;
            //     case 7:
            //         this.item_wood.position = this.backpackPosition[i];
            //         this.item_wood.draw(ctx);
            //         break;
            //     case 9:
            //         this.item_gold.position = this.backpackPosition[i];
            //         this.item_gold.draw(ctx);
            //         break;
            //     case 13:
            //         this.item_rope.position = this.backpackPosition[i];
            //         this.item_rope.draw(ctx);
            //         break;
            //     case 14:
            //         this.item_droplet.position = this.backpackPosition[i];
            //         this.item_droplet.draw(ctx);
            //         break;
            //     case 15:
            //         this.item_pixilart.position = this.backpackPosition[i];
            //         this.item_pixilart.draw(ctx);
            //         break;
            //     case 16:
            //         this.item_ax.position = this.backpackPosition[i];
            //         this.item_ax.draw(ctx);
            //         break;
            //     case 19:
            //         this.item_gold_ax.position = this.backpackPosition[i];
            //         this.item_gold_ax.draw(ctx);
            //         break;
            //     case 21:
            //         this.item_gold_pixilart.position = this.backpackPosition[i];
            //         this.item_gold_pixilart.draw(ctx);
            //         break;
            //     case 27:
            //         this.item_king_wand.position = this.backpackPosition[i];
            //         this.item_king_wand.draw(ctx);
            //         break;
            //     case 28:
            //         this.item_space_wand.position = this.backpackPosition[i];
            //         this.item_space_wand.draw(ctx);
            //         break;
            //     case 29:
            //         this.item_fire_wand.position = this.backpackPosition[i];
            //         this.item_fire_wand.draw(ctx);
            //         break;
            //     case 30:
            //         this.item_ice_wand.position = this.backpackPosition[i];
            //         this.item_ice_wand.draw(ctx);
            //         break;
            //     case 32:
            //         this.item_firebundle.position = this.backpackPosition[i];
            //         this.item_firebundle.draw(ctx);
            //         break;
            //     case 33:
            //         this.item_camp.position = this.backpackPosition[i];
            //         this.item_camp.draw(ctx);
            //         break;
            //     case 34:
            //         this.item_campfire.position = this.backpackPosition[i];
            //         this.item_campfire.draw(ctx);
            //         break;
            //     default:
            //         ctx.font = "20px Arial";
            //         ctx.fillStyle = "black";
            //         ctx.fillText(this.itemNameArray[this.itemList[i].item-1], this.backpackPosition[i].x, this.backpackPosition[i].y);
            // }
            ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 2.5;
            if(this.stackableList.indexOf(this.itemList[i].item_num) != -1){
                ctx.fillText(this.itemList[i].amount.toString(), this.backpackPosition[i].x, this.backpackPosition[i].y+20);
                ctx.strokeText(this.itemList[i].amount.toString(), this.backpackPosition[i].x, this.backpackPosition[i].y+20);
            }else{
                ctx.fillText(this.itemList[i].durability.toString()+"%", this.backpackPosition[i].x, this.backpackPosition[i].y+20);
                ctx.strokeText(this.itemList[i].durability.toString()+"%", this.backpackPosition[i].x, this.backpackPosition[i].y+20);
            }
        }
    }
};