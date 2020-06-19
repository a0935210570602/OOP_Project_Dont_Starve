var Arror_attack = function(player, monster) {
    this.player = player;
    this.monster = monster;
    this.attackSuccess = false;
    this.arrorHandle = [];
    this.playerWalkDirection;
    this.playerPositionOnMap;
    this.visitor = new ReduceDurabilityVisitor();
    this.setPositionAndDirection = function(playerWalkDirection, playerPositionOnMap){
        this.playerWalkDirection = playerWalkDirection;
        this.playerPositionOnMap = playerPositionOnMap;
    }
    this.attack = function(){
        this.attackSuccess = false;
        var arror = new Flying_arror(this.playerWalkDirection, this.playerPositionOnMap, this.monster, this.player.character_descruption_total_point[4]);
        arror.init();
        this.arrorHandle.push(arror);
        this.player.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
    }
    this.update = function(){
        if(this.arrorHandle.length != 0){
            for(var i = 0;i < this.arrorHandle.length;i++){
                this.arrorHandle[i].update();
            }
            var i = 0;
            while(i < this.arrorHandle.length) {
                if(this.arrorHandle[i].attackEnd){
                    this.arrorHandle[i].draw(Framework.Game._context);
                    this.arrorHandle.splice(i, 1);
                }else{
                    i++;
                }
            }
        }
    }
    this.draw = function(ctx){
        if(this.arrorHandle.length != 0){
            for(var i = 0;i < this.arrorHandle.length;i++){
                this.arrorHandle[i].draw(ctx);
            }
        }
    }
};