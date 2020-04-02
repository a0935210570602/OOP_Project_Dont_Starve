var Item_camp = function() {
    this.item_camp = new Framework.Sprite(define.materialPath + 'item_camp.png'); 
    this.item_camp.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_camp.draw(ctx);
    }

};

Object.defineProperty(Item_camp.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_camp.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
