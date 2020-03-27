var Backpack = function() {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;

    this.item_branch = new Framework.Sprite(define.materialPath + 'item_branch.png');
    this.item_branch.scale = 2;

    this.item_spider_web = new Framework.Sprite(define.materialPath + 'item_spider_web.png'); 
    this.item_spider_web.scale = 2;

    this.item_grass = new Framework.Sprite(define.materialPath + 'item_grass.png');
    this.item_grass.scale = 2;
    
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
            this.itemList.push({itemNumber: item_num, amount: 1});
        }else{
            this.itemList[check].amount += 1;
        }
    }

    this.checkIfExist = function(item_num){
        for(var i = 0;i < this.itemList.length; i++){
            if(this.itemList[i].itemNumber == item_num)
                return i;
        }
        return -1;
    }

    this.update = function(){
        
    }

    //1:小花 2:蜘蛛網 3:石頭 4:樹枝 5:偉凱的作業簿 6:草
    this.draw = function(ctx){
        for(var j = 0; j < 17; j++){
            this.backpack.position = this.backpackPosition[j];
            this.backpack.draw(ctx);
        }

        for(var i = 0; i < this.itemList.length; i++){
            switch(this.itemList[i].itemNumber){
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
            }

            ctx.font = "25px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(this.itemList[i].amount.toString(), this.backpackPosition[i].x, this.backpackPosition[i].y+10);
        }
    }
};