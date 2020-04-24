var Skill_handler = function() {
    this.url = define.skillAnimationPath + 'fire_wand_level1.png';

    this.callBackAnimation = function(){
        console.log("callBackAnimation");
        this.trigger = false;
    }
    this.fire_wand_level1 = new Framework.AnimationSprite({url:this.url, col:5 , row:3 , loop:false , speed:8}); 
    this.fire_wand_level1.scale = 1.25;
    this.fire_wand_level1.index = 0;
    this.fire_wand_level1.position = {x:13*64-64*3, y:7*64};

    this.magic_time_counter = new Framework.Sprite(define.skillAnimationPath + 'magic_time_counter.png'); 
    this.magic_time_counter.scale = 2;
    
    this.init = function(playerPositionOnMap){
        this.position = playerPositionOnMap;
        this.magic_time_counter.position = {x: this.position.x*64, y: this.position.y*64};
    }
    
    this.update = function(playerPositionOnMap){
        this.fire_wand_level1.update();
        this.position = playerPositionOnMap;
        this.magic_time_counter.position = {x: 13*64, y: 7*64-32};
    }

    this.start = function(playerWalkDirection){
        this.trigger = true;
        this.fire_wand_level1.position = {x: (13+playerWalkDirection.x*3)*64, y: (7+playerWalkDirection.y*3)*64};
        this.fire_wand_level1.start({ from: 0, to: 14, loop: false});
    }
    
    this.draw = function(ctx){
        this.magic_time_counter.draw(ctx);
    }

    this.skillDraw = function(ctx){
        this.fire_wand_level1.draw(ctx);
    }

};