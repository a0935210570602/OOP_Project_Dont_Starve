var Magic_attack = function(player, monster, mapPosition) {
    this.player = player;
    this.monster = monster;
    this.visitor = new ReduceDurabilityVisitor();

    this.attack = function(){
        this.attackSuccess = false;
        for(var i = 0;i < this.monster.length;i++){
            if(this.monster[i].is_start){
                for(var j = -1;j < 2;j++){
                    for(var k = -1;k < 2;k++){
                        if(mapPosition.x+j == this.monster[i].mapPosition.x && mapPosition.y+k == this.monster[i].mapPosition.y){
                            this.monster[i].health -= this.player.character_descruption_total_point[3];
                        }
                    }
                }
            }
        }
        this.player.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
    }
};

