var Item_honey = function() {
    this.item_honey = new Framework.Sprite(define.materialPath + 'Honey.png'); 
    this.item_honey.scale = 0.8;
    this.item_num = 51;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_honey, 2);
};
Item_honey.prototype = new Food_base();