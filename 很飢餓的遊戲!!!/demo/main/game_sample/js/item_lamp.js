var Item_lamp = function() {
    this.item_lamp = new Framework.Sprite(define.materialPath + 'item_lamp.png'); 
    this.item_lamp.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_lamp.draw(ctx);
    }

};

Object.defineProperty(Item_lamp.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_lamp.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
