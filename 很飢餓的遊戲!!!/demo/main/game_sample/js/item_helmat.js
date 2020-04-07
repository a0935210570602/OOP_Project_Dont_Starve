var Item_helmat = function() {
    this.item_helmat = new Framework.Sprite(define.materialPath + 'item_helmat.png'); 
    this.item_helmat.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_helmat.draw(ctx);
    }

};

Object.defineProperty(Item_helmat.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_helmat.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
