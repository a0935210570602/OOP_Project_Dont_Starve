var Backpack = function() {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;
    this.objectFactory = new Object_factory();
    this.backpackPosition = [];
    this.objectPosition = [];
    this.itemList = [];
    this.stackableList = [1,2,4,5,6,7,8,9,10,11,12,13,14,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];
    this.selectedIndex = -1;
    for(var j = 0; j < 17; j++){
        this.backpackPosition.push({x: (j+5)*64, y: 13*64});
        this.objectPosition.push({x: (j+5), y: 13});
    }
    this.getSelectedItem= function(){
        if(this.selectedIndex == -1)
            return null;
        if( this.itemList[this.selectedIndex] != null)
            return this.itemList[this.selectedIndex];
        else
            return null;
    }
    this.dropSelectedItem = function(){
        if(this.selectedIndex != -1)
            this.arrayRemoveByIndex(this.selectedIndex);
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
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Tool",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_pixilart.png'),
                            attackPoint: 1,
                            itemNumber: 15,
                            reduceDurability: function(visitor){visitor.visitBasicTool(this)}
                        }
                    ));
                    break;
                case 16:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Tool",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_ax.png'),
                            attackPoint: 1,
                            itemNumber: 16,
                            reduceDurability: function(visitor){visitor.visitBasicTool(this)}
                        }
                    ));
                    break;
                case 17:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Tool",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_fishing_rod.png'),
                            attackPoint: 1,
                            itemNumber: 17,
                            reduceDurability: function(visitor){visitor.visitBasicTool(this)}
                        }
                    ));
                    break;
                case 18:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Tool",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_shovel.png'),
                            attackPoint: 1,
                            itemNumber: 18,
                            reduceDurability: function(visitor){visitor.visitBasicTool(this)}
                        }
                    ));
                    break;
                case 19:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Tool",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_gold_ax.png'),
                            attackPoint: 2,
                            itemNumber: 19,
                            reduceDurability: function(visitor){visitor.visitGoldenTool(this)}
                        }
                    ));
                    break;
                case 20:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Tool",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_gold_shovel.png'),
                            attackPoint: 2,
                            itemNumber: 20,
                            reduceDurability: function(visitor){visitor.visitGoldenTool(this)}
                        }
                    ));
                    break;
                case 21:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Tool",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_gold_pixilart.png'),
                            attackPoint: 2,
                            itemNumber: 21,
                            reduceDurability: function(visitor){visitor.visitGoldenTool(this)}
                        }
                    ));
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
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Weapon",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_spear.png'),
                            attack: [3,0,0],
                            itemNumber: 25,
                            scale: 0.8,
                            reduceDurability: function(visitor){visitor.visitSpear(this)}
                        }
                    ));
                    break;
                case 26:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Weapon",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_arror.png'),
                            attack: [0,0,3],
                            itemNumber: 26,
                            scale: 2,
                            reduceDurability: function(visitor){visitor.visitArror(this)}
                        }
                    ));
                    break;
                case 27:
                    this.itemList.push(new Item_king_wand());
                    break;
                case 28:
                    this.itemList.push(new Item_space_wand());
                    break;
                case 29:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Weapon",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_fire_wand.png'),
                            attack: [0,2,0],
                            itemNumber: 29,
                            scale: 0.8,
                            reduceDurability: function(visitor){visitor.visitWand(this)}
                        }
                    ));
                    break;
                case 30:
                    this.itemList.push(this.objectFactory.createObject(
                        {
                            type: "Weapon",
                            imagePath: new Framework.Sprite(define.materialPath + 'item_ice_wand.png'),
                            attack: [0,2,0],
                            itemNumber: 30,
                            scale: 0.8,
                            reduceDurability: function(visitor){visitor.visitWand(this)}
                        }
                    ));
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
                    this.itemList.push(new Item_grass_picked());
                    break;
            }
        }else{
            this.itemList[check].amount += 1;
        }
    }
    this.addItemByObject = function(object){
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
        else if(item_num == 36){
            for(var i = 0;i < this.itemList.length;i++){
                if(this.itemList[i].item_num == 39)
                    return true;
            }
        }
        else if(item_num == -4){
            for(var i = 0;i < this.itemList.length;i++){
                if(this.itemList[i].item_num == 4)
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
    this.getItem = function(index){
        return this.itemList[index];
    }
    this.getItemListLength = function(){
        return this.itemList.length;
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
    this.updateByEat = function(index){
        this.itemList[index].amount -= 1;
        if(this.itemList[index].amount == 0)
            this.arrayRemoveByIndex(index);
    }
    this.arrayRemoveByIndex = function(i){
        this.itemList.splice(i, 1);
    }
    this.arrayRemoveEmpty = function() {
        var i = 0;
        while(i < this.itemList.length) 
            if (this.itemList[i].amount == 0)
                this.itemList.splice(i, 1);
            else 
                i++;
    }
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
            ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.strokeStyle = 'blue';
            ctx.textAlign = 'center';
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