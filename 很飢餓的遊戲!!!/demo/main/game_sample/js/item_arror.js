var Item_arror = function() {
    this.item_arror = new Framework.Sprite(define.materialPath + 'item_arror.png'); 
    this.item_arror.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_arror.draw(ctx);
    }

};

Object.defineProperty(Item_arror.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_arror.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
