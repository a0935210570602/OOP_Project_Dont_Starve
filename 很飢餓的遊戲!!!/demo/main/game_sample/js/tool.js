var Tool = function(option) {
    this.constructor = function(constructOption){
        this.attack_point = constructOption.attackPoint;
        this.tool = constructOption.imagePath; 
        this.item_num = constructOption.itemNumber;
        this.reduceDurability = constructOption.reduceDurability;
    }
    this.constructor(option);
    this.tool.scale = 0.8;
    this.mapPosition = {x:0, y:0};
    this.type = "equipment";
    this.place = "hand";
    this.durability = 100;
    this.magic_attack_point = 0;
    this.arror_attack_point = 0;
    this.status = true;
    this.isRegenerate = false;
    this.item_can_be_picked = true;
    this.draw = function(ctx){
        this.tool.draw(ctx);
    }
};
Object.defineProperty(Tool.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.tool.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 