var Branch = function() {
    this.mapBranch = new Framework.Sprite(define.materialPath + 'branch_1.png');
    this.mapBranch.scale = 2;

    this.item_1 = new Framework.Sprite(define.materialPath + '1.png');
    this.item_1.scale = 2;

    this.item_2 = new Framework.Sprite(define.materialPath + '2.png');
    this.item_2.scale = 2;

    this.item_3 = new Framework.Sprite(define.materialPath + '3.png');
    this.item_3.scale = 2;

    this.item_4 = new Framework.Sprite(define.materialPath + '4.png');
    this.item_4.scale = 2;

    this.item_5 = new Framework.Sprite(define.materialPath + '5.png');
    this.item_5.scale = 2;

    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this._tileType = 0;

    this.update = function(){

    }

    this.draw = function(ctx){

        if(this._tileType === 1){
            this.item_1.draw(ctx);
        }else if(this._tileType === 2){
            this.item_2.draw(ctx);
        }else if(this._tileType === 3){
            this.item_3.draw(ctx);
        }else if(this._tileType === 4){
            this.item_4.draw(ctx);
        }else if(this._tileType === 5){
            this.item_5.draw(ctx);
        }else if(this._tileType === 6){
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
    }
}); 

