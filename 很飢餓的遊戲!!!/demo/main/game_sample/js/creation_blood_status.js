var Creation_blood_status = function() {
    this.monsterarray = [];
    this.character_tocan = new Framework.Sprite(define.materialPath + 'character_tocan.png'); 
    this.character_tocan.scale = 0.35;
    this.character_tocan.position = {x: 64*3+64, y:64*3};

    this.character_blood_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.character_blood_chart.scale = 1.75;
    this.character_blood_chart.position = {x: 64*6, y: 64*3}
    this.character_magic_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.character_magic_chart.scale = 1.75;
    this.character_magic_chart.position = {x: 64*6, y: 64*3+25}
    this.character_hunger_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.character_hunger_chart.scale = 1.75;
    this.character_hunger_chart.position = {x: 64*6, y: 64*3+50}
    this.character_blood_ratio = 1;
    this.character_magic_ratio = 1;
    this.character_hunger_ratio = 1;

    this.blood_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.blood_chart.scale = 1.5;
    this.blood_point = [];
    this.monster_cute_litter_eye_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
    this.monster_cute_litter_eye_tocan.scale = 1.5;
    this.draw = function(ctx){
        this.character_tocan.draw(ctx);
        ctx.beginPath();
        console.log(this.character_blood_ratio);
        ctx.rect(64*5-10, 64*3-12, 150*this.character_blood_ratio, 12);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        this.character_blood_chart.draw(ctx);
        ctx.beginPath();
        ctx.rect(64*5-10, 64*3+12, 150*this.character_magic_ratio, 12);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
        this.character_magic_chart.draw(ctx);
        ctx.beginPath();
        ctx.rect(64*5-10+1, 64*3+38, 150*this.character_hunger_ratio, 12);
        ctx.fillStyle = "LightGoldenrodYellow";
        ctx.fill();
        ctx.closePath();
        this.character_hunger_chart.draw(ctx);
        // console.log(this.monsterarray.length);
        if(this.monsterarray.length>8){
            this.monsterarray.length=8;
        }
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

    this.characterHungryUpdate = function(player){
        this.character_magic_ratio = player.character_descruption_point[1] / player.character_descruption_point[6];
    }

    this.characterMagicUpdate = function(player){
        this.character_magic_ratio = player.character_descruption_point[1] / player.character_descruption_point[6];
    }

    this.characterBloodUpdate = function(characterStatus){
        // console.log(characterStatus.currentHealth);
        this.character_blood_ratio = characterStatus.currentHealth / characterStatus.totalHealth;
        // console.log(this.character_blood_ratio);
        
        if(this.character_blood_ratio<0)
            this.character_blood_ratio=0;
        this.draw(Framework.Game._context);
    }
    this.monsterUpdate = function(monsterarray){
        for(var i=0,j=0;i<monsterarray.length;i++){
            if(monsterarray[i].is_start){
                // console.log("is_start", i);
                this.monster_cute_litter_eye_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
                this.monster_cute_litter_eye_tocan.position = {x:65*4, y:65*(4+j)};
                this.blood_point.push(monsterarray[i].health);
                this.monsterarray.push(this.monster_cute_litter_eye_tocan);
                j++;
            }
        }
    }
};