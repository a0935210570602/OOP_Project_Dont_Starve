var Handle_initial_character = function(){
    this.character_description = new Character_description();
    this.alphabet = new Framework.Sprite(define.materialPath + 'alphabet.png'); 
    this.alphabet.scale = 0.3;
    this.alphabet.position = {x:1274, y:330};
    this.big_white = new Framework.Sprite(define.materialPath + 'big_white.png'); 
    this.big_white.scale = 0.3;
    this.big_white.position = {x:1274, y:330};
    this.is_typepanel_open = false;
    this.is_initial = false;
    this.name = "請輸入名字";
    this.init = function(){
        this.character_description.is_character_description_open = true;
        this.character_description.experience = 0;
        this.character_description.capabilityt_point = 5;
        for(var i = 0;i < this.character_description.character_descruption_point.length;i++){
            this.character_description.character_descruption_point[i] = 5;
        }
    }
    this.update = function(){
        if(this.character_description.capabilityt_point == 0)
            this.is_initial = true;
    }
    this.is_alphabet_touch = false;
    this.alphabet_touch_anchor = {x:0, y:0};
    this.draw = function(ctx){
        this.character_description.draw(ctx);
        ctx.beginPath();
        ctx.rect(818, 220, 250, 50);
        ctx.fillStyle = "#00FFFF";
        ctx.fill();
        ctx.font = "25px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = 'center';
        ctx.fillText(this.name, 818+125 ,255);
        if(this.is_typepanel_open){
            this.big_white.draw(ctx); 
            if(this.is_alphabet_touch){
                ctx.beginPath();
                ctx.rect(this.alphabet_touch_anchor.x, this.alphabet_touch_anchor.y, 55, 35);
                ctx.fillStyle = "silver";
                ctx.fill();
            }
            this.alphabet.draw(ctx);
        }
        else{
            ctx.beginPath();
            ctx.rect(1207, 220, 300, 500);
            ctx.fillStyle = "#BEBEBE";
            ctx.fill();
        }
    }
    this.mousemove = function(e){
        if(this.is_typepanel_open){
            this.is_alphabet_touch = true;
            if(e.x>= 1086 && e.x<= 1145){
                if(e.y>= 226 && e.y<= 262)
                    this.alphabet_touch_anchor = {x:1086, y:226};
                else if(e.y>= 269 && e.y<= 307)
                    this.alphabet_touch_anchor = {x:1086, y:269};
                else if(e.y>= 311 && e.y<= 349)
                    this.alphabet_touch_anchor = {x:1086, y:311};
                else if(e.y>= 353 && e.y<= 391)
                    this.alphabet_touch_anchor = {x:1086, y:353};
                else if(e.y>= 396 && e.y<= 433)
                    this.alphabet_touch_anchor = {x:1086, y:396};
                else
                    this.is_alphabet_touch = false;
                this.draw(Framework.Game._context);
            }else if(e.x>= 1149 && e.x<= 1208){
                if(e.y>= 226 && e.y<= 262)
                    this.alphabet_touch_anchor = {x:1149, y:226};
                else if(e.y>= 269 && e.y<= 307)
                    this.alphabet_touch_anchor = {x:1149, y:269};
                else if(e.y>= 311 && e.y<= 349)
                    this.alphabet_touch_anchor = {x:1149, y:311};
                else if(e.y>= 353 && e.y<= 391)
                    this.alphabet_touch_anchor = {x:1149, y:353};
                else if(e.y>= 396 && e.y<= 433)
                    this.alphabet_touch_anchor = {x:1149, y:396};
                else
                    this.is_alphabet_touch = false;
                this.draw(Framework.Game._context);
            }else if(e.x>= 1214 && e.x<= 1271){
                if(e.y>= 226 && e.y<= 262)
                    this.alphabet_touch_anchor = {x:1214, y:226};
                else if(e.y>= 269 && e.y<= 307)
                    this.alphabet_touch_anchor = {x:1214, y:269};
                else if(e.y>= 311 && e.y<= 349)
                    this.alphabet_touch_anchor = {x:1214, y:311};
                else if(e.y>= 353 && e.y<= 391)
                    this.alphabet_touch_anchor = {x:1214, y:353};
                else if(e.y>= 396 && e.y<= 433)
                    this.alphabet_touch_anchor = {x:1214, y:396};
                else
                    this.is_alphabet_touch = false;
                this.draw(Framework.Game._context);
            }else if(e.x>= 1276 && e.x<= 1336){
                if(e.y>= 226 && e.y<= 262)
                    this.alphabet_touch_anchor = {x:1276, y:226};
                else if(e.y>= 269 && e.y<= 307)
                    this.alphabet_touch_anchor = {x:1276, y:269};
                else if(e.y>= 311 && e.y<= 349)
                    this.alphabet_touch_anchor = {x:1276, y:311};
                else if(e.y>= 353 && e.y<= 391)
                    this.alphabet_touch_anchor = {x:1276, y:353};
                else if(e.y>= 396 && e.y<= 433)
                    this.alphabet_touch_anchor = {x:1276, y:396};
                else
                    this.is_alphabet_touch = false;
                this.draw(Framework.Game._context);
            }else if(e.x>= 1339 && e.x<= 1398){
                if(e.y>= 226 && e.y<= 262)
                    this.alphabet_touch_anchor = {x:1339, y:226};
                else if(e.y>= 269 && e.y<= 307)
                    this.alphabet_touch_anchor = {x:1339, y:269};
                else if(e.y>= 311 && e.y<= 349)
                    this.alphabet_touch_anchor = {x:1339, y:311};
                else if(e.y>= 353 && e.y<= 391)
                    this.alphabet_touch_anchor = {x:1339, y:353};
                else if(e.y>= 396 && e.y<= 433)
                    this.alphabet_touch_anchor = {x:1339, y:396};
                else
                    this.is_alphabet_touch = false;
                this.draw(Framework.Game._context);
            }else if(e.x>= 1403 && e.x<= 1461){
                if(e.y>= 226 && e.y<= 262)
                    this.alphabet_touch_anchor = {x:1403, y:226};
                else if(e.y>= 269 && e.y<= 307)
                    this.alphabet_touch_anchor = {x:1403, y:269};
                else
                    this.is_alphabet_touch = false;
                this.draw(Framework.Game._context);
            }else{
                this.is_alphabet_touch = false;
                this.draw(Framework.Game._context);
            }
        }
    }
    this.click = function(e){
        var audio = new Framework.Audio({
            start_game: {
                mp3: define.musicPath + '遊戲開場音樂.mp3',
            }, keyup:{
                mp3: define.musicPath + '按按鍵.mp3',
            }, song2:{
                mp3: define.musicPath + '刀劍神域op1《crossing field》鋼琴曲.mp3',
            }
        });
        audio.play({name: 'keyup', loop: false});
        if(this.is_typepanel_open){
            this.is_alphabet_touch = true;
            if(e.x>= 1086 && e.x<= 1145){
                if(e.y>= 226 && e.y<= 262)
                    this.name += "A";
                else if(e.y>= 269 && e.y<= 307)
                    this.name += "B";
                else if(e.y>= 311 && e.y<= 349)
                    this.name += "C";
                else if(e.y>= 353 && e.y<= 391)
                    this.name += "D";
                else if(e.y>= 396 && e.y<= 433)
                    this.name += "E";
                this.draw(Framework.Game._context);
            }else if(e.x>= 1149 && e.x<= 1208){
                if(e.y>= 226 && e.y<= 262)
                    this.name += "F";
                else if(e.y>= 269 && e.y<= 307)
                    this.name += "G";
                else if(e.y>= 311 && e.y<= 349)
                    this.name += "H";
                else if(e.y>= 353 && e.y<= 391)
                    this.name += "I";
                else if(e.y>= 396 && e.y<= 433)
                    this.name += "J";
                this.draw(Framework.Game._context);
            }else if(e.x>= 1214 && e.x<= 1271){
                if(e.y>= 226 && e.y<= 262)
                    this.name += "K";
                else if(e.y>= 269 && e.y<= 307)
                    this.name += "L";
                else if(e.y>= 311 && e.y<= 349)
                    this.name += "M";
                else if(e.y>= 353 && e.y<= 391)
                    this.name += "N";
                else if(e.y>= 396 && e.y<= 433)
                    this.name += "O";
                this.draw(Framework.Game._context);
            }else if(e.x>= 1276 && e.x<= 1336){
                if(e.y>= 226 && e.y<= 262)
                    this.name += "P";
                else if(e.y>= 269 && e.y<= 307)
                    this.name += "Q";
                else if(e.y>= 311 && e.y<= 349)
                    this.name += "R";
                else if(e.y>= 353 && e.y<= 391)
                    this.name += "S";
                else if(e.y>= 396 && e.y<= 433)
                    this.name += "T";
                this.draw(Framework.Game._context);
            }else if(e.x>= 1339 && e.x<= 1398){
                if(e.y>= 226 && e.y<= 262)
                    this.name += "U";
                else if(e.y>= 269 && e.y<= 307)
                    this.name += "V";
                else if(e.y>= 311 && e.y<= 349)
                    this.name += "W";
                else if(e.y>= 353 && e.y<= 391)
                    this.name += "X";
                else if(e.y>= 396 && e.y<= 433)
                    this.name += "Y";
                this.draw(Framework.Game._context);
            }else if(e.x>= 1403 && e.x<= 1461){
                if(e.y>= 226 && e.y<= 262)
                    this.name += "Z";
                else if(e.y>= 269 && e.y<= 307)
                    this.is_typepanel_open = false;
                this.draw(Framework.Game._context);
            }
        }
        if(e.x>= 818 && e.x<= 997 && e.y >= 221 && e.y<= 270){
            this.name = ""
            this.draw(Framework.Game._context);
            this.is_typepanel_open = true;
        }
        if(e.x >= 470 && e.x <=510){
            if(e.y >=530 && e.y<= 570)
                this.character_description.isChangeCapability(2);
            else if(e.y >=612 && e.y<= 652)
                this.character_description.isChangeCapability(3);
            else if(e.y >=690 && e.y<= 730)
                this.character_description.isChangeCapability(4);
        }else if(e.x >= 822 && e.x <=861){
            if(e.y >=382 && e.y<= 425)
                this.character_description.isChangeCapability(5);
            else if(e.y >=461 && e.y<= 502)
                this.character_description.isChangeCapability(6);
            else if(e.y >=622 && e.y<= 661)
                this.character_description.isChangeCapability(8);
        }   
    }
}