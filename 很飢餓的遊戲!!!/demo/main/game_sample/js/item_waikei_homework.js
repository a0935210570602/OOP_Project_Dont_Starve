var Item_stone = function() {
    this.item_stone = new Framework.Sprite(define.materialPath + 'item_stone.png'); 
    this.item_stone.scale = 2;
    this.mapPosition = {x:0, y:0};

    this.update = function(){

    }

    this.draw = function(ctx){
        this.item_stone.draw(ctx);
    }

};

Object.defineProperty(Item_stone.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_stone.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
