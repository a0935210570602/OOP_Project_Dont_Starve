var Map_selector = function() {
    this.flag ={x:0, y:0};
    this.local_map_0 = new Local_map_0();
    this.init= function(){
    }
    this.makeMape= function(world_position){
        this.mapArray = [];
        this.map_line = [];
        console.log(world_position);
        
        for(var i=-5;i<6;i++){
            for(var j=-5;j<6;j++){
                // console.log(world_position.x+i);
                // console.log(world_position.y+j);
                this.flag.x = Math.floor((world_position.y+i) / 40);
                this.flag.y = Math.floor((world_position.x+j) / 40);

                this.map_line.push(this.littleMap({x:((world_position.y+i)%40), y:((world_position.x+j)%40)}, this.flag.y*10+this.flag.x));
            }
            this.mapArray.push(this.map_line);
            this.map_line = [];
        }

        return this.mapArray;
    }

    this.littleMap = function(position, number){
        // console.log(number);
        // console.log(position);

        return this.local_map_0.catch(position,number);
    }

};
