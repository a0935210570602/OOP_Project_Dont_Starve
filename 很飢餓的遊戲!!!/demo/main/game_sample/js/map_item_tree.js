var Map_item_tree = function(map) {
    this.map_item_tree = new Framework.Sprite(define.materialPath + 'map_item_tree.png'); 
    this.map_item_tree.scale = 2;
    this.map_item_tree_growed = new Framework.Sprite(define.materialPath + 'map_item_tree_growed.png'); 
    this.map_item_tree_growed.scale = 2;
    this.map_item_tree_cutted = new Framework.Sprite(define.materialPath + 'map_item_tree_cutted.png'); 
    this.map_item_tree_cutted.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = true;
    this.item_num = -1;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物 plant: 可堆疊植物
    this.type = "material";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    //計算被按了幾次空白
    this.false_count = 0;
    this.treeStatus = 0;
    this.dropWood = false;
    this.regeneration_time = 5000;
    this.growing = false;
    this.grow = function(){
        setTimeout(()=>{
            if(this.treeStatus != 0){
                this.treeStatus -= 1;
                this.status = true;
                this.growing = false;
            }
        }, this.regeneration_time);
    }
    this.tryGrow = function(){
        var interval = setInterval(()=>{
            if(!this.growing){
                this.grow();
                this.growing = true;
                clearInterval(interval);
            }
        },1000);
    }
    this.update = function(){
        this.false_count += 1;
        if(this.false_count == 2){
            this.treeStatus += 1;
            this.false_count = 0;
            this.dropWood = true;
            this.tryGrow();
            if(this.treeStatus == 2)
                this.status = false;
        }else{
            this.dropWood = false;
        }
    }
    this.draw = function(ctx){
        switch(this.treeStatus){
            case 0:
                this.map_item_tree.draw(ctx);
                break;
            case 1:
                this.map_item_tree_growed.draw(ctx);
                break;
            case 2:
                this.map_item_tree_cutted.draw(ctx);
                break;
            default:
                break;
        }
    }
};
Object.defineProperty(Map_item_tree.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.map_item_tree.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.map_item_tree_growed.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.map_item_tree_cutted.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 