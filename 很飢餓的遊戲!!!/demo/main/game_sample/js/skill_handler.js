var Skill_handler = function() {
    this.url = define.skillAnimationPath + 'fire_wand_level1.png';
    this.fire_wand_level1 = new Framework.AnimationSprite({url:this.url, col:5 , row:3 , loop:false , speed:12}); 
    this.fire_wand_level1.scale = 2;
    this.fire_wand_level1.index = 1;
    this.fire_wand_level1.position = {x:13*64, y:7*64};

    this.position = {x:0, y:0};
    this.magic_time_counter = new Framework.Sprite(define.skillAnimationPath + 'magic_time_counter.png'); 
    this.magic_time_counter.scale = 2;
    
    this.init = function(playerPositionOnMap){
        this.position = playerPositionOnMap;
        this.magic_time_counter.position = {x: this.position.x*64, y: this.position.y*64};
    }
    this.update = function(playerPositionOnMap){
        this.position = playerPositionOnMap;
        this.magic_time_counter.position = {x: 13*64, y: 7*64-32};
    }

    this.start = function(){
        // this.fire_wand_level1.start({ from: this.playerDirection * 3, to: this.playerDirection * 3 + 2, loop: true});

        // this.magic_time_counter.draw(ctx);
    }
    
    this.draw = function(ctx){
        this.magic_time_counter.draw(ctx);
    }

};

// Object.defineProperty(Skill_handler.prototype, 'position', {
//     set: function(newValue) {
//         // this.mapPosition = newValue;
//         // this.item_fire_wand.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
//     }
// }); 
