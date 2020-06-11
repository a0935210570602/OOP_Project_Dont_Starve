var Monster_cow = function(map) {
    this.monster_cow = new Framework.AnimationSprite({url:define.materialPath + 'cow.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_cow.scale = 1.3;
    this.monster_cow.index = 1;

    this.monster_cow_die = new Framework.AnimationSprite({url:define.materialPath + 'cow_die.png', col:3 , row:1 , loop:false , speed:12}); 
    this.monster_cow_die.scale = 1.2;

    this.name = "閃耀魔眼";
    this.attack = 5;
    this.health = 2000;
    this.maxHealth = 2000;

    //地圖，圖片，walkSpeed
    this.init(map, this.monster_cow, this.monster_cow_die, 8);
    this.drop = function(){
        var random = Math.floor(Math.random()*2);
        if(random == 0)
            return new Bat_wing();
        if(random == 1)
            return new Item_monster_meat();
    }
};
Monster_cow.prototype = new Monster_base();
