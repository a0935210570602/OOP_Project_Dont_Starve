var Item_gold_pixilart = function() {
    this.item_gold_pixilart = new Framework.Sprite(define.materialPath + 'item_gold_pixilart.png'); 
    this.item_gold_pixilart.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 21;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物
    this.type = "equipment";
    //可疊加物件有amount 不可疊加有durability
    this.durability = 100;
    this.place = "hand";
    this.inEquipmentbar = false;
    this.item_can_be_picked = true;
    this.attack_point = 2;

    this.update = function(){
        this.status = false;
    }

    this.reduceDurability = function(){
        this.durability -= 5;
    }

    this.draw = function(ctx){
        this.item_gold_pixilart.draw(ctx);
    }

};

Object.defineProperty(Item_gold_pixilart.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_gold_pixilart.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
