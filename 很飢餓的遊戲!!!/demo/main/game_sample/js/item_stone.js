var Item_stone = function() {
    this.item_stone = new Framework.Sprite(define.materialPath + 'item_stone.png'); 
    this.item_stone_dig = new Framework.Sprite(define.materialPath + 'item_stone_dig.png'); 
    this.item_stone.scale = 2;
    this.item_stone_dig.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = false;
    this.isRegenerate = false;
    this.item_num = 3;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "material";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    this.count = 0;
    this.item_can_be_picked = true;
    this.update = function(){
        this.count += 1;
    }
    this.draw = function(ctx){
        if(this.count < 3)
            this.item_stone.draw(ctx);
        else
            this.item_stone_dig.draw(ctx);
    }
};
Object.defineProperty(Item_stone.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_stone.position = {x: this.mapPosition.x * 64 + 30, y: this.mapPosition.y * 64};
        this.item_stone_dig.position = {x: this.mapPosition.x * 64 + 30, y: this.mapPosition.y * 64};
    }
}); 