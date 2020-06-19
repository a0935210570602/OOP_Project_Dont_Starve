var Normal_attack = function(player, monster, playerWalkDirection, playerPositionOnMap) {
    this.player = player;
    this.monster = monster;
    this.attackSuccess = false;
    this.visitor = new ReduceDurabilityVisitor();
    this.attack = function(){
        this.attackSuccess = false;
        for(var i = 0;i < this.monster.length;i++){
            if(this.monster[i].is_start){
                if(playerPositionOnMap.x + playerWalkDirection.x == this.monster[i].mapPosition.x && playerPositionOnMap.y + playerWalkDirection.y == this.monster[i].mapPosition.y){
                    this.monster[i].health -= this.player.character_descruption_total_point[2];
                    this.monster[i].getHurt();
                    this.attackSuccess = true;
                    break;
                }
            }
        }
        if(this.attackSuccess && this.player.equipmentBar.equipmentList[2] != null)
            this.player.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
    }
};