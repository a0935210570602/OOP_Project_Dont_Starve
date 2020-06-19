var Player_hide_animation = function() {
    this.url = define.skillAnimationPath + 'Recovery1.png';
    this.hideAnimation = new Framework.AnimationSprite({url:this.url, col:5 , row:6 , loop:false , speed:12});
    this.hideAnimation.scale = 1;
    this.hideAnimation.position = {x:11*64+32, y:5*64-24};
    this.hideAnimation.index = 0;
    this.update = function(){
        this.hideAnimation.update();
    }
    this.draw = function(ctx){
        this.hideAnimation.draw(ctx);
    }
    this.start = function(){  
        this.hideAnimation.start({ from: 0, to: 29, loop: false});
    }
};