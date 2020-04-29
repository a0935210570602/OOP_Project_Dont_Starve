var Game_object_detail = function() {
    this.back_ground_picture = new Framework.Sprite(define.materialPath + 'Floral.png'); 
    this.back_ground_picture.scale = 2.9;
    this.back_ground_picture.position = {x:145, y:720};

    
    this.draw = function(ctx){
        ctx.beginPath();
        ctx.rect(15, 557, 250, 330);
        ctx.fillStyle = "brown";
        ctx.fill();
        this.back_ground_picture.draw(ctx);

        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("xxxxxxxxxxxxxxx",145 ,605);
        ctx.fillText("---------------",145 ,640);
        ctx.fillText("拉拉拉，拉拉拉",145 ,675);
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