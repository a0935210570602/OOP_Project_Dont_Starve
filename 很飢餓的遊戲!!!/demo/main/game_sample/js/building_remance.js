var Building_remance = function(number) {
    this.building_remance = [];
    this.building_remance.push(new Framework.Sprite(define.builldingPath + '遺跡1.png'));
    this.building_remance[0].scale = 2
    this.building_remance.push(new Framework.Sprite(define.builldingPath + '遺跡2.png'));
    this.building_remance[1].scale = 2
    this.building_remance.push(new Framework.Sprite(define.builldingPath + '遺跡3.png'));
    this.building_remance[2].scale = 2
    this.isRegenerate = false;
    this.mapPosition = {x:0, y:0};
    this.item_num = -5;
    this.type = "build";
    this.amount = 1;
    this.item_can_be_picked = false;
    this.draw = function(ctx){
        this.building_remance[number].position = this.mapPosition;
        this.building_remance[number].draw(ctx);
    }
};
Object.defineProperty(Building_remance.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.mapPosition = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 