var Game_object_detail = function() {
    this.back_ground_picture = new Framework.Sprite(define.materialPath + 'Floral.png'); 
    this.back_ground_picture.scale = 3;
    this.back_ground_picture.position = {x:120, y:720};


    this.draw = function(ctx){
        this.back_ground_picture.draw(ctx);

        // ctx.font = "bold 24px serif";
        // ctx.fillStyle = "black";
        // ctx.lineWidth = 2.5;
        // ctx.fillText("( " + this.experience+" / "+ this.character_levelup_experience +")", 1135, 2*64-5);
        // ctx.font = "bold 24px serif";
        // ctx.fillStyle = "black";
        // ctx.lineWidth = 2.5;
        // ctx.fillText("能力值點數: "+this.capabilityt_point, 955, 315);
    }

    this.update = function(player){
    }

    this.click = function(e){
        
    }
};