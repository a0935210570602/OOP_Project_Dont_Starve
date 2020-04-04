var Item_gold_ax = function() {
    this.item_gold_ax = new Framework.Sprite(define.materialPath + 'item_gold_ax.png'); 
    this.item_gold_ax.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_gold_ax.draw(ctx);
    }

};

Object.defineProperty(Item_gold_ax.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_gold_ax.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
