var CharacterStatus = function() {
    this.heart = new Framework.Sprite(define.materialPath + 'heart.png'); 
    this.heart.position = {x: 21*64, y: 5*64};
    this.heart.scale = 2;
    
    this.hungry = new Framework.Sprite(define.materialPath + 'hungry.png'); 
    this.hungry.scale = 2;
    this.hungry.position = {x: 23*64, y: 5*64};

    this.totalHealth = 200;
    this.currentHealth = 200;

    this.totalHunger = 150;
    this.currentHunger = 150;

    var character_status = this;

    this.init = function(){
        this.decreaseHunger();
    }

    this.decreaseHunger = function(){
        var hungerInterval = setInterval(()=>{
            this.currentHunger = this.currentHunger - 5;
            character_status.draw(Framework.Game._context);
            if(this.currentHunger == 0)
            {
                clearInterval(hungerInterval);
                this.decreaseHealth();
            }
        }, 500);
    }

    this.decreaseHealth = function(){
        var healthInterval = setInterval(()=>{
            this.currentHealth = this.currentHealth - 5;
            character_status.draw(Framework.Game._context);
            if(this.currentHunger > 0){
                clearInterval(healthInterval);
                this.decreaseHunger();
            }else if(this.currentHealth == 0){
                clearInterval(healthInterval);
            }
        }, 500);
    }

    this.update = function(){
        
    }

    this.draw = function(ctx){
        // console.log("status draw");

        ctx.beginPath();
        ctx.rect(this.heart.position.x-32, this.heart.position.y-32, 64, 64);
        ctx.fillStyle = "orange";
        ctx.fill();
        
        ctx.beginPath();
        ctx.rect(this.hungry.position.x-32, this.hungry.position.y-32, 64, 64);
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(this.heart.position.x-32, this.heart.position.y-32, 64, 64*(1-this.currentHealth/this.totalHealth));
        ctx.fillStyle = "black";
        ctx.fill();
      
        ctx.beginPath();
        ctx.rect(this.hungry.position.x-32, this.hungry.position.y-32, 64, 64*(1-this.currentHunger/this.totalHunger));
        ctx.fillStyle = "black";
        ctx.fill();

        this.heart.draw(ctx);
        this.hungry.draw(ctx);
    }
};