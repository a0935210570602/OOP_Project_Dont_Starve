var Item_berry = function() {
    this.item_berry = new Framework.Sprite(define.materialPath + 'item_berry.png'); 
    this.item_berry.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 39;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "food";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 3;
    this.item_can_be_picked = true;

    this.hungerAddition = 20;
    this.healthAddition = 20;

    // this.init = function(){
    //     this.amount = 3;
    // }

    this.draw = function(ctx){
        this.item_berry.draw(ctx);
    }

    this.getRandomInt = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

};

Object.defineProperty(Item_berry.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_berry.position = {x: this.mapPosition.x, y: this.mapPosition.y };
    }
}); 
