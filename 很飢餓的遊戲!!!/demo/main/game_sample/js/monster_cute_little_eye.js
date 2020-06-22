var Monster_cute_little_eye = function(map) {
    this.monster_cute_little_eye = new Framework.AnimationSprite({url:define.materialPath + 'monster_cute_litter_eye.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_cute_little_eye.scale = 1.5;
    this.monster_cute_little_eye.index = 1;
    this.monster_cute_little_eye_die = new Framework.AnimationSprite({url:define.materialPath + 'eye_die.png', col:3 , row:1 , loop:true , speed:12}); 
    this.monster_cute_little_eye_die.scale = 1.2;
    this.monster_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
    this.monster_tocan.scale = 1.2; 
    this.name = "大眼仔仔";
    this.attack = 55;
    this.health = 1000;
    this.maxHealth = 1000;
    //地圖，圖片，walkSpeed
    this.init(map, this.monster_cute_little_eye, this.monster_cute_little_eye_die, 8);
    this.drop = function(){
        var random = Math.floor(Math.random()*2);
        if(random == 0)
            return new Item_eyeball();
        if(random == 1)
            return new Item_droplet();
    }
};
Monster_cute_little_eye.prototype = new Monster_base();