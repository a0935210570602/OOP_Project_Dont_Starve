var Food_base = function() {
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    //可疊加物件有amount 不可疊加有durability
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_can_be_picked = true;
    this.type = "food";
    this.init = function(food, amount){
        this.food = food;
        this.amount = amount;
    }
    this.draw = function(ctx){
        this.food.draw(ctx);
    }
};
Object.defineProperty(Food_base.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.food.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 