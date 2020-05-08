var Item_flower_picked = function() {
    this.item_flower_picked = new Framework.Sprite(define.materialPath + 'item_flower_picked.png'); 
    this.item_flower_picked.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 37;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "food";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    this.item_can_be_picked = true;
    this.hungerAddition = 20;
    this.healthAddition = 20;

    this.draw = function(ctx){
        this.item_flower_picked.draw(ctx);
    }

};

Object.defineProperty(Item_flower_picked.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_flower_picked.position = {x: this.mapPosition.x, y: this.mapPosition.y };
    }
}); 
