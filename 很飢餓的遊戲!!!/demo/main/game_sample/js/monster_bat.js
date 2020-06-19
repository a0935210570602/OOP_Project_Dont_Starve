var Monster_bat = function(map) {
    this.monster_bat = new Framework.AnimationSprite({url:define.materialPath + 'bat.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_bat.scale = 1.3;
    this.monster_bat.index = 1;
    this.monster_bat_die = new Framework.AnimationSprite({url:define.materialPath + 'bat_die.png', col:3 , row:1 , loop:false , speed:12}); 
    this.monster_bat_die.scale = 1.2;
    this.monster_tocan = new Framework.Sprite(define.materialPath + 'bat_tocan.png'); 
    this.monster_tocan.scale = 0.8;
    this.name = "小蝙蝠";
    this.attack = 80;
    this.health = 1000;
    this.maxHealth = 1000;
    //地圖，圖片，walkSpeed
    this.init(map, this.monster_bat, this.monster_bat_die, 8);
    this.drop = function(){
        var random = Math.floor(Math.random()*2);
        if(random == 0)
            return new Bat_wing();
        if(random == 1)
            return new Item_monster_meat();
    }
};
Monster_bat.prototype = new Monster_base();