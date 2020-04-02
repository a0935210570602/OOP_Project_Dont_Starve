var Item_pixilart = function() {
    this.item_pixilart = new Framework.Sprite(define.materialPath + 'item_pixilart.png'); 
    this.item_pixilart.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_pixilart.draw(ctx);
    }

};

Object.defineProperty(Item_pixilart.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_pixilart.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
