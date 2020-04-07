var Item_spear = function() {
    this.item_spear = new Framework.Sprite(define.materialPath + 'item_spear.png'); 
    this.item_spear.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;

    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_spear.draw(ctx);
    }

};

Object.defineProperty(Item_spear.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_spear.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
