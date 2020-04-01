var Clock = function() {
    this.clock = [];
    this.timelevel = new Framework.Sprite(define.materialPath + 'timelevel.png'); 
    this.timelevel.scale = 4;
    this.timelevel.position = {x: 23.75*64, y: 2*64};
    for(var i=0;i<3;i++){
        var clock_child = new Framework.Sprite(define.materialPath + 'clock' + i + '.png'); 
        clock_child.scale = 2;
        clock_child.position = {x: 22*64, y: 2*64};
        this.clock.push(clock_child);
    }
    this.status = 0;
    this.isRegenerate = true;
    this.currentTime = 192;
    this.regeneration_time = 300;

    var time_status = this;
    this.init = function(){
        this.decrease();
    }

    this.decrease = function(){
        var timeInterval = setInterval(()=>{
            this.currentTime -= 1;
            if(this.currentTime == 0)
            {
                this.currentTime = 200;
                this.status ++;
                if(this.status >=3){
                    this.status = 0;
                }
                this.decrease();
            }
        }, this.regeneration_time);
    }

    // this.setTime = function(){
    //     setTimeout(()=>{  
    //         this.status ++;
    //         if(this.status>=3)
    //         this.status = 0;
    //         this.setTime();
    //     }, this.regeneration_time);
    // }    
        // var setTime_Interval = setTimeout(()=>{
        //     this.currentTime = this.currentTime - 5;
        //     time_status.draw(Framework.Game._context);
        //     if(this.status>=3)
        //         this.status = 0;
        //     this.setTime();
        // }, this.regeneration_time);
        // if(this.status>=3)
        //     this.status = 0;
        // this.setTime();

    

    this.update = function(){
        this.status = false;
        setTimeout(()=>{  this.status = true}, this.regeneration_time);
    }

    this.draw = function(ctx){
        ctx.beginPath();
        ctx.rect(23.6*64, 0.5*64, 16, 192);
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(23.6*64, 0.5*64, 16, this.currentTime);
        ctx.fillStyle = "black";
        ctx.fill();

        
        // ctx.beginPath();
        // ctx.rect(this.clock[this.status].position.x-32, this.clock[this.status].position.y-32, 64, 64*(1-this.currentHealth/this.totalHealth));
        // ctx.fillStyle = "black";
        // ctx.fill();
        this.timelevel.draw(ctx);
        this.clock[this.status].draw(ctx);
    }
};