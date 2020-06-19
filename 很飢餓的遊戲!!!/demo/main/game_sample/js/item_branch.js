var Item_branch = function() {
    this.item_branch = new Framework.Sprite(define.materialPath + 'item_branch.png'); 
    this.item_branch.scale = 0.8;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_can_be_picked = true;
    this.item_num = 4;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "material";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    this.draw = function(ctx){
        this.item_branch.draw(ctx);
    }
};
Object.defineProperty(Item_branch.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_branch.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 