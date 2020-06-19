var Item_fish = function() {
    this.item_fish = new Framework.Sprite(define.materialPath + 'item_fish.png'); 
    this.item_fish.scale = 0.8;
    this.item_num = 49;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_fish, 1);
};
Item_fish.prototype = new Food_base();