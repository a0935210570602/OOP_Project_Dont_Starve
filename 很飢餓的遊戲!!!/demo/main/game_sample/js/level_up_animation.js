var Level_up_animation = function() {
    this.url = define.materialPath + 'levelup.png';
    this.level_up_animation = new Framework.AnimationSprite({url:this.url, col:5 , row:2 , loop:false , speed:5}); 
    this.level_up_animation.scale = 1;
    this.level_up_animation.position = {x:12*64, y:5.5*64};
    this.update = function(){
        this.level_up_animation.update();
    }
    this.draw = function(ctx){
        this.level_up_animation.draw(ctx);
    }
    this.start = function(){  
        this.level_up_animation.start({ from: 0, to: 9, loop: false});
    }
};