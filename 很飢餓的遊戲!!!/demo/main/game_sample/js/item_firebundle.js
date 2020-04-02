var Item_firebundle = function() {
    this.item_firebundle = new Framework.Sprite(define.materialPath + 'item_firebundle.png'); 
    this.item_firebundle.scale = 1.5;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_firebundle.draw(ctx);
    }

};

Object.defineProperty(Item_firebundle.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_firebundle.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
