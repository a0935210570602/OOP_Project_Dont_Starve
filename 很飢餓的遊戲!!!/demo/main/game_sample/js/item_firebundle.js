var Item_firebundle = function() {
    this.item_firebundle = new Framework.Sprite(define.materialPath + 'item_firebundle.png'); 
    this.item_firebundle.scale = 1.5;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = 32;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "equipment";
    //可疊加物件有amount 不可疊加有durability
    this.durability = 100;
    this.place = "hand";
    this.inEquipmentbar = false;
    this.item_can_be_picked = true;
    this.update = function(){
    }

    this.reduceDurability = function(){
        if(this.inEquipmentbar){
            this.durability -= 1;
            setTimeout(()=>{
                this.reduceDurability();
            },1000);
        }
    }

    this.draw = function(ctx){
        this.item_firebundle.draw(ctx);
    }

};

Object.defineProperty(Item_firebundle.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_firebundle.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
