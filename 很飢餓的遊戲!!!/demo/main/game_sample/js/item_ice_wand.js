var Item_ice_wand = function() {
    this.item_ice_wand = new Framework.Sprite(define.materialPath + 'item_ice_wand.png'); 
    this.item_ice_wand.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_ice_wand.draw(ctx);
    }

};

Object.defineProperty(Item_ice_wand.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_ice_wand.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
