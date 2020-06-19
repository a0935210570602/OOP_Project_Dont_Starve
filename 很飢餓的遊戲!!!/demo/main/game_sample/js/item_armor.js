var Item_armor = function() {
    this.item_armor = new Framework.Sprite(define.materialPath + 'item_armor.png'); 
    this.item_armor.scale = 0.8;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 100;
    this.item_num = 23;
    this.item_can_be_picked = true;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "equipment";
    //可疊加物件有amount 不可疊加有durability
    this.durability = 100;
    this.place = "body";
    this.deffense_point = 40;
    this.update = function(){
        this.status = false;
    }
    this.draw = function(ctx){
        this.item_armor.draw(ctx);
    }
    this.reduceDurability = function(){
        this.durability -= 2;
    }
};
Object.defineProperty(Item_armor.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_armor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 