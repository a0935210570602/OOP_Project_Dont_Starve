var Skill_handler = function() {
    this.url = define.skillAnimationPath + 'fire_wand_level1.png';
    this.fire_wand_level1 = new Framework.AnimationSprite({url:this.url, col:5 , row:3 , loop:false , speed:12}); 
    this.fire_wand_level1.scale = 1.25;
    this.fire_wand_level1.index = 0;
    this.fire_wand_level1.position = {x:13*64-64*3, y:7*64};
    this.isStart = false;

    this.init = function(){
    }
    
    this.update = function(){
        this.fire_wand_level1.update();
    }

    this.start = function(playerWalkDirection,playerPositionOnMap){
        this.isStart = true;   
        this.fire_wand_level1.mapPosition = {x: playerPositionOnMap.x+playerWalkDirection.x*3, y: playerPositionOnMap.y+playerWalkDirection.y*3};
        this.fire_wand_level1.start({ from: 0, to: 14, loop: false});
    }

    this.draw = function(ctx){
        this.fire_wand_level1.draw(ctx);
    }

};