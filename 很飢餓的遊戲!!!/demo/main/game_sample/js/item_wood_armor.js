var Item_wood_armor = function() {
    this.item_wood_armor = new Framework.Sprite(define.materialPath + 'item_wood_armor.png'); 
    this.item_wood_armor.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_wood_armor.draw(ctx);
    }

};

Object.defineProperty(Item_wood_armor.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_wood_armor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
