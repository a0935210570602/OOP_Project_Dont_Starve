var Spear_handler = function() {
    this.url = define.skillAnimationPath + 'Cure4.png';
    this.spear = new Framework.AnimationSprite({url:this.url, col:5 , row:3 , loop:false , speed:18}); 
    this.spear.scale = 0.5;
    this.spear.index = 0;
    this.mapPosition;
    this.spear.position = {x:0, y:0};
    this.init = function(){
    }
    this.update = function(){
        this.spear.update();
    }
    this.start = function(playerWalkDirection,playerPositionOnMap){  
        this.mapPosition = {x: playerPositionOnMap.x+playerWalkDirection.x, y: playerPositionOnMap.y+playerWalkDirection.y};
        this.spear.start({ from: 0, to: 3, loop: false});
    }
    this.draw = function(ctx){
        this.spear.draw(ctx);
    }
};