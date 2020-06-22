var Monster_bee = function(map) {
    this.monster_bee = new Framework.AnimationSprite({url:define.materialPath + 'bee.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_bee.scale = 1.2;
    this.monster_bee.index = 1;
    this.monster_bee_die = new Framework.AnimationSprite({url:define.materialPath + 'bee.png', col:3 , row:4 , loop:false , speed:12}); 
    this.monster_bee_die.scale = 1.2;
    this.monster_tocan = new Framework.Sprite(define.materialPath + 'bee_tocan.png'); 
    this.monster_tocan.scale = 0.8; 
    this.name = "蜂哥";
    this.attack = 60;
    this.health = 1000;
    this.maxHealth = 1000;
    //地圖，圖片，walkSpeed
    this.init(map, this.monster_bee, this.monster_bee_die, 8);
    this.drop = function(){
        var random = Math.floor(Math.random()*2);
        if(random == 0)
            return new Item_bee_sting();
        if(random == 1)
            return new Item_honey();
    }
};
Monster_bee.prototype = new Monster_base();