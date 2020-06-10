var Monster_bat = function(map) {
    this.monster_bat = new Framework.AnimationSprite({url:define.materialPath + 'bat.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_bat.scale = 1.3;
    this.monster_bat.index = 1;

    this.monster_bat_die = new Framework.AnimationSprite({url:define.materialPath + 'bat_die.png', col:3 , row:1 , loop:false , speed:12}); 
    this.monster_bat_die.scale = 1.2;

    this.name = "小蝙蝠";
    this.attack = 5;
    this.health = 2000;
    this.maxHealth = 2000;

    //地圖，圖片，walkSpeed
    this.init(map, this.monster_bat, this.monster_bat_die, 8);
};
Monster_bat.prototype = new Monster_base();
