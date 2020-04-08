
var Item_stone = function() {
    this.item_stone = new Framework.Sprite(define.materialPath + 'item_stone.png'); 
    this.item_stone.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 3;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物
    this.type = "material";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;

    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        if(this.status)
            this.item_stone.draw(ctx);
    }

};

Object.defineProperty(Item_stone.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_stone.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
