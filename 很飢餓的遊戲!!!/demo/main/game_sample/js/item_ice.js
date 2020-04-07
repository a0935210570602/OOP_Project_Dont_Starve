var Item_ice = function() {
    this.item_ice = new Framework.Sprite(define.materialPath + 'item_ice.png'); 
    this.item_ice.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_ice.draw(ctx);
    }

};

Object.defineProperty(Item_ice.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_ice.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
