var Branch = function() {
    this.mapBranch = new Framework.Sprite(define.materialPath + '0.png');
    this.mapBranch.scale = 2;

    this.item_4 = new Framework.Sprite(define.materialPath + '4.png');
    this.item_4.scale = 2;

    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this.tileType = 0;
    var PIXEL_CONST = 64;

    // Test
    this.update = function(){

    }

    this.draw = function(ctx){
        // console.log("branch.draw_this._tileType");
        // console.log(this.tileType);

        if(this.tileType === 1){
        }else if(this.tileType === 2){
        }else if(this.tileType === 3){
        }else if(this.tileType === 4){
            this.item_4.draw(ctx);
        }else if(this.tileType === 5){
        }else if(this.tileType === 6){
            this.mapBranch.draw(ctx);
        }
        
    }

};

Object.defineProperty(Branch.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.mapBranch.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.item_4.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

