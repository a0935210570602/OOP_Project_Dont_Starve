var Monster_pig = function(map) {
    this.monster_pig = new Framework.AnimationSprite({url:define.materialPath + 'pig.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_pig.scale = 1.3;
    this.monster_pig.index = 1;

    this.monster_pig_die = new Framework.AnimationSprite({url:define.materialPath + 'pig_die.png', col:3 , row:1 , loop:false , speed:12}); 
    this.monster_pig_die.scale = 1.2;

    this.name = "小豬";
    this.attack = 5;
    this.health = 2000;
    this.maxHealth = 2000;

    //地圖，圖片，walkSpeed
    this.init(map, this.monster_pig, this.monster_pig_die, 8);
};
Monster_pig.prototype = new Monster_base();
