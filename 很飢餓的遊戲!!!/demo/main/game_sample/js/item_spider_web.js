var Item_spider_web = function() {
    this.item_spider_web = new Framework.Sprite(define.materialPath + 'item_spider_web.png'); 
    this.item_spider_web.scale = 2;

    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        if(this.status)
            this.item_spider_web.draw(ctx);
    }
};

Object.defineProperty(Item_spider_web.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_spider_web.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
