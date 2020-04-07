var Item_bee_sting = function() {
    this.item_bee_sting = new Framework.Sprite(define.materialPath + 'item_bee_sting.png'); 
    this.item_bee_sting.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_bee_sting.draw(ctx);
    }

};

Object.defineProperty(Item_bee_sting.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_bee_sting.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
