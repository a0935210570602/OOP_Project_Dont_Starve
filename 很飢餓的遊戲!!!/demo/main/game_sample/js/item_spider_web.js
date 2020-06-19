var Item_spider_web = function() {
    this.item_spider_web = new Framework.Sprite(define.materialPath + 'item_spider_web.png'); 
    this.item_spider_web.scale = 0.8;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 2;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "material";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    this.item_can_be_picked = true;
    this.update = function(){
        this.status = false;
    }
    this.draw = function(ctx){
        if(this.status)
            this.item_spider_web.draw(ctx);
    }
};
Object.defineProperty(Item_spider_web.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_spider_web.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 