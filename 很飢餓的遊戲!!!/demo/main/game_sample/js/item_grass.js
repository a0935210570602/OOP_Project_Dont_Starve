var Item_grass = function() {
    this.item_grass = new Framework.Sprite(define.materialPath + 'item_grass.png'); 
    this.item_grass_mowed = new Framework.Sprite(define.materialPath + 'item_grass_mowed.png'); 

    this.item_grass.scale = 2;
    this.item_grass_mowed.scale = 2;

    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.regeneration_time = 3000;

    this.reset = function(){
        setTimeout(()=>{  this.status = true}, this.regeneration_time);
    }

    this.update = function(){
        this.status = false;
        this.reset();
    }

    this.draw = function(ctx){
        if(this.status){
            this.item_grass.draw(ctx);
        }else{
            this.item_grass_mowed.draw(ctx);
        }
    }
};

Object.defineProperty(Item_grass.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.item_grass.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.item_grass_mowed.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 
