var Monster_cute_little_eye = function(map, options) {
    
    this.monster_cute_little_eye = new Framework.AnimationSprite({url:define.materialPath + 'monster_cute_litter_eye.png', col:3 , row:4 , loop:true , speed:12}); 
    this.monster_cute_little_eye.scale = 1.5;
    this.monster_cute_little_eye.index = 1;
    this.monster_cute_little_eye_die = new Framework.AnimationSprite({url:define.materialPath + 'eye_die.png', col:3 , row:1 , loop:true , speed:12}); 
    this.monster_cute_little_eye_die.scale = 1.2;
    
    this.name = "大眼仔仔";
    this.attack = 5;
    this.health = 2000;
    this.maxHealth = 2000;

    //地圖 圖片 walkSpeed
    this.init(map, this.monster_cute_little_eye, this.monster_cute_little_eye_die, 8);
};
Monster_cute_little_eye.prototype = new Monster_base();

Object.defineProperty(Monster_cute_little_eye.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.spritePosition = {x:this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

Object.defineProperty(Monster.prototype, 'isDead', {
    get: function() {
        return this.isdead;
    }
}); 