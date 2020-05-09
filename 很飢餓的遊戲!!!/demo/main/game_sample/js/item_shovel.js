var Item_shovel = function() {
    this.item_shovel = new Framework.Sprite(define.materialPath + 'item_shovel.png'); 
    this.item_shovel.scale = 0.8;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 18;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "equipment";
    //可疊加物件有amount 不可疊加有durability
    this.durability = 100;
    this.place = "hand";
    this.item_can_be_picked = true;
    
    this.attack_point = 1;
    this.magic_attack_point = 0;
    this.arror_attack_point = 0

    this.update = function(){
        this.status = false;
    }

    this.reduceDurability = function(){
        this.durability -= 10;
    }

    this.draw = function(ctx){
        this.item_shovel.draw(ctx);
    }

};

Object.defineProperty(Item_shovel.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_shovel.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
