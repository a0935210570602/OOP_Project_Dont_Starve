var Item_campfire = function() {
    this.item_campfire = new Framework.Sprite(define.materialPath + 'item_campfire.png'); 
    this.item_campfire.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_campfire.draw(ctx);
    }

};

Object.defineProperty(Item_campfire.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_campfire.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
