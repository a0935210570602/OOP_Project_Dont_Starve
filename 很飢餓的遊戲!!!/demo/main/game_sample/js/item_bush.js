var Item_bush = function() {
    this.item_bush = new Framework.Sprite(define.materialPath + 'item_bush.png'); 
    this.item_bush_picked = new Framework.Sprite(define.materialPath + 'item_bush_picked.png'); 
    this.item_bush.scale = 2;
    this.item_bush_picked.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = true;
    this.item_num = 36;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "material";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    this.item_can_be_picked = false;
    this.regeneration_time = 3000;
    this.reset = function(){
        setTimeout(()=>{  this.status = true }, this.regeneration_time);
    }
    this.update = function(){
        this.status = false;
        this.reset();
    }
    this.draw = function(ctx){
        if(this.status)
            this.item_bush.draw(ctx);
        else
            this.item_bush_picked.draw(ctx);
    }
};
Object.defineProperty(Item_bush.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_bush.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.item_bush_picked.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 