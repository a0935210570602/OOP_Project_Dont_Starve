var World_map = function(map, item_map)
{
    this.demo_dead_trigger = 0;
    this.mapArray = map;
    this.item_map_Array = item_map;
    this.load = function(){
        this.terrain_plain = [];
        this.terrain_plain.push(new Framework.Sprite(define.imageMorningPath + 'terrain_plain.png')); 
        this.terrain_plain[0].scale = 2;
        this.terrain_plain.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_plain.png')); 
        this.terrain_plain[1].scale = 2;
        this.terrain_plain.push(new Framework.Sprite(define.imageNightPath + 'terrain_plain.png')); 
        this.terrain_plain[2].scale = 2;

        this.terrain_water = [];
        this.terrain_water.push(new Framework.Sprite(define.imageMorningPath + 'terrain_water.png')); 
        this.terrain_water[0].scale = 2;
        this.terrain_water.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_water.png')); 
        this.terrain_water[1].scale = 2;
        this.terrain_water.push(new Framework.Sprite(define.imageNightPath + 'terrain_water.png')); 
        this.terrain_water[2].scale = 2;

        this.terrain_mountain = [];
        this.terrain_mountain.push(new Framework.Sprite(define.imageMorningPath + 'terrain_mountain.png')); 
        this.terrain_mountain[0].scale = 2;
        this.terrain_mountain.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_mountain.png')); 
        this.terrain_mountain[1].scale = 2;
        this.terrain_mountain.push(new Framework.Sprite(define.imageNightPath + 'terrain_mountain.png')); 
        this.terrain_mountain[2].scale = 2;

        this.terrain_blood_water = [];
        this.terrain_blood_water.push(new Framework.Sprite(define.imageMorningPath + 'terrain_blood_water.png')); 
        this.terrain_blood_water[0].scale = 2;
        this.terrain_blood_water.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_blood_water.png')); 
        this.terrain_blood_water[1].scale = 2;
        this.terrain_blood_water.push(new Framework.Sprite(define.imageNightPath + 'terrain_blood_water.png')); 
        this.terrain_blood_water[2].scale = 2;
    
        this.terrain_forest = [];
        this.terrain_forest.push(new Framework.Sprite(define.imageMorningPath + 'terrain_forest.png')); 
        this.terrain_forest[0].scale = 2;
        this.terrain_forest.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_forest.png')); 
        this.terrain_forest[1].scale = 2;
        this.terrain_forest.push(new Framework.Sprite(define.imageNightPath + 'terrain_forest.png')); 
        this.terrain_forest[2].scale = 2;
    
        this.terrain_lava = [];
        this.terrain_lava.push(new Framework.Sprite(define.imageMorningPath + 'terrain_lava.png')); 
        this.terrain_lava[0].scale = 2;
        this.terrain_lava.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_lava.png')); 
        this.terrain_lava[1].scale = 2;
        this.terrain_lava.push(new Framework.Sprite(define.imageNightPath + 'terrain_lava.png')); 
        this.terrain_lava[2].scale = 2;

        this.terrain_snow_ground = [];
        this.terrain_snow_ground.push(new Framework.Sprite(define.imageMorningPath + 'terrain_snow_ground.png')); 
        this.terrain_snow_ground[0].scale = 2;
        this.terrain_snow_ground.push(new Framework.Sprite(define.imageAfternoonPath + 'terrain_snow_ground.png')); 
        this.terrain_snow_ground[1].scale = 2;
        this.terrain_snow_ground.push(new Framework.Sprite(define.imageNightPath + 'terrain_snow_ground.png')); 
        this.terrain_snow_ground[2].scale = 2;
        

        /////////////////////////////////////////////////////////////////////////////////////

        this.clock = new Clock();
        this.clock.scale = 2;

        this.game_object_detail = new Game_object_detail();

        this.item_blank = new Framework.Sprite(define.materialPath + 'item_blank.png');
        this.item_blank.scale = 2;

        this.Floral = new Framework.Sprite(define.materialPath + 'Floral.png');
        this.Floral.scale = 2;

        this.item_grass_growed_dig = new Framework.Sprite(define.materialPath + 'item_grass_growed_dig.png'); 
        this.item_grass_growed_dig.scale = 2;

        this.item_berry = new Framework.Sprite(define.materialPath + 'item_berry.png'); 
        this.item_berry.scale = 2;

        this.item_flower_picked = new Framework.Sprite(define.materialPath + 'item_flower_picked.png'); 
        this.item_flower_picked.scale = 2;

        this.item_flower_dig = new Framework.Sprite(define.materialPath + 'item_flower_dig.png'); 
        this.item_flower_dig.scale = 2;

        this.item_bush_dig = new Framework.Sprite(define.materialPath + 'item_bush_dig.png'); 
        this.item_bush_dig.scale = 2;

        this.monster_cute_litter_eye_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
        this.monster_cute_litter_eye_tocan.scale = 2;

        this.item_grass_dig = new Framework.Sprite(define.materialPath + 'item_grass_dig.png'); 
        this.item_grass_dig.scale = 2;

        this.map_item_tree = new Framework.Sprite(define.materialPath + 'map_item_tree.png'); 
        this.map_item_tree_growed = new Framework.Sprite(define.materialPath + 'map_item_tree_growed.png'); 
        this.map_item_tree_cutted = new Framework.Sprite(define.materialPath + 'map_item_tree_cutted.png'); 

        this.map_item_tree.scale = 2;
        this.map_item_tree_growed.scale = 2;
        this.map_item_tree_cutted.scale = 2;

        this.url = define.skillAnimationPath + 'Recovery4.png';
        this.flying_arror = new Framework.AnimationSprite({url:this.url, col:5 , row:4 , loop:true , speed:16}); 
    
        this.flying_arror_left = new Framework.Sprite(define.materialPath + 'arror_left.png'); 
        this.flying_arror_left.scale = 2;
    
        this.flying_arror_right = new Framework.Sprite(define.materialPath + 'arror_right.png'); 
        this.flying_arror_right.scale = 2;
    
        this.flying_arror_up = new Framework.Sprite(define.materialPath + 'arror_up.png'); 
        this.flying_arror_up.scale = 2;
    
        this.flying_arror_down = new Framework.Sprite(define.materialPath + 'arror_down.png'); 
        this.flying_arror_down.scale = 2;

        this.player1 = new BombMan(define.materialPath + 'Actor.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        this.player1.canvasPosition = {x:13, y:7};
        this.player1.position = {x:10, y:1};

        this.monster = [];
        this.stopMonster = false;
        this.stopMonsterCounter =0;
        this.synthesisBar = new SynthesisBar(this.player1.getBackPack());

        this.skill_handler = new Skill_handler();
        this.spear_handler = new Spear_handler();
        this.creation_blood_status = new Creation_blood_status();
        this.audio = new Framework.Audio({
            kick: {
                mp3: define.musicPath + 'levelup.mp3',
                //ogg: define.musicPath + 'kick2.ogg',
                //wav: define.musicPath + 'kick2.wav'
            }, song1:{
                mp3: define.musicPath + 'easy.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, die_scream:{
                mp3: define.musicPath + '女慘叫.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }
        });
    }

    this.init = function()
    {
        this.game_object_detail.init();
        this.playerWalkDirection = {x:0, y:1};
        this.skillTimer = new Skill_timer();
        this.character_description = new Character_description();
        this.player1.init();
        this.clock.init();
        this.monster_damage_handler = new Monster_damage_handler(this.player1, this.monster);

        //畫
        this.clockDraw(Framework.Game._context);
        this.player1.StepMovedCallBack.push(this.playerMovedHandler);
        this.constants = new Constants();
        this.is_character_description_open = false;
        //this.mapArray = [];
        this.boxArray = [];
        this.bombArray = [];
        this.exploreArray = [];
        this.tileArray = [];
        this.tileMap = [];
        this.tileArrayPosition = [];
        this.tilePosition = [];
        this.itemArray = [];
        this.itemMap = [];
        //playerPositionOnMap為人物出現在mapArray的位置，只要改這個，勿動其他常數
        this.playerPositionOnMap = {x:20,y:20};
        for(var i = 0; i < 11;i++){
            this.tileArrayPosition = [];
            for(var j = 0; j < 11; j++){
                this.tileArrayPosition.push({x: j+8, y: i+2});
            }
            this.tilePosition.push(this.tileArrayPosition);
        }


        for(var i=0; i<this.item_map_Array.length; i++){
            var line = this.item_map_Array[i];
            this.itemArray = [];
            for(var j=0; j<this.item_map_Array[i].length; j++){
                switch(line[j]){
                    case 1:
                        this.itemArray.push(new Item_flower());
                        break;
                    case 2:
                        this.itemArray.push(new Item_spider_web());
                        break;
                    case 3:
                        this.itemArray.push(new Item_stone());
                        break;
                    case 4:
                        this.itemArray.push(new Item_branch());
                        break;
                    case 5:
                        this.itemArray.push(new Item_waikei_homework());
                        break;
                    case 6:      
                        this.itemArray.push(new Item_grass());
                        break;
                    case 7:      
                        this.itemArray.push(new Item_wood());
                        break;
                    case 8:      
                        this.itemArray.push(new Item_flint());
                        break;
                    case 9:      
                        this.itemArray.push(new Item_gold());
                        break;
                    case 10:      
                        this.itemArray.push(new Item_pigskin());
                        break;
                    case 11:      
                        this.itemArray.push(new Item_bee_sting());
                        break;
                    case 12:
                        this.itemArray.push(new Item_snow_ball());
                        break;
                    case 13:
                        this.itemArray.push(new Item_rope());
                        break;
                    case 14:
                        this.itemArray.push(new Item_droplet());
                        break;
                    case 15:
                        this.itemArray.push(new Item_pixilart());
                        break;
                    case 16:
                        this.itemArray.push(new Item_ax());
                        break;
                    case 17:
                        this.itemArray.push(new Item_fishing_rod());
                        break;
                    case 18:
                        this.itemArray.push(new Item_shovel());
                        break;
                    case 19:
                        this.itemArray.push(new Item_gold_ax());
                        break;
                    case 20:
                        this.itemArray.push(new Item_gold_shovel());
                        break;
                    case 21:
                        this.itemArray.push(new Item_gold_pixilart());
                        break;
                    case 22:
                        this.itemArray.push(new Item_helmat());
                        break;
                    case 23:
                        this.itemArray.push(new Item_armor());
                        break;
                    case 24:
                        this.itemArray.push(new Item_wood_armor());
                        break;
                    case 25:
                        this.itemArray.push(new Item_spear());
                        break;
                    case 26:
                        this.itemArray.push(new Item_arror());
                        break;
                    case 27:
                        this.itemArray.push(new Item_king_wand());
                        break;
                    case 28:
                        this.itemArray.push(new Item_space_wand());
                        break;
                    case 29:
                        this.itemArray.push(new Item_fire_wand());
                        break;
                    case 30:
                        this.itemArray.push(new Item_ice_wand());
                        break;
                    case 31:
                        this.itemArray.push(new Item_lamp());
                        break;
                    case 32:
                        this.itemArray.push(new Item_firebundle());
                        break;
                    case 33:
                        this.itemArray.push(new Item_camp());
                        break;
                    case 34:
                        this.itemArray.push(new Item_campfire());
                        break;
                    case 35:
                        this.itemArray.push(new Item_ice());
                        break;
                    case 36:
                        this.itemArray.push(new Item_bush());
                        break;
                    case 37:
                        this.itemArray.push(new Item_flower_picked());
                        break;
                    case 38:
                        this.itemArray.push(new Item_bush());
                        break;
                    case -1:
                        this.itemArray.push(new Map_item_tree());
                        break;
                    default:
                        this.itemArray.push(new Item_blank());
                        break;    
                }
            }
            this.itemMap.push(this.itemArray);
        }
	};

    this.setPlayerPosition = function(playerPosition){
        this.player1.position = playerPosition;
    }
    this.addMonster = function(monsterPosition)
    {
        var newMonster = new Monster(define.materialPath + 'monster_3.png',this, {down: {from: 0, to: 3}, left: {from:4, to: 7}, right: {from: 8, to: 11}, up: {from: 12, to: 15}});
        newMonster.position = monsterPosition;
        this.monster.push(newMonster);
    }

    this.playerMovedHandler = function(player){
        var constants = new Constants();
        var item = m_map.mapArray[player.position.y][player.position.x];
        if(item === constants.ItemEnum.INCREASE_BOMB){
            player.increaseBombNum();
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*22+player.position.x].tileType = 0;
            m_map.score.addScore(200);
        }else if(item === constants.ItemEnum.INCREASE_POWER){
            player.increaseBombPower();
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*22+player.position.x].tileType = 0;
            m_map.score.addScore(200);
        }else if(item === constants.ItemEnum.STOP_MONSTER){
            m_map.stopMonster = true;
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*22+player.position.x].tileType = 0;
            m_map.score.addScore(200);
        }
    }

	this.update = function()
	{   
        // console.log("update");        
        // console.log(this.keyPress);
        if(this.skillTimer.isEnergyFull){
            this.skill_handler.start(this.playerWalkDirection, this.playerPositionOnMap);
        }

        if(this.player1.player_state == "alive"){
            this.checkIsDie();
        }
        
        this.skill_handler.update();
        this.spear_handler.update();
        this.monster_damage_handler.update();

        if(this.pressWalk === true)
        {
            if(this.player1.player_state == "alive" && this.checkIsWalkAble(this.playerPositionOnMap.x+this.playerWalkDirection.x,this.playerPositionOnMap.y+this.playerWalkDirection.y))
            {
                if(this.keyPress == "Down") {
                    this.player1.walk({x:0,y:1});
                    this.playerPositionOnMap.y+=1;
                }
                
                if(this.keyPress == "Left") {
                    this.player1.walk({x:-1,y:0});
                    this.playerPositionOnMap.x-=1;
                }
                
                if(this.keyPress == "Right") {
                    this.player1.walk({x:1,y:0});
                    this.playerPositionOnMap.x+=1;
                }
                
                if(this.keyPress == "Up") {
                    this.player1.walk({x:0,y:-1});
                    this.playerPositionOnMap.y-=1;
                }
            }
        }
        this.player1.update();
        this.character_description.update(this.player1);
        for(var i=0;i<this.monster.length;i++)
            this.monster[i].update();
            
        this.creation_blood_status.playerUpdate(this.player1);
        this.creation_blood_status.monsterUpdate(this.monster);

        // if(this.stopMonster === true)
        // {
        //     // console.log("stopMonster");
        //     this.stopMonsterCounter++;
        //     if(this.stopMonsterCounter > 1000)
        //     {
        //         this.stopMonster = false;
        //     }
        // }else
        // {
        //     // console.log("stopMonster");
        //     for(var i=0;i<this.monster.length;i++)
        //     {
        //         this.monster[i].update();
        //         if((this.demo_dead_trigger == 1 && this.player1.characterStatus.currentHealth <= 0)  || (this.monster[i].isDead == false && this.monster[i].position.x == this.player1.position.x && this.monster[i].position.y == this.player1.position.y))
        //         {
        //             this.player1.die();
        //             break;
        //         }
        //     }
        // }
    }
    
    // this.walk = function(moveStep){
    //     if(this.isWalking === false){
    //         if(moveStep.x > 0){
    //             this.playerDirection = this.constants.DirectionEnum.RIGHT;
    //         }else if(moveStep.x <0){
    //             this.playerDirection = this.constants.DirectionEnum.LEFT;
    //         }

    //         if(moveStep.y > 0){
    //             this.playerDirection = this.constants.DirectionEnum.DOWN;
    //         }else if(moveStep.y < 0){
    //             this.playerDirection = this.constants.DirectionEnum.UP;
    //         }
    //         this.isWalking = true;
    //         this.walkTarget = {x:this.mapPosition.x + moveStep.x, y:this.mapPosition.y + moveStep.y};
    //         this.monster_cute_little_eye.start({ from: this.playerDirection * 3, to: this.playerDirection * 3 + 2, loop: true});
    //     }
    // }
	this.draw = function(ctx) {
        // for(var i=0;i<this.monster.length;i++){
        //     console.log("monster",i," = ",this.monster[i].is_start);
        // }
        this.player1.characterStatus.draw(ctx);
        // console.log("draw");
        if(this.player1.character_descruption_total_point[0] >= 0){
            for(var i=0,ii=-5; i<11; i++,ii++){
                for(var j=0,jj=-5; j<11; j++,jj++){
                    switch(this.mapArray[jj+ this.playerPositionOnMap.y][ii+ this.playerPositionOnMap.x]){
                        case 192:
                            this.terrain_plain[this.clock.status].position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.terrain_plain[this.clock.status].draw(ctx);
                            break;
                        case 200:
                            this.terrain_water[this.clock.status].position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.terrain_water[this.clock.status].draw(ctx);
                            break;
                        case 137:
                            this.terrain_mountain[this.clock.status].position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.terrain_mountain[this.clock.status].draw(ctx);
                            break;
                        case 91:
                            this.terrain_blood_water[this.clock.status].position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.terrain_blood_water[this.clock.status].draw(ctx);
                            break;
                        case 123:
                            this.terrain_forest[this.clock.status].position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.terrain_forest[this.clock.status].draw(ctx);
                            break;
                        case 196:     
                            this.terrain_lava[this.clock.status].position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.terrain_lava[this.clock.status].draw(ctx);
                            break;
                        case 255:      
                            this.terrain_snow_ground[this.clock.status].position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.terrain_snow_ground[this.clock.status].draw(ctx);
                            break;
                    }
                }
            }
    
            for(var i=-5,ii=0; i<6; i++,ii++){
                for(var j=-5,jj=0; j<6; j++,jj++){
                    this.itemMap[j+ this.playerPositionOnMap.y][i+ this.playerPositionOnMap.x].position = this.tilePosition[jj][ii];
                    this.itemMap[j+ this.playerPositionOnMap.y][i+ this.playerPositionOnMap.x].draw(ctx);
                }
            }
    
            // for(var i=0;i<this.monster.length;i++){
            //     if(this.isCanvasCanDraw(i)){
            //         this.CanvasCanDraw(this.monster[i], ctx);
            //     }
            // }

            if(this.skillTimer.buttonPress)
                this.skillTimer.draw(ctx);

            this.monster_damage_handler.draw(ctx);
            this.player1.draw(ctx);
            this.clock.draw(ctx);
    
            for(var i=0;i<this.monster.length;i++){
                this.monster[i].draw(ctx);
            }


            this.character_description.draw(ctx);
            
            if(this.skill_handler.fire_wand_level1._start){
                for(var i=-5,ii=0; i<6; i++,ii++){
                    for(var j=-5,jj=0; j<6; j++,jj++){
                        if(this.skill_handler.mapPosition.x == i + this.playerPositionOnMap.x && this.skill_handler.mapPosition.y == j+ this.playerPositionOnMap.y){
                            this.skill_handler.fire_wand_level1.position = {x:64*this.tilePosition[jj][ii].x,y:64*this.tilePosition[jj][ii].y};
                            this.skill_handler.draw(ctx);
                        }
                    }
                }
            }else if(this.spear_handler.spear._start){
                for(var i=-5,ii=0; i<6; i++,ii++){
                    for(var j=-5,jj=0; j<6; j++,jj++){
                        if(this.spear_handler.mapPosition.x == i + this.playerPositionOnMap.x && this.spear_handler.mapPosition.y == j+ this.playerPositionOnMap.y){
                            this.spear_handler.spear.position = {x:64*this.tilePosition[jj][ii].x,y:64*this.tilePosition[jj][ii].y};
                            this.spear_handler.draw(ctx);
                        }
                    }
                }
            }
     
        }
        
        this.game_object_detail.draw(ctx);
        this.synthesisBar.draw(ctx);
        this.creation_blood_status.draw(ctx);

    }	
    
    this.clockDraw = function(ctx){
        var clockInterval = setInterval(() => {
            this.clock.draw(ctx);
            this.player1.characterStatus.draw(ctx);
            if(this.player1.character_descruption_total_point[0] <= 0){
                clearInterval(clockInterval);
            }
        }, 500);
    }

    this.checkKeyIsPress  = function(key){
        for(var i=0;i<this.capture_key.length;i++){
            if(this.capture_key[i].key == key){
                return true;
            }
        }
        return false;
    }

    this.whatIsTheLastKeyMove  = function(){
        for(var i=this.capture_key.length-1;i>=0;i--){
            if(this.capture_key[i].key == 'Down' || this.capture_key[i].key == 'Up' ||
                this.capture_key[i].key == 'Left' || this.capture_key[i].key == 'Right'){
                return this.capture_key[i].key;
                break;
            }
        }
        return "No";
    }

    this.addMonsterRandom = function(amount){
        var count = 0;
        var m_position;
        while(this.monster.length != amount){
            m_position = {x: Math.floor(Math.random()*this.mapArray[0].length),y: Math.floor(Math.random()*this.mapArray.length)};
            if(this.mapArray[m_position.y][m_position.x] != 91 && this.mapArray[m_position.y][m_position.x] != 200 && this.item_map_Array[m_position.y][m_position.x] == 0){
                var newMonster =  new Monster_cute_little_eye(this);
                newMonster.position = m_position;
                this.monster.push(newMonster);
            }
        }
    }

    // this.isCanvasCanDraw = function(i){
    //     //玩家在畫布上的座標
    //     // console.log("this.player1.position");
    //     // console.log(this.player1.position);
    //     // console.log("newMonster.mapPosition");
    //     // console.log(this.monster[0].mapPosition);
  
    //     //玩家在遊戲中的座標
    //     // console.log("this.playerPositionOnMap");
    //     // console.log(this.playerPositionOnMap);
    //     if(Math.abs(this.monster[i].mapPosition.x-this.playerPositionOnMap.x)<=5 && Math.abs(this.monster[i].mapPosition.y-this.playerPositionOnMap.y)<=5){
    //         return true;
    //     }
    //     return false;
    // }
    // this.CanvasCanDraw = function(monster, ctx){
    //     monster.canvasPosition.x = this.player1.position.x + monster.mapPosition.x-this.playerPositionOnMap.x;
    //     monster.canvasPosition.y = this.player1.position.y + monster.mapPosition.y-this.playerPositionOnMap.y;
    //     monster.draw(ctx);
    // }
    var m_map = this;
    this.deadClear = function(){
        this.skillTimer.clear();
        this.capture_key = [];
        this.player1.characterStatus.currentHealth = 0;
        this.player1.character_descruption_point[0] = -1;
        this.player1.update();
    }
    this.checkIsDie = function(){
        // if(this.player1.character_descruption_point[0] == 0){
        //     this.player1.dieEvent({x: 13, y: 7});
        //     this.audio.play({name: 'die_scream', loop: false});
        //     this.update();
        //     m_map.draw(Framework.Game._context);
            
        //     setTimeout(()=>{
        //         this.deadClear();
        //         m_map.player1.die();

        //     },1500);
        // }

        // if(this.playerPositionOnMap.x == this.monster_cute_little_eye.mapPosition.x &&
        //     this.playerPositionOnMap.y == this.monster_cute_little_eye.mapPosition.y ){

        //     this.player1.dieEvent({x: 13, y: 7});
        //     this.audio.play({name: 'die_scream', loop: false});
        //     this.update();
        //     // this.player1.dieAnimation({x: 13, y: 7});
        //     // console.log("this.player1.die");
        //     m_map.draw(Framework.Game._context);
        //     // console.log("this.player1.character_descruption_point[0]");

        //     // console.log(this.player1.character_descruption_point[0]);

        //     setTimeout(()=>{
        //         this.deadClear();
        //         m_map.player1.die();

        //     },3000);
        // }
    }

    this.checkBoxExplore = function(explorePos)
    {
        for(var j=0; j<m_map.boxArray.length; j++){
            if(m_map.boxArray[j] != undefined){
                var boxPosition = m_map.boxArray[j].position;
                if(boxPosition.x === explorePos.x && boxPosition.y === explorePos.y){
                    m_map.boxArray[j].explored();
                    m_map.mapArray[explorePos.y][explorePos.x] = m_map.boxArray[j].item;
                    m_map.tileArray[explorePos.y*22+explorePos.x].tileType = m_map.boxArray[j].item;
                    m_map.boxArray.splice(j,1);
                    m_map.score.addScore(100);
                }
            }
        }
    }

    this.getLeftMonsterNum = function()
    {
        var count =0;
        for(var i=0;i<this.monster.length;i++)
        {
            if(this.monster[i].isDead === false)
            {
                count++;
            }
        }
        return count;
    }

    this.pressWalk = false;
    this.keyPress = "";
    this.key_is_press = false;
    this.skill_number = -99;
  
    this.capture_key = [];
    this.keydown = function(e, list){
        // console.log("keydown");
        // console.log(e.key);
        this.capture_key.push(e);
       
        // for(var i=0;i<this.capture_key.length;i++){
        //     console.log(this.capture_key[i].key);
        // }
        switch(e.key){
            case 'S':
                this.keyPress = "S";
                if(this.player1.mode == "magic"){
                    this.skillTimer.startAccumulateEnergy();
                    this.drawSkillTimer(Framework.Game._context);
                }
                break;
            case 'D':
                this.handleDrop();
                this.handleHoverBackpack();
                break;
            case 'F':
                this.demo_dead_trigger = 1;
                break;
            
            case 'E':
                if(this.character_description.is_character_description_open){
                    this.character_description.is_character_description_open = false;
                }else{
                    this.character_description.is_character_description_open = true;
                }

                break;

            case 'Space':
                this.handleSpace();
                break;
            default:
                break;
        }
        
        if(this.player1.player_state == "alive"){

            if(this.whatIsTheLastKeyMove() == 'Down'){
                this.player1.walk({x:0,y:1});
                this.playerWalkDirection = {x:0,y:1};
                this.keyPress = "Down";
                if(this.checkIsWalkAble(this.playerPositionOnMap.x,this.playerPositionOnMap.y+1)){
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Left'){
                this.playerWalkDirection = {x:-1,y:0};
                this.player1.walk({x:-1,y:0});
                this.keyPress = "Left";
                if(this.checkIsWalkAble(this.playerPositionOnMap.x-1,this.playerPositionOnMap.y)){
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Right'){
                this.playerWalkDirection = {x:1,y:0};
                this.player1.walk({x:1,y:0});
                this.keyPress = "Right";
                if(this.checkIsWalkAble(this.playerPositionOnMap.x+1,this.playerPositionOnMap.y)){
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Up'){
                this.playerWalkDirection = {x:0,y:-1};
                this.player1.walk({x:0,y:-1});
                this.keyPress = "Up";
                if(this.checkIsWalkAble(this.playerPositionOnMap.x,this.playerPositionOnMap.y-1)){
                    this.pressWalk = true;
                }
            }

        }
    }
    this.keyup = function(e, list){
        if(e.key == 'S'){
            if(this.player1.mode == "magic"){
                if(this.skillTimer.isEnergyFull)
                    this.monster_damage_handler.handle_magic_damage(this.skill_handler.mapPosition);
                this.skillTimer.stopAccumulateEnergy();
            }
            else if(this.player1.mode == "spear"){
                this.monster_damage_handler.handle_spear_damage(this.playerWalkDirection, this.playerPositionOnMap);
                this.spear_handler.start(this.playerWalkDirection, this.playerPositionOnMap);
            }
            else if(this.player1.mode == "arror"){
                this.monster_damage_handler.handle_arror_damage(this.playerWalkDirection, this.playerPositionOnMap);
            }
        }

        for(var i=0;i<this.capture_key.length;i++){
            if( this.capture_key[i].key == e.key){
                this.capture_key.splice(i, 1);
                break;
            }
        }
    
        if( !(this.checkKeyIsPress('Down') || this.checkKeyIsPress('Up') || 
            this.checkKeyIsPress('Left') || this.checkKeyIsPress('Right')) ) {
            {
                this.player1.walkEnd();
                this.pressWalk = false;
                this.keyPress = "";
            };
        }
        m_map.draw(Framework.Game._context);
    }

    this.handleDrop = function(){
        if(this.player1.backpack.getSelectedItem() != null){
            if(this.mapArray[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] != 91 &&
                this.mapArray[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] != 200){
                if(this.player1.equipmentBar.selectedIndex != -1){
                    if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 0){
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = this.player1.equipmentBar.getSelectedEquipment();
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].item_num;
                        this.player1.equipmentBar.dropSelectedEquipment();
                    }
                }else if(this.player1.backpack.selectedIndex != -1){
                    if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 0){
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = this.player1.backpack.getSelectedItem();
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].item_num;
                        this.player1.backpack.dropSelectedItem();
                    }else if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == this.player1.backpack.getSelectedItem().item_num){
                        if(this.player1.backpack.getSelectedItem().type == "material" ||
                        this.player1.backpack.getSelectedItem().type == "food" ||
                        this.player1.backpack.getSelectedItem().type == "plant"){
                            this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].amount += this.player1.backpack.getSelectedItem().amount;
                            this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].item_num;
                            this.player1.backpack.dropSelectedItem();
                        }
                    }
                }
            }
        }
    }

    this.handleSpace = function(){
        if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x]!=0){
            if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 3 ||
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == -3){
                if(this.player1.mode == "rock_dig")
                    this.handleRockDig();
            }
            else if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].isRegenerate && this.player1.mode == "plant_dig"){
                this.handlePlantDig();
                // console.log("dig");
            }
            else if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].status)
            {
                if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == -1 
                    && (this.player1.mode == "cut_tree") )
                    this.handleCutTree();
                if(this.player1.backpack.checkIfPickAvailable(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x])){
                    this.handlePick();
                }
            }
        }
    }

    this.handlePlantDig = function(){
        if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 1){
            if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].status){
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 45;
                this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_flower_growed_dig();
            }else{
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 41;
                this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_flower_dig();
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }else if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 36){
            if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].status){
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 44;
                this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_bush_growed_dig();
            }else{
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 40;
                this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_bush_dig();
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }else if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 6){
            if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].status){
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 46;
                this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_grass_growed_dig();
            }else{
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 41;
                this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_grass_dig();
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }else if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == -1 &&
            this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].treeStatus == 2){
            this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 42;
            this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_tree_dig();
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }
    }

    this.handlePick = function(){
        if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 1){
            this.player1.backpack.addItemByObject(new Item_flower_picked());
            this.pickRegenerateObject();
        }
        else if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 6){
            this.player1.backpack.addItemByObject(new Item_grass_picked());
            this.pickRegenerateObject();
        }
        else if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 36){
            this.player1.backpack.addItemByObject( new Item_berry());
            this.pickRegenerateObject();
        }
        
        else if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] >= 0){
            this.player1.backpack.addItemByObject(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x]);
            this.pickObject();
            if(this.checkIsWalkAble(this.playerPositionOnMap.x+this.playerWalkDirection.x,this.playerPositionOnMap.y+this.playerWalkDirection.y) && this.keyPress != "")
                this.pressWalk = true;
        }
    }

    this.handleCutTree = function(){           
            var x = this.playerPositionOnMap.y+this.playerWalkDirection.y;
            var y =this.playerPositionOnMap.x+this.playerWalkDirection.x;
            var count = false;
            this.itemMap[x][y].update();
            this.player1.equipmentBar.equipmentList[2].reduceDurability();

            if(this.itemMap[x][y].dropWood){
                for(var i=-1;i<2;i++){
                    for(var j=-1;j<2;j++){
                        if(this.mapArray[x+i][y+j] != 91 &&
                            this.mapArray[x+i][y+j] != 196 &&
                            this.mapArray[x+i][y+j] != 200 &&
                            this.item_map_Array[x+i][y+j] == 0 
                            ){
                            // console.log("p = ",y+j,x+i);
                            if(((y+j) != this.playerPositionOnMap.x) ||
                            ((x+i) != this.playerPositionOnMap.y)){
                                this.item_map_Array[x+i][y+j] = 7;
                                count = true;
                                this.itemMap[x+i][y+j] = new Item_wood();

                                break;
                            }
                        }
                    }
                    if(count)
                        break;
                }
        }
        if(this.itemMap[x][y].treeStatus == 2){
            if(this.player1.getExperience(8)){
                this.audio.play({name: 'kick', loop: false});
            }
        }
    }

    this.handleRockDig = function(){
        var y = this.playerPositionOnMap.y+this.playerWalkDirection.y;
        var x =this.playerPositionOnMap.x+this.playerWalkDirection.x;
        if(this.item_map_Array[y][x] == 3){
            this.itemMap[y][x].update();
            if(this.itemMap[y][x].count == 5){
                this.item_map_Array[y][x] = 8;
                this.item_map_Array[y][x + 1] = 9;
                this.itemMap[y][x] = new Item_flint();
                this.itemMap[y][x].amount = Math.floor(Math.random()*3) + 1;
                this.itemMap[y][x + 1] = new Item_gold();
                this.itemMap[y][x + 1].amount = Math.floor(Math.random()*3) + 1;
            }
        }
        else{
            this.itemMap[y][x - 1].update();
            if(this.itemMap[y][x - 1].count == 5){
                this.item_map_Array[y][x] = 8;
                this.item_map_Array[y][x - 1] = 9;
                this.itemMap[y][x] = new Item_flint();
                this.itemMap[y][x].amount = Math.floor(Math.random()*3) + 1;
                this.itemMap[y][x - 1] = new Item_gold();
                this.itemMap[y][x - 1].amount = Math.floor(Math.random()*3) + 1;
            }
        }
        this.player1.equipmentBar.equipmentList[2].reduceDurability();
    }

    this.handlePlant = function(){
        if(this.mapArray[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] != 91 &&
            this.mapArray[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] != 200){
            if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 0){
                switch(this.player1.backpack.itemList[this.player1.plantIndex].item_num){
                    case 40:
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 36;
                        var bush = new Item_bush();
                        bush.update();
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = bush;
                        break;
                    case 41:
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 1;
                        var flower = new Item_flower();
                        flower.update();
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = flower;
                        break;
                    case 42:
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = -1;
                        var tree = new Map_item_tree();
                        tree.treeStatus = 2;
                        //長兩階段
                        tree.tryGrow();
                        tree.tryGrow();
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = tree;
                        break;
                    case 43:
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 6;
                        var grass = new Item_grass();
                        grass.update();
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = grass;
                        break;
                    case 44:
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 36;
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_bush();
                        break;
                    case 45:
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 1;
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_flower();
                        break;
                    case 46:
                        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 6;
                        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_grass();
                        break;
                    default:
                        break;
                }
                this.player1.backpack.itemList[this.player1.plantIndex].amount -= 1;
                if(this.player1.backpack.itemList[this.player1.plantIndex].amount == 0)
                    this.player1.backpack.arrayRemoveByIndex(this.player1.plantIndex);
            }
        }
    }

    this.pickRegenerateObject = function(){
        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].update();
        m_map.draw(Framework.Game._context);
        this.regeneration_time = this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].regeneration_time;
        this.callDrawRegenerationTime();
    }
    this.callDrawRegenerationTime = function(){
        setTimeout(()=>{m_map.draw(Framework.Game._context)},this.regeneration_time);
    }
    this.pickObject = function(){
        this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = new Item_blank();
        this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] = 0;
        m_map.draw(Framework.Game._context);
    }

    this.stopAllMonsterWalk = function()
    {
        for(var i=0;i<this.monster.length;i++)
        {
            this.monster[i].stopWalk();
        }
    }

    this.drawSkillTimer = function(ctx){
        var interval = setInterval(()=>{
            if(this.skillTimer.buttonPress)
                this.skillTimer.draw(ctx);
            else
                clearInterval(interval);
        },100);
    }

    this.checkIsWalkAble = function(x,y){  //檢查人物是否超過地圖大小
        // console.log("x = ",x);
        // console.log("y = ",y);
        // if(x < 0 || x > this.mapArray[0].length){ return false; }
        // if(y < 0 || y > this.mapArray.length){ return false; }

        // if(this.mapArray[y][x] > 0){ return false; }
        // else{ return true;}
        if(this.mapArray[y][x] == 91 || this.mapArray[y][x] == 200 || this.item_map_Array[y][x]!=0){
            return false;
        }else if(x == this.playerPositionOnMap.x &&　y == this.playerPositionOnMap.y){
            return false;
        }
        else{ 
            return true;
        }
    }

    
    this.click = function(e){   
        console.log("this.is_character_description_open");
        console.log(this.character_description.is_character_description_open);

        if(this.character_description.is_character_description_open){
            console.log("is_character_description_open");
            console.log(this.player1.capabilityt_point);

            if(this.player1.capabilityt_point !=0){
                this.player1.charaerAbilityClick(e);
            }
        }
        this.synthesisBar.click(e);
        // console.log(e);
        this.player1.click(e);
        if(this.player1.plantIndex != -1){
            this.handlePlant();
        }
        this.handleHoverBackpack();

        m_map.draw(Framework.Game._context);
    }

    this.mousemove = function(e){
        this.synthesisBar.mousemove(e);
        this.player1.mousemove(e);
        this.handleHoverBackpack();

        m_map.draw(Framework.Game._context);
    }

    this.handleHoverBackpack = function(){
        if(this.player1.backpack.getSelectedItem() != null)
            this.game_object_detail.showUpdate(this.player1.backpack.getSelectedItem().item_num); 
        else
            this.game_object_detail.showUpdate(null); 
    }
}