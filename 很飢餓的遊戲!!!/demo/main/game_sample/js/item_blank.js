var Item_blank = function() {
    this.item_blank = new Framework.Sprite(define.materialPath + 'item_blank.png'); 
    this.mapPosition = {x:0, y:0};
    this.item_can_be_picked = false;
    this.item_num = 0;
    this.isRegenerate = false;
    this.draw = function(ctx){
    }
};
Object.defineProperty(Item_blank.prototype, 'position', {
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_blank.position = {x: 0, y: 0};
    }
}); 