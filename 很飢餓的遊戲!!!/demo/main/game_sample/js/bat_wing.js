var Bat_wing = function() {
    this.item_bat_wing = new Framework.Sprite(define.materialPath + 'Batilisk_Wing.png'); 
    this.item_bat_wing.scale = 0.8;
    this.item_num = 49;
    this.hungerAddition = 20;
    this.healthAddition = 20;
    //圖片，數量
    this.init(this.item_bat_wing, 1);
};
Bat_wing.prototype = new Food_base();