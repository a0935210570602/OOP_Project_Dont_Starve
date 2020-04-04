var Item_ax = function() {
    this.item_as = new Framework.Sprite(define.materialPath + 'item_ax.png'); 
    this.item_as.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_as.draw(ctx);
    }

};

Object.defineProperty(Item_ax.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_as.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
