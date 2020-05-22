var Level_up_animation = function() {
    this.url = define.materialPath + 'levelup.png';
    this.level_up_animation = new Framework.AnimationSprite({url:this.url, col:5 , row:2 , loop:false , speed:5}); 
    this.level_up_animation.scale = 1;
    this.level_up_animation.position = {x:12*64, y:5.5*64};
    // this.audio = new Framework.Audio({
    //     levelup: {
    //         mp3: define.musicPath + 'levelup.mp3',
    //         //ogg: define.musicPath + 'kick2.ogg',
    //         //wav: define.musicPath + 'kick2.wav'
    //     }, song1:{
    //         mp3: define.musicPath + 'easy.mp3',
    //         //ogg: define.musicPath + 'Hot_Heat.ogg',
    //         //wav: define.musicPath + 'Hot_Heat.wav'
    //     }, die_scream:{
    //         mp3: define.musicPath + '女慘叫.mp3',
    //         //ogg: define.musicPath + 'Hot_Heat.ogg',
    //         //wav: define.musicPath + 'Hot_Heat.wav'
    //     }, monster_attack:{
    //         mp3: define.musicPath + 'monster_attack.mp3',
    //         //ogg: define.musicPath + 'Hot_Heat.ogg',
    //         //wav: define.musicPath + 'Hot_Heat.wav'
    // }
    // });

    this.init = function(){
    }
    
    this.update = function(){
        this.level_up_animation.update();
    }
    
    this.draw = function(ctx){
        this.level_up_animation.draw(ctx);
    }

    this.start = function(){  
        this.level_up_animation.start({ from: 0, to: 9, loop: false});
        // this.audio.play({name: 'levelup', loop: false});
        // console.log("start");
    }


};