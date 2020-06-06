var Handle_initial_character = function(){
    this.character_description = new Character_description();
    this.is_initial = false;
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

    this.draw = function(ctx){
        this.character_description.draw(ctx);
    }

    this.click = function(e){
        if(e.x >= 470 && e.x <=510){
            if(e.y >=540 && e.y<= 560){
                this.character_description.isChangeCapability(2);
            }else if(e.y >=622 && e.y<= 642){
                this.character_description.isChangeCapability(3);
            }else if(e.y >=700 && e.y<= 720){
                this.character_description.isChangeCapability(4);
            }
        }else if(e.x >= 822 && e.x <=861){
            if(e.y >=382 && e.y<= 415){
                this.character_description.isChangeCapability(5);
            }else if(e.y >=461 && e.y<= 502){
                this.character_description.isChangeCapability(6);
            }else if(e.y >=622 && e.y<= 661){
                this.character_description.isChangeCapability(9);
            }
        }   
    }
}