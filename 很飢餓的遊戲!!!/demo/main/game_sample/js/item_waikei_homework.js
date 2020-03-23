var Item_waikei_homework = function() {
    this.item_waikei_homework = new Framework.Sprite(define.materialPath + 'item_waikei_homework.png'); 
    this.item_waikei_homework.scale = 2;
    this.mapPosition = {x:0, y:0};

    this.update = function(){

    }

    this.draw = function(ctx){
        this.item_waikei_homework.draw(ctx);
    }

};

Object.defineProperty(Item_waikei_homework.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_waikei_homework.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
