var Item_flower = function() {
    this.item_flower = new Framework.Sprite(define.materialPath + 'item_flower.png'); 
    this.item_flower.scale = 2;
    this.item_flower.index = 1;
    this.mapPosition = {x:0, y:0};

    this.update = function(){

    }

    this.draw = function(ctx){
        this.item_flower.draw(ctx);
    }
};

Object.defineProperty(Item_flower.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_flower.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
