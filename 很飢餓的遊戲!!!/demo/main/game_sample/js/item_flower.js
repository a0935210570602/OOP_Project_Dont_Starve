var Item_flower = function() {
    this.item_flower = new Framework.Sprite(define.materialPath + 'item_flower.png'); 
    this.item_flower_pulled = new Framework.Sprite(define.materialPath + 'item_flower_pulled.png'); 
    this.item_flower.scale = 2;
    this.item_flower_pulled.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = true;
    this.item_num = 1;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "plant";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    this.item_can_be_picked = true;
    this.regeneration_time = 3000;
    this.update = function(){
        this.status = false;
        setTimeout(()=>{  this.status = true}, this.regeneration_time);
    }
    this.draw = function(ctx){
        if(this.status)
            this.item_flower.draw(ctx);
        else
            this.item_flower_pulled.draw(ctx);
    }
};
Object.defineProperty(Item_flower.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_flower.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.item_flower_pulled.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 