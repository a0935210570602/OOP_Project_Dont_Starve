var Monster_damage_handler = function(player, monster) {
    this.player = player;
    this.monster = monster;
    this.attackSuccess = false;
    this.arrorHandle = null;

    this.handle_magic_damage = function(mapPosition){
        this.attackSuccess = false;
        for(var i = 0;i < this.monster.length;i++){
            if(this.monster[i].is_start){
                for(var j = -1;j < 2;j++){
                    for(var k = -1;k < 2;k++){
                        if(mapPosition.x+j == this.monster[i].mapPosition.x && mapPosition.y+k == this.monster[i].mapPosition.y){
                            this.monster[i].health -= this.player.character_descruption_total_point[3];
                            this.attackSuccess = true;
                        }
                    }
                }
            }
        }
        if(this.attackSuccess)
            this.removeDeadMonster();
        this.player.equipmentBar.equipmentList[2].reduceDurability();
    }

    this.handle_spear_damage = function(playerWalkDirection, playerPositionOnMap){
        this.attackSuccess = false;
        for(var i = 0;i < this.monster.length;i++){
            if(this.monster[i].is_start){
                if(playerPositionOnMap.x + playerWalkDirection.x == this.monster[i].mapPosition.x && playerPositionOnMap.y + playerWalkDirection.y == this.monster[i].mapPosition.y){
                    this.monster[i].health -= this.player.character_descruption_total_point[2];
                    this.attackSuccess = true;
                }
            }
        }
        if(this.attackSuccess){
            this.removeDeadMonster();
            this.player.equipmentBar.equipmentList[2].reduceDurability();
        }
    }

    this.handle_arror_damage = function(playerWalkDirection, playerPositionOnMap){
        this.attackSuccess = false;
        this.arrorHandle = new Flying_arror(playerWalkDirection, playerPositionOnMap, this.monster);
        // this.player.equipmentBar.equipmentList[2].reduceDurability();
    }

    this.update = function(){
        if(this.arrorHandle != null){
            console.log("arrorHandle");
            this.arrorHandle.update();
            if(this.arrorHandle.attackEnd){
                this.arrorHandle = null;
                this.removeDeadMonster();
            }
        }
    }

    this.draw = function(){
        if(this.arrorHandle != null){
            this.arrorHandle.draw();
        }
    }

    this.removeDeadMonster = function() {
        var i = 0;
        while(i < this.monster.length) {
            if (this.monster[i].health <= 0) {
                this.monster.splice(i, 1);
            } else {
            i++;
            }
        }
    }
};