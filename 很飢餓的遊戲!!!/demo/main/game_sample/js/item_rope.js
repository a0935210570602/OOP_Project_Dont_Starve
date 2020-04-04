var Item_rope = function() {
    this.item_rope = new Framework.Sprite(define.materialPath + 'item_rope.png'); 
    this.item_rope.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_rope.draw(ctx);
    }

};

Object.defineProperty(Item_rope.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_rope.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
