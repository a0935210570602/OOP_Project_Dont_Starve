var Weapon = function(option) {
    this.constructor = function(constructOption){
        this.attack_point = constructOption.attack[0];
        this.magic_attack_point = constructOption.attack[1];
        this.arror_attack_point = constructOption.attack[2];
        this.weapon = constructOption.imagePath; 
        this.item_num = constructOption.itemNumber;
        this.reduceDurability = constructOption.reduceDurability;
        this.weapon.scale = constructOption.scale;
    }
    this.constructor(option);
    this.mapPosition = {x:0, y:0};
    this.type = "equipment";
    this.place = "hand";
    this.durability = 100;
    this.amount = 1;
    this.status = true;
    this.isRegenerate = false;
    this.item_can_be_picked = true;
    this.draw = function(ctx){
        this.weapon.draw(ctx);
    }
};
Object.defineProperty(Weapon.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.weapon.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 