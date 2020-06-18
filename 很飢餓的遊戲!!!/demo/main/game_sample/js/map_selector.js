var Map_selector = function() {
    this.flag ={x:0, y:0};
    this.flag_map;
    this.local_map_0 = new Local_map_0();
    
    this.pickObject = function(map_name, world_position){
        this.flag.x = Math.floor((world_position.y) / 40);
        this.flag.y = Math.floor((world_position.x) / 40);
        this.flag_map = this.flag.y*10+this.flag.x;
        this.local_map_0.removeObject(map_name, {x:(world_position.y%40), y:(world_position.x%40)}, this.flag_map);
    }
    
    this.addObject = function(map_name, world_position, object){
        this.flag.x = Math.floor((world_position.y) / 40);
        this.flag.y = Math.floor((world_position.x) / 40);
        this.flag_map = this.flag.y*10+this.flag.x;
        this.local_map_0.addObject(map_name, {x:(world_position.y%40), y:(world_position.x%40)}, this.flag_map, object);
    }

    this.checkIsBlank = function(map_name, world_position){
        this.flag.x = Math.floor((world_position.y) / 40);
        this.flag.y = Math.floor((world_position.x) / 40);
        this.flag_map = this.flag.y*10+this.flag.x;
        return this.local_map_0.hasItem(map_name, {x:(world_position.y%40), y:(world_position.x%40)}, this.flag_map);
    }

    this.checkFloorCanWalk = function(map_name, world_position){
        this.flag.x = Math.floor((world_position.y) / 40);
        this.flag.y = Math.floor((world_position.x) / 40);
        this.flag_map = this.flag.y*10+this.flag.x;
        return this.local_map_0.canWalk(map_name, {x:(world_position.y%40), y:(world_position.x%40)}, this.flag_map);
    }

    this.makeItemMap = function(map_name, world_position){
        this.itemArray = [];
        this.item_line = [];
        for(var i=-5;i<6;i++){
            for(var j=-5;j<6;j++){
                this.flag.x = Math.floor((world_position.y+i) / 40);
                this.flag.y = Math.floor((world_position.x+j) / 40);
                this.item_line.push(this.littleItem(map_name, {x:((world_position.y+i)%40), y:((world_position.x+j)%40)}, this.flag.y*10+this.flag.x));
            }
            this.itemArray.push(this.item_line);
            this.item_line = [];
        }
        return this.itemArray;
    }

    this.nullClean = function(){
        this.local_map_0.proxy.nullMapClean();
    }

    this.littleItem = function(map_name, position, number){
        return this.local_map_0.catchItem(map_name, position,number);
    }

    this.makeMap= function(map_name, world_position){
        this.mapArray = [];
        this.map_line = [];
        for(var i=-5;i<6;i++){
            for(var j=-5;j<6;j++){
                this.flag.x = Math.floor((world_position.y+i) / 40);
                this.flag.y = Math.floor((world_position.x+j) / 40);

                this.map_line.push(this.littleMap(map_name, {x:((world_position.y+i)%40), y:((world_position.x+j)%40)}, this.flag.y*10+this.flag.x));
            }
            this.mapArray.push(this.map_line);
            this.map_line = [];
        }
        return this.mapArray;
    }

    this.littleMap = function(map_name, position, number){
        return this.local_map_0.catchMap(map_name, position, number);
    }

};
