var Item_branch = function() {
    this.item_branch = new Framework.Sprite(define.materialPath + 'item_branch.png'); 
    this.item_branch.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;

    this.update = function(){

    }

    this.draw = function(ctx){
        this.item_branch.draw(ctx);
    }
};

Object.defineProperty(Item_branch.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_branch.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
