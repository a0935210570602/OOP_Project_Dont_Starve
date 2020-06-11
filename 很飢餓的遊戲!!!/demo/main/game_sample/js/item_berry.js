var Item_berry = function() {
    this.item_berry = new Framework.Sprite(define.materialPath + 'item_berry.png'); 
    this.item_berry.scale = 2;
    this.item_num = 39;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_berry, 3);
};
Item_berry.prototype = new Food_base();