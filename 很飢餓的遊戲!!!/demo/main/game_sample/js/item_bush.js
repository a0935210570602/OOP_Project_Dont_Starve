var Item_bush = function() {
    this.item_bush = new Framework.Sprite(define.materialPath + 'item_bush.png'); 
    this.item_bush.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_bush.draw(ctx);
    }

};

Object.defineProperty(Item_bush.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_bush.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
