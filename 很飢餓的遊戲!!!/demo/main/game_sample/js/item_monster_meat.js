var Item_monster_meat = function() {
    this.item_monster_meat = new Framework.Sprite(define.materialPath + 'Monster_Meat.png'); 
    this.item_monster_meat.scale = 0.8;
    this.item_num = 53;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_monster_meat, 1);
};
Item_monster_meat.prototype = new Food_base();