var Creation_blood_status = function() {
    this.monster_cute_litter_eye_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
    this.monster_cute_litter_eye_tocan.scale = 1.5;
    this.monsterarray = [];
    this.blood_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.blood_chart.scale = 1.5;
    this.blood_point = [];
    this.monster_cute_litter_eye_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
    this.monster_cute_litter_eye_tocan.scale = 1.5;
    this.draw = function(ctx){
        // console.log(this.monsterarray.length);

        if(this.monsterarray.length >0){
            for(var i=0;i<this.monsterarray.length;i++){
                this.monsterarray[i].draw(ctx);
                this.blood_chart.position = this.monsterarray[i].position;
                this.blood_chart.position.x += 64*2;
                this.blood_chart.position.y += 25;
                ctx.beginPath();
                ctx.rect(this.blood_chart.position.x-64, this.blood_chart.position.y-10, this.blood_point[i]*13, 10);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();

                this.blood_chart.draw(ctx);
            }
            this.monsterarray = [];
            this.blood_point = [];
        }
    }

    this.update = function(monsterarray){
        console.log("monsterarray update");

        for(var i=0,j=0;i<monsterarray.length;i++){
            if(monsterarray[i].is_start){
                console.log("is_start", i);
                this.monster_cute_litter_eye_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
                this.monster_cute_litter_eye_tocan.position = {x:65*4, y:65*(4+j)};
                this.blood_point.push(monsterarray[i].health);
                this.monsterarray.push(this.monster_cute_litter_eye_tocan);
                j++;
            }
        }
    }
};