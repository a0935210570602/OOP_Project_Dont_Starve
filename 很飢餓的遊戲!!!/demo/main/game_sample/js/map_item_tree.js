var Map_item_tree = function() {
    this.map_item_tree = new Framework.Sprite(define.materialPath + 'map_item_tree.png'); 
    this.map_item_tree.scale = 2;
    this.map_item_tree_growed = new Framework.Sprite(define.materialPath + 'map_item_tree_growed.png'); 
    this.map_item_tree_growed.scale = 2;
    this.map_item_tree_cutted = new Framework.Sprite(define.materialPath + 'map_item_tree_cutted.png'); 
    this.map_item_tree_cutted.scale = 2;

    this.mapPosition = {x:0, y:0};
    this.status = true;
    this.isRegenerate = false;
    this.item_num = -1;
    //equipment: 可入裝備欄的物件 material: 可堆疊的基本物件 tool: 不可堆疊的其他物件 food: 可堆疊的食物
    this.type = "material";
    //可疊加物件有amount 不可疊加有durability
    this.amount = 1;
    //計算被按了幾次空白
    this.false_count = 1;
    this.regeneration_time = 3000;
    this.tree_is_be_cut = false;
    this.reset_cutted = function(){
        setTimeout(()=>{  this.false_count = 3,this.update();}, this.regeneration_time);
    }

    this.reset_growed = function(){
        setTimeout(()=>{  this.false_count = 0}, this.regeneration_time);
    }

    this.update = function(){
        this.status = false;
        // console.log("this.false_count",this.false_count);
        if(this.tree_is_be_cut && this.false_count >= 5){
            this.reset_cutted();
            
        }else if(this.tree_is_be_cut && this.false_count == 3){
            this.reset_growed();
            this.tree_is_be_cut = false;
        }else{
            if(!this.status){
                if(this.false_count != 5)
                    this.false_count += 1;;
                // console.log("this.false_count",this.false_count);
                this.status = true;
            }
        }
    }

    this.draw = function(ctx){
        // console.log("this.false_count",this.false_count);
        if(this.false_count >= 5){
            this.map_item_tree_cutted.draw(ctx);
            if(this.false_count >= 5){
                this.tree_is_be_cut = true;
                // console.log("draw");
                this.update();
            }
        }
        if(this.false_count > 2 &&　this.false_count < 5){
            this.map_item_tree_growed.draw(ctx);
        }
        if(this.false_count > -1 && this.false_count <= 2){
            this.map_item_tree.draw(ctx);
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
