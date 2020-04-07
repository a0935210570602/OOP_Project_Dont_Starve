var Item_pigskin = function() {
    this.item_pigskin = new Framework.Sprite(define.materialPath + 'item_pigskin.png'); 
    this.item_pigskin.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_pigskin.draw(ctx);
    }

};

Object.defineProperty(Item_pigskin.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_pigskin.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
