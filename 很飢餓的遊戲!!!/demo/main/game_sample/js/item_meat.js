var Item_meat = function() {
    this.item_meat = new Framework.Sprite(define.materialPath + 'Meat.png'); 
    this.item_meat.scale = 0.8;
    this.item_num = 52;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_meat, 1);
};
Item_meat.prototype = new Food_base();