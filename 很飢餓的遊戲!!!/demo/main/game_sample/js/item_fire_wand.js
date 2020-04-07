var Item_fire_wand = function() {
    this.item_fire_wand = new Framework.Sprite(define.materialPath + 'item_fire_wand.png'); 
    this.item_fire_wand.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_fire_wand.draw(ctx);
    }

};

Object.defineProperty(Item_fire_wand.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_fire_wand.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
