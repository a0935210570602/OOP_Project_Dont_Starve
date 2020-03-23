
var Item_stone = function(item) {
    this.sprite = new Framework.Sprite(define.materialPath + 'item_stone.png'); 
    this.sprite.scale = 2;
    this.sprite.index = 1;  //?
    var PIXEL_CONST = 64;

    this.mapPosition = {x:0, y:0};

    this.constants = new Constants();
    this.item = item;

    //被炸彈炸到的function
    this.explored = function(){

    }

    this.update = function(){

    }


    this.draw = function(ctx){
        this.sprite.position = {x: this.mapPosition.x * PIXEL_CONST, y: this.mapPosition.y * PIXEL_CONST};
        this.sprite.draw(ctx);
    }

};

Object.defineProperty(Item_stone.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.mapPosition.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
