var Item_grass_growed_dig = function() {
    this.item_grass_growed_dig = new Framework.Sprite(define.materialPath + 'item_grass_growed_dig.png'); 
    this.item_grass_growed_dig.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 46;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "plant";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    this.item_can_be_picked = true;
    this.update = function(){
    }
    this.draw = function(ctx){
        this.item_grass_growed_dig.draw(ctx);
    }
};
Object.defineProperty(Item_grass_growed_dig.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_grass_growed_dig.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 