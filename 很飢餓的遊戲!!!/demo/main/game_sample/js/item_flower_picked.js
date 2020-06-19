var Item_flower_picked = function() {
    this.item_flower_picked = new Framework.Sprite(define.materialPath + 'item_flower_picked.png'); 
    this.item_flower_picked.scale = 2;
    this.item_num = 37;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_flower_picked, 1);
};
Item_flower_picked.prototype = new Food_base();