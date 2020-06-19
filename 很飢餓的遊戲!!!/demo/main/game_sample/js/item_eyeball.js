var Item_eyeball = function() {
    this.item_eyeball = new Framework.Sprite(define.materialPath + 'Eyeball.png'); 
    this.item_eyeball.scale = 0.8;
    this.item_num = 50;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_eyeball, 1);
};
Item_eyeball.prototype = new Food_base();