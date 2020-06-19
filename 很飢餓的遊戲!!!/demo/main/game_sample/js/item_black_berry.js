var Item_black_berry = function() {
    this.item_black_berry = new Framework.Sprite(define.materialPath + 'item_black_berry.png'); 
    this.item_black_berry.scale = 2;
    this.item_num = 54;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_black_berry, 3);
};
Item_black_berry.prototype = new Food_base();