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
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "build";
    //可疊加物件有amount 不可疊加有durability
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
