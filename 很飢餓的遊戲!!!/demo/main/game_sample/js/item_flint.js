var Item_flint = function() {
    this.item_flint = new Framework.Sprite(define.materialPath + 'item_flint.png'); 
    this.item_flint.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_flint.draw(ctx);
    }

};

Object.defineProperty(Item_flint.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_flint.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
