var EquipmentBar = function() {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;
    this.backpack.position = {x: 23*64, y: 8*64};    
    this.equipmentList = [null,null,null];
    this.selectedIndex = -1;
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
                ctx.fillText(this.equipmentList[i].durability.toString()+"%", this.equipmentList[i].position.x*64, this.equipmentList[i].position.y*64+15);
                ctx.strokeText(this.equipmentList[i].durability.toString()+"%", this.equipmentList[i].position.x*64, this.equipmentList[i].position.y*64+15);
            }
        }
    }
    this.getSelectedEquipment = function(){
        if(this.selectedIndex == -1 || this.equipmentList[this.selectedIndex] == null)
            return null;
        else{
            if(this.equipmentList[this.selectedIndex].item_num == 32)
                this.equipmentList[this.selectedIndex].inEquipmentbar = false;
            return this.equipmentList[this.selectedIndex];
        }
    }
    this.dropSelectedEquipment = function(){
        if(this.selectedIndex != -1)
            this.equipmentList[this.selectedIndex] = null;
    }
    //0:head 1:body 2:hand
    this.getEquipment = function(index){
        return this.equipmentList[index];
    }
    this.setEquipment = function(obj, index){
        this.equipmentList[index] = obj;
    }
    this.update = function(){
        for(var i = 0;i < 3;i++){
            if(this.equipmentList[i] != null && this.equipmentList[i].durability <= 0){
                this.equipmentList[i] = null;
            }
        }
    }
};