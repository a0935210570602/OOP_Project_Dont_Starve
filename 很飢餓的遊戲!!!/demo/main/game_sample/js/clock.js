var Clock = function() {
    this.clock = [];
    this.timelevel = new Framework.Sprite(define.materialPath + 'timelevel.png'); 
    this.day_board = new Framework.Sprite(define.materialPath + 'Home_Sign.png'); 
    this.day_board.scale = 3;
    this.day_board.position = {x:22.2*64, y:3.7*64}

    this.timelevel.scale = 4;
    this.timelevel.position = {x: 23.75*64, y: 2*64};
    for(var i=0;i<3;i++){
        var clock_child = new Framework.Sprite(define.materialPath + 'clock' + i + '.png'); 
        clock_child.scale = 2;
        clock_child.position = {x: 22*64, y: 2*64};
        this.clock.push(clock_child);
    }
    this.status = 0;
    this.currentTime = 192;
    this.regeneration_time = 200;
    this.day = 1;
    
    this.init = function(){
        this.audio = new Framework.Audio({
            morning:{
                mp3: define.musicPath + 'Hot_Heat.mp3'
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, night:{
                mp3: define.musicPath + 'night.mp3'
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, afternoon:{
                mp3: define.musicPath + '遊戲王經典配樂.mp3'
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }
        });
        this.audio.play({name: 'morning', loop: true});
        this.decrease();
    }
    this.decrease = function(){
        // console.log("decrease");
        this.audio = new Framework.Audio({
            morning:{
                mp3: define.musicPath + 'Hot_Heat.mp3'
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, night:{
                mp3: define.musicPath + 'night.mp3'
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, afternoon:{
                mp3: define.musicPath + '遊戲王經典配樂.mp3'
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }
        });
        setTimeout(()=>{
            this.currentTime -= 1;
            if(this.currentTime <= 0)
            {
                this.currentTime = 192;
                if(!this.music_stop){
                    if( this.status == 0){
                        this.audio.stopAll();
                        this.audio.play({name: 'afternoon', loop: true});
                    }else if( this.status == 1){
                        this.audio.stopAll();
                        this.audio.play({name: 'night', loop: true});
                    }else{
                        this.audio.stopAll();
                        this.audio.play({name: 'morning', loop: true});
                    }
                }
                this.status ++;
                if(this.status >=3){
                    this.status = 0;
                    this.day += 1;
                }
            }
            this.decrease();
        }, this.regeneration_time);
    }

    this.stopMusic = function(music_stop){
        this.music_stop = music_stop;
    }

    this.draw = function(ctx){
        ctx.beginPath();
        ctx.rect(1290, 20, 300, 290);
        ctx.fillStyle = "#BEBEBE";
        ctx.fill();

        this.day_board.draw(ctx);

        ctx.beginPath();
        ctx.rect(23.6*64, 0.5*64, 16, 192);
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(23.6*64, 0.5*64, 16, this.currentTime);
        ctx.fillStyle = "black";
        ctx.fill();

        this.timelevel.draw(ctx);
        this.clock[this.status].draw(ctx);

        ctx.font = '25pt Times New Roman';
        ctx.fillStyle = 'yellow';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.strokeText("Day: " + this.day, 22.2*64, 4.1*64+20);
    }
};