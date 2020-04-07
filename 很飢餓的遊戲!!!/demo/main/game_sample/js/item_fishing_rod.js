var Item_fishing_rod = function() {
    this.item_fishing_rod = new Framework.Sprite(define.materialPath + 'item_fishing_rod.png'); 
    this.item_fishing_rod.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.durability = 0;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_fishing_rod.draw(ctx);
    }

};

Object.defineProperty(Item_fishing_rod.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_fishing_rod.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
