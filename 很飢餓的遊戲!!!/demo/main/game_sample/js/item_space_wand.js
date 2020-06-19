var Item_space_wand = function() {
    this.item_space_wand = new Framework.Sprite(define.materialPath + 'item_space_wand.png'); 
    this.item_space_wand.scale = 0.8;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 28;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "equipment";
    //可疊加物件有amount 不可疊加有durability
    this.durability = 100;
    this.place = "hand";
    this.attack_point = 0;
    this.magic_attack_point = 60;
    this.arror_attack_point = 0;
    this.item_can_be_picked = true;
    this.update = function(){
        this.status = false;
    }
    this.draw = function(ctx){
        this.item_space_wand.draw(ctx);
    }
    this.reduceDurability = function(){
        this.durability -= 100;
    }
};
Object.defineProperty(Item_space_wand.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_space_wand.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 