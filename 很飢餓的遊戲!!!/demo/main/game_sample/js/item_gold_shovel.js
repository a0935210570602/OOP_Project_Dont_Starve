var Item_gold_shovel = function() {
    this.item_gold_shovel = new Framework.Sprite(define.materialPath + 'item_gold_shovel.png'); 
    this.item_gold_shovel.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_gold_shovel.draw(ctx);
    }

};

Object.defineProperty(Item_gold_shovel.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_gold_shovel.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
