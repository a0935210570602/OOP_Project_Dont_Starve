var Item_wood = function() {
    this.item_wood = new Framework.Sprite(define.materialPath + 'item_wood.png'); 
    this.item_wood.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_wood.draw(ctx);
    }

};

Object.defineProperty(Item_wood.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_wood.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
