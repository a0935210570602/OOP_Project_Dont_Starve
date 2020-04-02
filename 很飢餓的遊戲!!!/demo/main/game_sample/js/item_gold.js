var Item_gold = function() {
    this.item_gold = new Framework.Sprite(define.materialPath + 'item_gold.png'); 
    this.item_gold.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_gold.draw(ctx);
    }

};

Object.defineProperty(Item_gold.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_gold.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
