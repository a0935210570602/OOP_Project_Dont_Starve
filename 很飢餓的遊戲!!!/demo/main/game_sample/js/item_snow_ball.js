var Item_snow_ball = function() {
    this.item_snow_ball = new Framework.Sprite(define.materialPath + 'item_snow_ball.png'); 
    this.item_snow_ball.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;


    this.update = function(){
        this.status = false;
    }

    this.draw = function(ctx){
        this.item_snow_ball.draw(ctx);
    }

};

Object.defineProperty(Item_snow_ball.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_snow_ball.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
