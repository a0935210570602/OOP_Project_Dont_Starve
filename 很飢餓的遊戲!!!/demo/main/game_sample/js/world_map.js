var World_map = function()
{
    this.demo_dead_trigger = false;
    this.item_map_Array = [];
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
        
        this.creation_blood_status = new Creation_blood_status();

        this.clock = new Clock();
        this.clock.scale = 2;

        this.game_object_detail = new Game_object_detail();
        
        this.item_flower_growed_dig = new Framework.Sprite(define.materialPath + 'item_flower_growed_dig.png'); 
        this.item_flower_growed_dig.scale = 2;

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

        this.item_tree_dig = new Framework.Sprite(define.materialPath + 'item_tree_dig.png'); 
        this.item_tree_dig.scale = 2;

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

        this.item_fish = new Framework.Sprite(define.materialPath + 'item_fish.png'); 
        this.item_fish.scale = 2;

        this.item_sapling_growed_dig = new Framework.Sprite(define.materialPath + 'item_sapling_growed_dig.png'); 
        this.item_sapling_growed_dig.scale = 0.45;

        this.item_sapling_dig = new Framework.Sprite(define.materialPath + 'item_sapling_dig.png'); 
        this.item_sapling_dig.scale = 0.4;

        this.player1 = new BombMan(define.materialPath + 'Actor.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        this.player1.canvasPosition = {x:13, y:7};
        this.player1.position = {x:10, y:1};


        this.npc1 = new Npc1(this);
        this.npc1.position = {x:18,y:25};

        this.monster = [];
        this.stopMonster = false;
        this.stopMonsterCounter =0;
        this.synthesisBar = new SynthesisBar(this.player1.getBackPack());

        this.map_selector = new Map_selector();

        this.skill_handler = new Skill_handler();
        this.spear_handler = new Spear_handler();
        this.creation_blood_status = new Creation_blood_status();
        this.fishing = new Fishing();
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
            }, monster_attack:{
                mp3: define.musicPath + 'monster_attack.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
        }
        });
    }

    this.init = function()
    {
        // this.level_up_animation = new Level_up_animation();
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
        this.boxArray = [];
        this.bombArray = [];
        this.exploreArray = [];
        this.tileArray = [];
        this.tileMap = [];
        this.tileArrayPosition = [];
        this.tilePosition = [];
        this.itemArray = [];
        this.mapArray = [];
        //playerPositionOnMap為人物出現在mapArray的位置，只要改這個，勿動其他常數
        this.playerPositionOnMap = {x:17,y:18};

        this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
        this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
        // console.log(this.itemArray);
        // console.log("init");
        // console.log(this.mapArray);

        for(var i = 0; i < 11;i++){
            this.tileArrayPosition = [];
            for(var j = 0; j < 11; j++){
                this.tileArrayPosition.push({x: j+8, y: i+2});
            }
            this.tilePosition.push(this.tileArrayPosition);
        }

        this.creation_blood_status.init(this.player1);
	};

    this.notifyDraw = function(){
        m_map.draw(Framework.Game._context);
    }

    this.setPlayerPosition = function(playerPosition){
        this.player1.position = playerPosition;
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
    //怪物攻擊的速度
    this.monster_kill_timer = 0;
	this.update = function()
	{   
        
        // console.log(this.playerPositionOnMap);
        // console.log(this.npc1.position);
        if(this.player1.player_state == "alive"){
            this.checkIsDie();
        }
        // this.level_up_animation.update();
        this.skill_handler.update();
        this.spear_handler.update();
        this.monster_damage_handler.update();

        if(this.pressWalk === true)
        {
            if(this.player1.player_state == "alive" && this.checkIsWalkAble(this.playerWalkDirection))
            {
                if(this.keyPress == "Down") {
                    this.player1.walk({x:0,y:1});
                    this.playerPositionOnMap.y+=1;
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);

                }
                
                if(this.keyPress == "Left") {
                    this.player1.walk({x:-1,y:0});
                    this.playerPositionOnMap.x-=1;
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);

                }
                
                if(this.keyPress == "Right") {
                    this.player1.walk({x:1,y:0});
                    this.playerPositionOnMap.x+=1;
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);

                }
                
                if(this.keyPress == "Up") {
                    this.player1.walk({x:0,y:-1});
                    this.playerPositionOnMap.y-=1;
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);

                }

            }
        }
        if(this.skillTimer.isEnergyFull){
            this.skill_handler.start(this.playerWalkDirection, this.playerPositionOnMap);
        }
        this.player1.update();
        this.character_description.update(this.player1);
        var hurt_point=0;
        for(var i=0;i<this.monster.length;i++){
            this.monster[i].update();
            if(this.monster[i].isAttack()){
                hurt_point += this.monster[i].attack;
            }
        }
        if(hurt_point != 0)
            this.player1GotHurt(hurt_point);
        // console.log(hurt_point);
        // console.log(this.player1.characterStatus.currentHealth);
        if(this.fishing.is_start){
            this.fishing.update();
            if(this.player1.mode != "fishing"){
                this.fishing.stop();
                m_map.draw(Framework.Game._context);
            }
        }
        this.creation_blood_status.characterBloodUpdate(this.player1);
        this.creation_blood_status.characterMagicUpdate(this.player1);
        this.creation_blood_status.characterHungryUpdate(this.player1);
        this.creation_blood_status.monsterUpdate(this.monster);
        // console.log(this.player1.hunger_current_point);

        // setTimeout(()=>{this.draw(Framework.Game._context);},500);
        
        this.npc1.update();
    }
    
    this.player1GotHurt = function(hurt_point) {
        this.monster_kill_timer ++;
        // console.log("this.monster_kill_timer ");
        // console.log(this.monster_kill_timer );
        if(this.monster_kill_timer == 15){
            console.log("gethurt");
            this.player1.gethurt(hurt_point);
            this.monster_kill_timer = 0;
            this.audio.play({name: 'monster_attack', loop: false});
        }
    }
	this.draw = function(ctx) {
        // console.log(this.playerPositionOnMap);
            for(var i=0; i<11; i++){
                for(var j=0; j<11; j++){
                    // console.log("draw");
                    switch(this.mapArray[j][i]){
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
            // console.log(this.itemArray);
            for(var i=0; i<11; i++){
                for(var j=0; j<11; j++){
                    this.itemArray[j][i].position = {x:this.tilePosition[j][i].x,y:this.tilePosition[j][i].y};
                    this.itemArray[j][i].draw(ctx);
                }
            }
            // console.log(this.itemArray[0][0]);
    
            if(this.skillTimer.buttonPress)
                this.skillTimer.draw(ctx);
            this.monster_damage_handler.draw(ctx);
            this.player1.draw(ctx);
            if(this.fishing.is_start)
                this.fishing.draw(ctx);
            this.clock.draw(ctx);
    
            for(var i=0;i<this.monster.length;i++){
                this.monster[i].draw(ctx);
            }


            this.character_description.draw(ctx);
            // if(this.level_up_animation.level_up_animation._start){
            //     console.log("drawdraw");
            //     this.level_up_animation.draw(ctx);
            // }
            
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
     
        // }
        
        this.game_object_detail.draw(ctx);
        this.synthesisBar.draw(ctx);
        this.creation_blood_status.draw(ctx);
        this.npc1.draw(ctx);
        if(this.npc_event.taking_is_start){
            this.npc_event.draw(ctx);
        }
    }	
    
    this.clockDraw = function(ctx){
        var clockInterval = setInterval(() => {
            this.clock.draw(ctx);
            this.draw(Framework.Game._context);
            // console.log("aa");
            // this.creation_blood_status.draw(ctx);
            // this.player1.characterStatus.draw(ctx);
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
        var m_position = {x:0,y:0};
        var newMonster =  new Monster_cute_little_eye(this);
        newMonster.position = {x:18,y:18};
        this.monster.push(newMonster);
        while(count != amount){
            m_position = {x: Math.floor(Math.random()*50),y: Math.floor(Math.random()*50)};
            if(this.map_selector.checkFloorCanWalk(m_position) && this.map_selector.checkIsBlank(m_position)){
                console.log(m_position);
                var newMonster =  new Monster_cute_little_eye(this);
                newMonster.position = m_position;
                this.monster.push(newMonster);
                count++;
            }
        }
    }

    var m_map = this;
    this.deadClear = function(){
        this.skillTimer.clear();
        this.capture_key = [];
        // this.player1.characterStatus.currentHealth = 0;
        this.player1.character_descruption_point[0] = 0;
        this.player1.update();
    }
    this.checkIsDie = function(){
        // console.log("this.player1.character_descruption_point[0]");

        // console.log(this.player1.character_descruption_point[0]);
        if(this.player1.character_descruption_point[0] <= 0 && this.demo_dead_trigger){
            // this.player1.characterStatus.currentHunger = 0;
            this.player1.dieEvent({x: 13, y: 7});
            this.audio.play({name: 'die_scream', loop: false});
            this.update();
            m_map.draw(Framework.Game._context);
            
            setTimeout(()=>{
                this.deadClear();
                m_map.player1.die();

            },4000);
        }

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
       
        if(e.key != 'Space' && this.fishing.is_start)
            this.fishing.stop();
        // for(var i=0;i<this.capture_key.length;i++){
        //     console.log(this.capture_key[i].key);
        // }
        switch(e.key){
            case 'M':
                this.addMonsterRandom(1);
                console.log("M")
                break;
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
            case 'Q':
                this.demo_dead_trigger = true;
                break;
            case 'F':
                if(this.player1.mode == "fishing" && !this.fishing.is_start)
                    this.startFishing();
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
                this.handleHoverBackpack();
                break;
            default:
                break;
        }
        
        if(this.player1.player_state == "alive" && !this.npc_event.taking_is_start){
            if(this.whatIsTheLastKeyMove() == 'Down'){
                this.player1.walk({x:0,y:1});
                this.playerWalkDirection = {x:0,y:1};
                this.keyPress = "Down";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    console.log("down");
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Left'){
                this.playerWalkDirection = {x:-1,y:0};
                this.player1.walk({x:-1,y:0});
                this.keyPress = "Left";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Right'){
                this.playerWalkDirection = {x:1,y:0};
                this.player1.walk({x:1,y:0});
                this.keyPress = "Right";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Up'){
                this.playerWalkDirection = {x:0,y:-1};
                this.player1.walk({x:0,y:-1});
                this.keyPress = "Up";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.mapArray = this.map_selector.makeMap(this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
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
            else if(this.player1.mode == "arror"){
                this.monster_damage_handler.handle_arror_damage(this.playerWalkDirection, this.playerPositionOnMap);
            }else if(this.player1.mode == "spear"){
                this.monster_damage_handler.handle_normal_damage(this.playerWalkDirection, this.playerPositionOnMap);
                this.spear_handler.start(this.playerWalkDirection, this.playerPositionOnMap);
            }else{
                this.monster_damage_handler.handle_normal_damage(this.playerWalkDirection, this.playerPositionOnMap);
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

    this.handleFishing = function(){
        this.fishing.stop();
        var addSuccess = false;
        for(var i=-1;i<2;i++){
            for(var j=-1;j<2;j++){
                if(this.mapArray[5+i][5+j] != 91 &&
                    this.mapArray[5+i][5+j] != 200 &&
                    this.itemArray[5+i][5+j].item_num == 0 
                    ){
                        if(i == 0 && j == 0)
                            continue;
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+j, y:this.playerPositionOnMap.y+i}, new Item_fish());
                        this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
                        m_map.draw(Framework.Game._context);
                        addSuccess = true;
                        this.player1.equipmentBar.equipmentList[2].reduceDurability();
                        break;
                }
            }
            if(addSuccess)
                break;
        }
    }

    this.startFishing = function(){
        if(this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] == 200)
            this.fishing.start(this.playerWalkDirection);
    }

    this.handleDrop = function(){
        if(this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 91 &&
            this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 200){
            if(this.player1.equipmentBar.selectedIndex != -1 && this.player1.equipmentBar.getSelectedEquipment() != null){
                if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 0){
                    this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, this.player1.equipmentBar.getSelectedEquipment());
                    this.player1.equipmentBar.dropSelectedEquipment();
                }
            }else if(this.player1.backpack.selectedIndex != -1 && this.player1.backpack.getSelectedItem() != null){
                if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 0){
                    this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, this.player1.backpack.getSelectedItem());
                    this.player1.backpack.dropSelectedItem();
                }else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == this.player1.backpack.getSelectedItem().item_num){
                    if(this.player1.backpack.getSelectedItem().type == "material" ||
                    this.player1.backpack.getSelectedItem().type == "food" ||
                    this.player1.backpack.getSelectedItem().type == "plant"){
                        this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].amount += this.player1.backpack.getSelectedItem().amount;
                        this.player1.backpack.dropSelectedItem();
                    }
                }
            }
            this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
            m_map.draw(Framework.Game._context);
        }
    }
    this.npc_event = new Npc_event();
    this.handleNpcTalking = function(npc_name){
        this.npc_event.trigger("小丑哥哥", "talking");
    }

    this.handleSpace = function(){
        if(this.playerPositionOnMap.x + this.playerWalkDirection.x == this.npc1.position.x && 
            this.playerPositionOnMap.y + this.playerWalkDirection.y == this.npc1.position.y ){
                this.handleNpcTalking(this.npc1.name);
        }
        if(this.player1.mode == "fishing" && this.fishing.fishBeCaught){
            this.handleFishing();
        }
        if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num !=0){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 3 ||
                this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == -3){
                if(this.player1.mode == "rock_dig")
                    this.handleRockDig();
            }
            else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].isRegenerate && this.player1.mode == "plant_dig"){
                this.handlePlantDig();
            }
            else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status)
            {
                if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == -1 
                    && (this.player1.mode == "cut_tree") )
                    this.handleCutTree();
                if(this.player1.backpack.checkIfPickAvailable(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x])){
                    this.handlePick();
                }
            }
        }
    }

    this.handlePlantDig = function(){
        console.log(this.player1.mode);

        if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 1){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_flower_growed_dig());
            }else{
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_flower_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 36){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_bush_growed_dig());
            }else{
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_bush_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 6){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_grass_growed_dig());
            }else{
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_grass_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == -4){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_sapling_growed_dig());
            }else{
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_sapling_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }
        else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == -1 &&
            this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].treeStatus == 2){
            this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_tree_dig());
            this.player1.equipmentBar.equipmentList[2].reduceDurability();
        }
        this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
        m_map.draw(Framework.Game._context);
    }

    this.handlePick = function(){
        if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 1){
            this.player1.backpack.addItemByObject(new Item_flower_picked());
            this.pickRegenerateObject();
        }
        else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 6){
            this.player1.backpack.addItemByObject(new Item_grass_picked());
            this.pickRegenerateObject();
        }
        else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == -4){
            this.player1.backpack.addItemByObject(new Item_branch());
            this.pickRegenerateObject();
        }
        else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 36){
            this.player1.backpack.addItemByObject( new Item_berry());
            this.pickRegenerateObject();
        }
        
        else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num >= 0){
            this.player1.backpack.addItemByObject(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x]);
            this.pickObject();
            if(this.checkIsWalkAble(this.playerWalkDirection) && this.keyPress != "")
                this.pressWalk = true;
        }
    }

    this.handleCutTree = function(){           
            var x = 5+this.playerWalkDirection.x;
            var y = 5+this.playerWalkDirection.y;
            var count = false;
            this.itemArray[y][x].update();
            this.player1.equipmentBar.equipmentList[2].reduceDurability();

            if(this.itemArray[y][x].dropWood){

                for(var i=-1;i<2;i++){
                    for(var j=-1;j<2;j++){
                        if( this.mapArray[y+j][x+i] != 91 &&
                            this.mapArray[y+j][x+i] != 200 &&
                            this.itemArray[y+j][x+i].item_num == 0 
                            ){
                            if(((y+j) != 5) || ((x+i) != 5)){
                                count = true;
                                this.map_selector.addObject({x:this.playerPositionOnMap.x+i+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y+j}, new Item_wood());
                                this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
                                m_map.draw(Framework.Game._context);

                                break;
                            }
                        }
                    }
                    if(count)
                        break;
                }

        }
        if(this.mapArray[x][y].treeStatus == 2){
            if(this.player1.getExperience(8)){
                this.audio.play({name: 'kick', loop: false});
                // this.level_up_animation.start();
            }
        }
    }

    this.handleRockDig = function(){
        var y = 5+this.playerWalkDirection.y;
        var x = 5+this.playerWalkDirection.x;
        if(this.itemArray[y][x].item_num == 3){
            this.itemArray[y][x].update();
            if(this.itemArray[y][x].count == 5){
                var flint = new Item_flint();
                flint.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, flint);

                var gold = new Item_gold();
                gold.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject({x:1 + this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, gold);
            }
        }
        else{
            this.itemArray[y][x - 1].update();
            if(this.itemArray[y][x - 1].count == 5){
                var flint = new Item_flint();
                flint.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, flint);

                var gold = new Item_gold();
                gold.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject({x:-1 + this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, gold);
            }
        }
        this.player1.equipmentBar.equipmentList[2].reduceDurability();
        this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
        m_map.draw(Framework.Game._context);
    }

    this.handlePlant = function(){
        if(this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 91 &&
            this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 200){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 0){
                switch(this.player1.backpack.itemList[this.player1.plantIndex].item_num){
                    case 40:
                        var bush = new Item_bush();
                        bush.update();
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, bush);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 41:
                        var flower = new Item_flower();
                        flower.update();
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, flower);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 42:
                        var tree = new Map_item_tree(this);
                        tree.treeStatus = 2;
                        //長兩階段
                        tree.tryGrow();
                        tree.tryGrow();
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, tree);
                        break;
                    case 43:
                        var grass = new Item_grass();
                        grass.update();
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, grass);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 44:
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_bush());
                        break;
                    case 45:
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_flower());
                        break;
                    case 46:
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_grass());
                        break;
                    case 47:
                        var sapling = new Item_sapling();
                        sapling.update();
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, sapling);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 48:
                        this.map_selector.addObject({x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_sapling());
                        break;
                    default:
                        break;
                }
                this.player1.backpack.itemList[this.player1.plantIndex].amount -= 1;
                this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
                m_map.draw(Framework.Game._context);
                if(this.player1.backpack.itemList[this.player1.plantIndex].amount == 0)
                    this.player1.backpack.arrayRemoveByIndex(this.player1.plantIndex);
            }
        }
    }

    this.pickRegenerateObject = function(){
        this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].update();
        m_map.draw(Framework.Game._context);
        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
        this.callDrawRegenerationTime();
    }
    this.callDrawRegenerationTime = function(){
        setTimeout(()=>{m_map.draw(Framework.Game._context)},this.regeneration_time);
    }
    this.pickObject = function(){
        this.map_selector.pickObject({x:this.playerPositionOnMap.x + this.playerWalkDirection.x ,y:this.playerPositionOnMap.y + this.playerWalkDirection.y})
        this.itemArray = this.map_selector.makeItemMap(this.playerPositionOnMap);
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

    this.checkIsWalkAble = function(direction){  //檢查人物是否超過地圖大小
        var x = 5+direction.x;
        var y = 5+direction.y;
        var xx = this.playerPositionOnMap.x+direction.x;
        var yy = this.playerPositionOnMap.y+direction.y;
        // console.log(this.playerPositionOnMap);
        // console.log(this.npc1.position);
        // console.log({x:xx ,y:yy});
        console.log(xx == this.npc1.position.x && yy == this.npc1.position.y);
        if(this.mapArray[y][x] == 91 || this.mapArray[y][x] == 200 || this.itemArray[y][x].item_num !=0 ||
            (xx == this.npc1.position.x && yy == this.npc1.position.y)){
            return false;
        }else{
            return true;
        }
    }

    this.checkMonsterIsWalkAble = function(map_position){  //檢查人物是否超過地圖大小
        if(map_position.x == this.playerPositionOnMap.x && map_position.y == this.playerPositionOnMap.y)
            return false;
        else if(this.map_selector.checkFloorCanWalk(map_position) && this.map_selector.checkIsBlank(map_position)){
            return true;
        }else{
            return false;
        }
    }

    this.click = function(e){   
        // console.log("this.is_character_description_open");
        // console.log(this.is_character_description_open);
        if(this.character_description.is_character_description_open){
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