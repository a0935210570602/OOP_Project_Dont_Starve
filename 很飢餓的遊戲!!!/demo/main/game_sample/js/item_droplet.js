var Item_droplet = function() {
    this.item_droplet = new Framework.Sprite(define.materialPath + 'item_droplet.png'); 
    this.item_droplet.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_droplet.draw(ctx);
    }

};

Object.defineProperty(Item_droplet.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_droplet.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
