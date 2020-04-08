var EquipmentBar = function(backpackList) {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;
    this.backpack.position = {x: 23*64, y: 8*64};    
    this.equipmentList = [null,null,null];

    this.draw = function(ctx){
        this.backpack.position = {x: 23*64, y: 8*64};    
        for(var i = 0;i < 3;i++){
            this.backpack.position.y += 64;
            this.backpack.draw(ctx);
            if(this.equipmentList[i] != null){
                this.equipmentList[i].position = {x: 23, y: 9+i};
                this.equipmentList[i].draw(ctx);
                ctx.font = "25px Arial";
                ctx.fillStyle = "white";
                ctx.strokeStyle = 'blue';
                ctx.lineWidth = 2.5;
                ctx.fillText(this.equipmentList[i].durability.toString()+"%", this.equipmentList[i].position.x*64, this.equipmentList[i].position.y*64+20);
                ctx.strokeText(this.equipmentList[i].durability.toString()+"%", this.equipmentList[i].position.x*64, this.equipmentList[i].position.y*64+20);
            }
        }
    }

    //0:head 1:body 2:hand
    this.getEquipment = function(index){
        return this.equipmentList[index];
    }

    this.setEquipment = function(obj, index){
        this.equipmentList[index] = obj;
    }
};