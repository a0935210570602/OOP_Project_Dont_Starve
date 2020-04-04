var Item_king_wand = function() {
    this.item_king_wand = new Framework.Sprite(define.materialPath + 'item_king_wand.png'); 
    this.item_king_wand.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_king_wand.draw(ctx);
    }

};

Object.defineProperty(Item_king_wand.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_king_wand.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
