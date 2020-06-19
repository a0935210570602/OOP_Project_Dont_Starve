var Item_fake = function() {
    this.mapPosition = {x:0, y:0};
    this.item_can_be_picked = false;
    this.item_num = -3;
    this.isRegenerate = false;
    this.draw = function(ctx){
    }
};
Object.defineProperty(Item_fake.prototype, 'position', {
    set: function(newValue) {
        this.mapPosition = newValue;
    }
}); 