var World_map = function()
{
    this.demo_dead_trigger = true;
    this.item_map_Array = [];
    this.load = function(){
        this.item_black_berry = new Framework.Sprite(define.materialPath + 'item_black_berry.png'); 
        this.monster_boss_tocan = new Framework.Sprite(define.materialPath + 'boss_tocan.png'); 
        this.monster_tocan = new Framework.Sprite(define.materialPath + 'pig_tocan.png'); 
        this.monster_tocan = new Framework.Sprite(define.materialPath + 'cow_tocan.png'); 
        this.monster_tocan = new Framework.Sprite(define.materialPath + 'bat_tocan.png'); 
        this.monster_tocan = new Framework.Sprite(define.materialPath + 'bee_tocan.png'); 
        this.item_sapling = new Framework.Sprite(define.materialPath + 'item_sapling.png'); 
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
        this.item_honey = new Framework.Sprite(define.materialPath + 'Honey.png'); 
        this.item_meat = new Framework.Sprite(define.materialPath + 'Meat.png'); 
        this.item_monster_meat = new Framework.Sprite(define.materialPath + 'Monster_Meat.png'); 
        this.item_bat_wing = new Framework.Sprite(define.materialPath + 'Batilisk_Wing.png'); 
        this.monster_bat = new Framework.AnimationSprite({url:define.materialPath + 'bat.png', col:3 , row:4 , loop:true , speed:12}); 
        this.item_eyeball = new Framework.Sprite(define.materialPath + 'Eyeball.png'); 
        this.monster_cow = new Framework.AnimationSprite({url:define.materialPath + 'cow.png', col:3 , row:4 , loop:true , speed:12}); 
        this.monster_cute_little_eye = new Framework.AnimationSprite({url:define.materialPath + 'monster_cute_litter_eye.png', col:3 , row:4 , loop:true , speed:12}); 
        this.monster_pig = new Framework.AnimationSprite({url:define.materialPath + 'pig.png', col:3 , row:4 , loop:true , speed:12}); 
        this.monster_bee = new Framework.AnimationSprite({url:define.materialPath + 'bee.png', col:3 , row:4 , loop:true , speed:12}); 
        this.monster_boss = new Framework.AnimationSprite({url:define.materialPath + 'boss.png', col:3 , row:4 , loop:true , speed:12}); 
        this.creation_blood_status = new Creation_blood_status();
        this.music_stop = false;
        this.clock = new Clock();
        this.game_object_detail = new Game_object_detail();
        this.item_flower_growed_dig = new Framework.Sprite(define.materialPath + 'item_flower_growed_dig.png'); 
        this.item_blank = new Framework.Sprite(define.materialPath + 'item_blank.png');
        this.Floral = new Framework.Sprite(define.materialPath + 'Floral.png');
        this.item_grass_growed_dig = new Framework.Sprite(define.materialPath + 'item_grass_growed_dig.png'); 
        this.item_berry = new Framework.Sprite(define.materialPath + 'item_berry.png'); 
        this.item_flower_picked = new Framework.Sprite(define.materialPath + 'item_flower_picked.png'); 
        this.item_flower_dig = new Framework.Sprite(define.materialPath + 'item_flower_dig.png'); 
        this.item_bush_dig = new Framework.Sprite(define.materialPath + 'item_bush_dig.png'); 
        this.monster_cute_litter_eye_tocan = new Framework.Sprite(define.materialPath + 'monster_cute_litter_eye_tocan.png'); 
        this.item_grass_dig = new Framework.Sprite(define.materialPath + 'item_grass_dig.png'); 
        this.item_tree_dig = new Framework.Sprite(define.materialPath + 'item_tree_dig.png'); 
        this.map_item_tree = new Framework.Sprite(define.materialPath + 'map_item_tree.png'); 
        this.map_item_tree_growed = new Framework.Sprite(define.materialPath + 'map_item_tree_growed.png'); 
        this.map_item_tree_cutted = new Framework.Sprite(define.materialPath + 'map_item_tree_cutted.png'); 
        this.url = define.skillAnimationPath + 'Recovery4.png';
        this.flying_arror = new Framework.AnimationSprite({url:this.url, col:5 , row:4 , loop:true , speed:16}); 
        this.flying_arror_left = new Framework.Sprite(define.materialPath + 'arror_left.png'); 
        this.flying_arror_right = new Framework.Sprite(define.materialPath + 'arror_right.png'); 
        this.flying_arror_up = new Framework.Sprite(define.materialPath + 'arror_up.png'); 
        this.flying_arror_down = new Framework.Sprite(define.materialPath + 'arror_down.png'); 
        this.item_fish = new Framework.Sprite(define.materialPath + 'item_fish.png'); 
        this.item_sapling_growed_dig = new Framework.Sprite(define.materialPath + 'item_sapling_growed_dig.png'); 
        this.item_sapling_dig = new Framework.Sprite(define.materialPath + 'item_sapling_dig.png'); 
        this.player1 = new BombMan(define.materialPath + 'Actor.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        this.player1.canvasPosition = {x:13, y:7};
        this.player1.position = {x:10, y:1};
        this.floor = new Framework.Sprite(define.builldingPath + '石磚.png'); 
        this.floor.scale = 2;
        this.wall = new Framework.Sprite(define.builldingPath + '石牆.png'); 
        this.wall.scale = 2;
        this.npc1 = new Npc1(this);
        this.npc1.position = {x:49,y:47};
        this.npc2 = new Npc2(this);
        this.npc2.position = {x:20,y:15};
        this.npc_event = new Npc_event(this);
        this.monster = [];
        var boss =  new Monster_boss(this);
        boss.position = {x:393,y:393};
        this.monster.push(boss);
        this.stopMonster = false;
        this.stopMonsterCounter = 0;
        this.score = new Score();
        this.synthesisBar = new SynthesisBar(this.player1.getBackPack(), this.score);
        this.map_selector = new Map_selector();
        this.skill_handler = new Skill_handler();
        this.spear_handler = new Spear_handler();
        this.visitor = new ReduceDurabilityVisitor();
        this.creation_blood_status = new Creation_blood_status();
        this.fishing = new Fishing();
        this.objectFactory = new Object_factory();
        this.handle_initial_character = new Handle_initial_character();
        this.playerInitial = false;
        this.audio = new Framework.Audio({
            kick: {
                mp3: define.musicPath + 'levelup.mp3',
            }, die_scream:{
                mp3: define.musicPath + '女慘叫.mp3',
            }, monster_attack:{
                mp3: define.musicPath + '怪物攻擊.mp3',
            }
        });
    }
    this.init = function()
    {
        this.game_object_detail.init();
        this.playerWalkDirection = {x:0, y:1};
        this.skillTimer = new Skill_timer();
        this.character_description = new Character_description();
        this.arror_attack = new Arror_attack(this.player1, this.monster);
        this.handle_initial_character.init();
        this.constants = new Constants();
        this.is_character_description_open = false;
        this.tileArray = [];
        this.tileArrayPosition = [];
        this.tilePosition = [];
        this.itemArray = [];
        this.mapArray = [];
        this.on_map_name = "World";
        this.clear = false;
        //playerPositionOnMap為人物出現在mapArray的位置，只要改這個，勿動其他常數
        this.playerPositionOnMap = {x:47,y:47};
        this.playerPositionOnMapSave = {
            "World": {x:47,y:47},
            "House1": {x:19, y:34}
        };
        this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
        this.addMonsterRandom();
        this.map_selector.nullClean();
        for(var i = 0; i < 11;i++){
            this.tileArrayPosition = [];
            for(var j = 0; j < 11; j++)
                this.tileArrayPosition.push({x: j+8, y: i+2});
            this.tilePosition.push(this.tileArrayPosition);
        }
        this.creation_blood_status.init(this.player1);
	};
    this.goToMap = function(map_name){
        this.on_map_name = map_name;
        this.playerPositionOnMap = this.playerPositionOnMapSave[map_name];
        this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
    }
    this.notifyDraw = function(){
        m_map.draw(Framework.Game._context);
    }
    this.setPlayerPosition = function(playerPosition){
        this.player1.position = playerPosition;
    }
    //怪物攻擊的速度
    this.monster_kill_timer = 0;
	this.update = function()
	{   
        if(this.monster[0].isdead){
            this.gameClear();
            Framework.Game.goToLevel('gameOver');
        }
        if(this.on_map_name == "World"){
            if(this.playerInitial){
                if(this.player1.player_state == "alive" || false){
                    this.checkIsDie();
                }
                this.skill_handler.update();
                this.spear_handler.update();
                this.arror_attack.update();
                if(this.pressWalk === true && !this.player1.beCaught)
                {
                    if(this.player1.player_state == "alive" && this.checkIsWalkAble(this.playerWalkDirection))
                    {
                        if(this.keyPress == "Down") {
                            this.player1.walk({x:0,y:1});
                            this.playerPositionOnMap.y+=1;
                            this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                            this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                            this.addMonsterRandom();
                            this.map_selector.nullClean();
                        }
                        if(this.keyPress == "Left") {
                            this.player1.walk({x:-1,y:0});
                            this.playerPositionOnMap.x-=1;
                            this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                            this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                            this.addMonsterRandom();
                            this.map_selector.nullClean();
                        }
                        if(this.keyPress == "Right") {
                            this.player1.walk({x:1,y:0});
                            this.playerPositionOnMap.x+=1;
                            this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                            this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                            this.addMonsterRandom();
                            this.map_selector.nullClean();
                        }
                        if(this.keyPress == "Up") {             
                            this.player1.walk({x:0,y:-1});
                            this.playerPositionOnMap.y-=1;
                            this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                            this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                            this.addMonsterRandom();
                            this.map_selector.nullClean();
                        }
                    }
                }
                if(this.skillTimer.isEnergyFull){
                    this.skill_handler.start(this.playerWalkDirection, this.playerPositionOnMap, this.player1.handEquipmentId);
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
                var i = 0;
                while(i < this.monster.length) {
                    if(this.monster[i].isdead){
                        if(this.map_selector.checkIsBlank(this.on_map_name, this.monster[i].position)){
                            this.map_selector.addObject(this.on_map_name, this.monster[i].position, this.monster[i].drop());
                            this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                            m_map.draw(Framework.Game._context);
                        }
                        this.monster.splice(i, 1);
                        this.player1.getExperience(5);
                        this.score.scoreAddByKillMonster();
                    }
                    else if(this.monster[i].health <= 0){
                        this.monster[i].die();
                        i++;
                    }else{
                        i++;
                    }
                }
                if(hurt_point != 0)
                    this.player1GotHurt(hurt_point);
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
                this.npc1.update();
                this.npc_event.update();
            }else{
                this.handle_initial_character.update();
                if(this.handle_initial_character.is_initial){
                    this.playerInitial = true;
                    this.player1.init();
                    this.player1.setCapibility(this.handle_initial_character.character_description.character_descruption_point);
                    this.clockDraw(Framework.Game._context);
                    m_map.draw(Framework.Game._context);
                }
            }
        }else if(this.on_map_name == "House1"){
            if(this.player1.player_state == "alive")
                this.checkIsDie();
            this.skill_handler.update();
            this.spear_handler.update();
            this.arror_attack.update();
            if(this.pressWalk === true && !this.player1.beCaught)
            {
                if(this.player1.player_state == "alive" && this.checkIsWalkAble(this.playerWalkDirection))
                {
                    if(this.keyPress == "Down") {
                        this.player1.walk({x:0,y:1});
                        this.playerPositionOnMap.y+=1;
                        this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                        this.addMonsterRandom();
                        this.map_selector.nullClean();
                    }
                    if(this.keyPress == "Left") {
                        this.player1.walk({x:-1,y:0});
                        this.playerPositionOnMap.x-=1;
                        this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                        this.addMonsterRandom();
                        this.map_selector.nullClean();
                    }
                    if(this.keyPress == "Right") {
                        this.player1.walk({x:1,y:0});
                        this.playerPositionOnMap.x+=1;
                        this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                        this.addMonsterRandom();
                        this.map_selector.nullClean();
                    }
                    if(this.keyPress == "Up") {             
                        this.player1.walk({x:0,y:-1});
                        this.playerPositionOnMap.y-=1;
                        this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                        this.addMonsterRandom();
                        this.map_selector.nullClean();
                    }
                }
            }
            if(this.skillTimer.isEnergyFull){
                this.skill_handler.start(this.playerWalkDirection, this.playerPositionOnMap, this.player1.handEquipmentId);
            }
            this.player1.update();
            this.npc2.update();
            this.npc_event.update();
            this.character_description.update(this.player1);
            var hurt_point=0;
            this.creation_blood_status.characterBloodUpdate(this.player1);
            this.creation_blood_status.characterMagicUpdate(this.player1);
            this.creation_blood_status.characterHungryUpdate(this.player1);
        }
    }
    this.player1GotHurt = function(hurt_point) {
        this.monster_kill_timer ++;
        var audio = new Framework.Audio({
            monster_attack:{
                mp3: define.musicPath + 'monster_attack.mp3',
        }
        });
        if(this.monster_kill_timer == 15){
            this.player1.gethurt(hurt_point);
            this.monster_kill_timer = 0;
            audio.play({name: 'monster_attack', loop: false});
        }
    }
	this.draw = function(ctx) {
        if(this.playerInitial){
            for(var i=0; i<11; i++){
                for(var j=0; j<11; j++){
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
                        case 3:
                            this.floor.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.floor.draw(ctx);
                            break;
                        case 4:
                            this.wall.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                            this.wall.draw(ctx);
                            break;
                    }
                }
            }
            this.player1.draw(ctx);
            for(var i=0; i<11; i++)
                for(var j=0; j<11; j++){
                    this.itemArray[j][i].position = {x:this.tilePosition[j][i].x,y:this.tilePosition[j][i].y};
                    this.itemArray[j][i].draw(ctx);
                }
            ctx.beginPath();
            ctx.rect(1185, 100, 80, 700);
            ctx.fillStyle = "#BEBEBE";
            ctx.fill();
            ctx.beginPath();
            ctx.rect(380, 80, 100, 700);
            ctx.fillStyle = "#BEBEBE";
            ctx.fill();
            ctx.beginPath();
            ctx.rect(280, 800, 1100, 90);
            ctx.fillStyle = "#BEBEBE";
            ctx.fill();
            if(this.skillTimer.buttonPress)
                this.skillTimer.draw(ctx);
            this.arror_attack.draw(ctx);
            if(this.fishing.is_start)
                this.fishing.draw(ctx);
            this.clock.draw(ctx);
            for(var i=0;i<this.monster.length;i++){
                this.monster[i].draw(ctx);
            }
            if(this.skill_handler.isAnimationStart()){
                for(var i=-5,ii=0; i<6; i++,ii++){
                    for(var j=-5,jj=0; j<6; j++,jj++){
                        if(this.skill_handler.mapPosition.x == i + this.playerPositionOnMap.x && this.skill_handler.mapPosition.y == j+ this.playerPositionOnMap.y){
                            this.skill_handler.setPosition({x:64*this.tilePosition[jj][ii].x,y:64*this.tilePosition[jj][ii].y});
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
            this.game_object_detail.draw(ctx);
            ctx.beginPath();
            ctx.rect(242, 256, 225, 600);
            ctx.fillStyle = "#BEBEBE";
            ctx.fill();
            this.synthesisBar.draw(ctx);
            this.npc1.draw(ctx);
            this.npc2.draw(ctx);
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = 'center';
            this.player1.backpack.draw(ctx);
            if(this.handle_initial_character.name == "請輸入名字"){
                this.handle_initial_character.name = "";
            }
            ctx.fillText(this.handle_initial_character.name, 252 ,250);
            if(!this.is_character_description_open){
                this.npc_event.draw(ctx);
            }    
            if(!this.npc_event.taking_is_start)
                this.character_description.draw(ctx);
            if(!this.npc_event.taking_is_start){
                this.creation_blood_status.draw(ctx);
            }
        }else
            this.handle_initial_character.draw(ctx);
    }	
    this.clockDraw = function(ctx){
        this.clock.init();
        var clockInterval = setInterval(() => {
            if(!this.npc_event.taking_is_start){
                this.clock.draw(ctx);
                this.creation_blood_status.draw(ctx);
            }
            if(this.player1.character_descruption_total_point[0] <= 0 || this.clear){
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
    this.addMonsterRandom = function(){
        var map_number,flag_x,flag_y;
        if(this.map_selector.local_map_0.proxy.null_map.length > 0){
            for(var i=0;i<this.map_selector.local_map_0.proxy.null_map.length;i++){
                map_number = this.map_selector.local_map_0.proxy.null_map[i];
                flag_x = Math.floor(map_number/10)*40;
                flag_y = (map_number%10)*40;
                this.createMonster(flag_x, flag_y);
            }
        }
    }
    this.createMonster = function(flag_x, flag_y){
        var amount = Math.floor(Math.random()*5) + 5;
        var count = 0;
        while(count != amount){
            var position_x = (Math.floor(Math.random()*40));
            var position_y = (Math.floor(Math.random()*40));
            var m_position = {x: flag_x + position_x,y: flag_y + position_y};
            if(this.map_selector.checkFloorCanWalk(this.on_map_name, m_position) && this.map_selector.checkIsBlank(this.on_map_name, m_position)){
                var newMonster = this.objectFactory.createMonster(this);
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
        this.player1.character_descruption_point[0] = 0;
        this.clock.stopMusic(true);
        this.audio.stopAll();
        this.player1.update();
        this.clock.stopMusic(true);
    }
    this.gameClear = function(){
        this.skillTimer.clear();
        this.audio.stopAll();
        this.capture_key = [];
        this.clear = true;
        this.clock.stopMusic(true);
        this.player1.gameClear = true;
        this.clock.stopMusic(true);
    }
    this.checkIsDie = function(){
        if(this.player1.character_descruption_point[0] <= 0 && this.demo_dead_trigger){
            var audio = new Framework.Audio({
                die_scream: {
                    mp3: define.musicPath + '女慘叫.mp3'
                }
            });
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
    this.getLeftMonsterNum = function()
    {
        var count =0;
        for(var i=0;i<this.monster.length;i++)
            if(this.monster[i].isDead === false)
                count++;
        return count;
    }
    this.pressWalk = false;
    this.keyPress = "";
    this.key_is_press = false;
    this.skill_number = -99;
    this.capture_key = [];
    this.keydown = function(e, list){
        this.capture_key.push(e);
        if(e.key != 'Space' && this.fishing.is_start)
            this.fishing.stop();
        //Q:死亡結束  W:勝利結束 R:蜜蜂 T:豬 Y:牛 U:眼球 I:蝙蝠 O:boss
        switch(e.key){
            case 'Q':
                this.gameClear();
                Framework.Game.goToLevel('gameOver');
                break;
            case 'W':
                this.deadClear();
                this.audio.stopAll();
                Framework.Game.goToLevel('gameOver'); 
                break;
            case 'O':
                var newMonster1 =  new Monster_boss(this);
                newMonster1.position = this.playerPositionOnMap;
                this.monster.push(newMonster1);
                break;
            case 'R':
                var newMonster1 =  new Monster_bee(this);
                newMonster1.position = this.playerPositionOnMap;
                this.monster.push(newMonster1);
                break;
            case 'T':
                var newMonster1 =  new Monster_pig(this);
                newMonster1.position = this.playerPositionOnMap;
                this.monster.push(newMonster1);
                break;
            case 'Y':
                var newMonster1 =  new Monster_cow(this);
                newMonster1.position = this.playerPositionOnMap;
                this.monster.push(newMonster1);
                break;
            case 'U':
                var newMonster1 =  new Monster_cute_little_eye(this);
                newMonster1.position = this.playerPositionOnMap;
                this.monster.push(newMonster1);
                break;
            case 'I':
                var newMonster1 =  new Monster_bat(this);
                newMonster1.position = this.playerPositionOnMap;
                this.monster.push(newMonster1);
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
            case 'P':
                this.demo_dead_trigger = false;
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
            case 'Z':
                if(this.npc_event.taking_is_start){
                    this.npc_event.amount -= 2;
                    if( this.npc_event.amount <= -1){
                            this.npc_event.amount = -1;
                        }
                    this.npc_event.talking();
                    this.draw(Framework.Game._context);
                }
                break;
            case 'Space':
                this.handleSpace();
                this.handleHoverBackpack();
                m_map.draw(Framework.Game._context);
                break;
            default:
                break;
        }
        if(this.player1.player_state == "alive" && !this.npc_event.taking_is_start){
            if(this.whatIsTheLastKeyMove() == 'Down'){
                if(this.playerPositionOnMap.x == 19 && this.playerPositionOnMap.y ==34 && this.on_map_name == "House1"){
                    this.playerPositionOnMapSave["House1"] = this.playerPositionOnMap;
                    this.playerPositionOnMap = this.playerPositionOnMapSave["World"];
                    this.goToMap("World");
                }
                this.player1.walk({x:0,y:1});
                this.playerWalkDirection = {x:0,y:1};
                this.keyPress = "Down";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                    this.pressWalk = true;
                    this.addMonsterRandom();
                    this.map_selector.nullClean();
                }
            }else if(this.whatIsTheLastKeyMove() == 'Left'){
                this.playerWalkDirection = {x:-1,y:0};
                this.player1.walk({x:-1,y:0});
                this.keyPress = "Left";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.on_map_name,this.playerPositionOnMap);
                    this.pressWalk = true;
                    this.addMonsterRandom();
                    this.map_selector.nullClean();
                }
            }else if(this.whatIsTheLastKeyMove() == 'Right'){
                this.playerWalkDirection = {x:1,y:0};
                this.player1.walk({x:1,y:0});
                this.keyPress = "Right";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                    this.pressWalk = true;
                    this.addMonsterRandom();
                    this.map_selector.nullClean();
                }
            }else if(this.whatIsTheLastKeyMove() == 'Up'){
                if(this.playerPositionOnMap.x == 66 && this.playerPositionOnMap.y ==58 && this.on_map_name == "World"){
                    this.playerPositionOnMapSave["World"] = this.playerPositionOnMap;
                    this.playerPositionOnMap = this.playerPositionOnMapSave["House1"];
                    this.goToMap("House1");
                }
                this.playerWalkDirection = {x:0,y:-1};
                this.player1.walk({x:0,y:-1});
                this.keyPress = "Up";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                    this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                    this.pressWalk = true;
                    this.addMonsterRandom();
                    this.map_selector.nullClean();
                }
            }
        }
    }
    this.keyup = function(e, list){
        var audio = new Framework.Audio({
            fight: {
                mp3: define.musicPath + '打擊.mp3',
            },
            spear: {
                mp3: define.musicPath + '長矛.mp3',
            },
            arror: {
                mp3: define.musicPath + '弓箭.mp3',
            },fire: {
                mp3: define.musicPath + '火魔法.mp3',
            },
            ice: {
                mp3: define.musicPath + '冰魔法.mp3',
            },move: {
                mp3: define.musicPath + '順移.mp3'
            }
        });
        if(e.key == 'S'){
            var attackMode = new Null_attack();
            if(this.player1.mode == "hide" && !this.player1.hide){
                this.player1.hidePlayer();
                this.player1.hideAnimation.start();
            }
            else if(this.player1.mode == "magic"){
                if(this.skillTimer.isEnergyFull){
                    if(this.player1.equipmentBar.getEquipment(2).item_num == 29)
                        audio.play({name: 'fire', loop: false});
                    if(this.player1.equipmentBar.getEquipment(2).item_num == 30)
                        audio.play({name: 'ice', loop: false});
                    attackMode = new Magic_attack(this.player1, this.monster, this.skill_handler.mapPosition);
                }    
                this.skillTimer.stopAccumulateEnergy();
            }
            else if(this.player1.mode == "arror"){
                this.arror_attack.setPositionAndDirection(this.playerWalkDirection, this.playerPositionOnMap);
                attackMode = this.arror_attack;
                audio.play({name: 'arror', loop: false});
            }else if(this.player1.mode == "spear"){
                attackMode = new Normal_attack(this.player1, this.monster, this.playerWalkDirection, this.playerPositionOnMap);
                this.spear_handler.start(this.playerWalkDirection, this.playerPositionOnMap);
                audio.play({name: 'spear', loop: false});
            }else if(this.player1.mode == "space"){
                this.player1.transportPlayer();
                this.playerPositionOnMap =  {x:392,y:392};
                this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                this.mapArray = this.map_selector.makeMap(this.on_map_name, this.playerPositionOnMap);
                audio.play({name: 'move', loop: false});
            }else{
                attackMode = new Normal_attack(this.player1, this.monster, this.playerWalkDirection, this.playerPositionOnMap);
                audio.play({name: 'fight', loop: false});
            }
            this.player1.attack(attackMode);
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
                        this.map_selector.addObject(this.on_map_name, {x:this.playerPositionOnMap.x+j, y:this.playerPositionOnMap.y+i}, new Item_fish());
                        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                        m_map.draw(Framework.Game._context);
                        addSuccess = true;
                        this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
                        break;
                }
            }
            if(addSuccess)
                break;
        }
    }
    this.startFishing = function(){
        var audio = new Framework.Audio({
            fish: {
                mp3: define.musicPath + '釣魚.mp3',
            }
        });
        if(this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] == 200){
            audio.play({name: 'fish', loop: false});
            this.fishing.start(this.playerWalkDirection);
        }
    }
    this.handleDrop = function(){
        if(this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 91 &&
            this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 200){
            if(this.player1.equipmentBar.selectedIndex != -1 && this.player1.equipmentBar.getSelectedEquipment() != null){
                if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 0){
                    this.map_selector.addObject(this.on_map_name, {x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, this.player1.equipmentBar.getSelectedEquipment());
                    this.player1.equipmentBar.dropSelectedEquipment();
                }
            }else if(this.player1.backpack.selectedIndex != -1 && this.player1.backpack.getSelectedItem() != null){
                if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 0){
                    this.map_selector.addObject(this.on_map_name, {x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, this.player1.backpack.getSelectedItem());
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
            this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
            m_map.draw(Framework.Game._context);
        }
    }
    this.handleSpace = function(){
        if(this.playerPositionOnMap.x + this.playerWalkDirection.x == this.npc1.position.x &&  this.on_map_name == "World" &&
            this.playerPositionOnMap.y + this.playerWalkDirection.y == this.npc1.position.y ){
                if(!this.npc_event.taking_is_start){
                    this.npc_event.trigger(this.npc1.name, "dialog");
                    this.npc_event.talking();
                }
                else
                    this.npc_event.talking();
        }
        if(this.playerPositionOnMap.x + this.playerWalkDirection.x == this.npc2.position.x &&  this.on_map_name == "House1" &&
            this.playerPositionOnMap.y + this.playerWalkDirection.y == this.npc2.position.y ){
                if(!this.npc_event.taking_is_start){
                    this.npc_event.trigger(this.npc2.name, "dialog");
                    this.npc_event.talking();
                }
                else{
                    this.npc_event.talking();
                }
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
                if(this.player1.backpack.checkIfPickAvailable(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num)){
                    this.handlePick();
                }
            }
        }
        m_map.draw(Framework.Game._context);
    }
    this.handlePlantDig = function(){
        var audio = new Framework.Audio({
            dig: {
                mp3: define.musicPath + '挖掘.mp3',
            }
        });
        if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 1){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_flower_growed_dig());
            }else{
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_flower_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
        }else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 36){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_bush_growed_dig());
            }else{
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_bush_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
        }else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 6){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_grass_growed_dig());
            }else{
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_grass_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
        }else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == -4){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].status){
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_sapling_growed_dig());
            }else{
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_sapling_dig());
            }
            this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
        }
        else if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == -1 &&
            this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].treeStatus == 2){
            this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_tree_dig());
            this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
        }
        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
        m_map.draw(Framework.Game._context);
        audio.play({name: 'dig', loop: false});
    }
    this.handlePick = function(){
        var audio = new Framework.Audio({
            pick: {
                mp3: define.musicPath + '撿取.mp3',
            }
        });
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
        audio.play({name: 'pick', loop: false});
    }
    this.handleCutTree = function(){           
        var audio = new Framework.Audio({
            cut: {
                mp3: define.musicPath + '砍樹.mp3',
            }
        });
        var x = 5+this.playerWalkDirection.x;
        var y = 5+this.playerWalkDirection.y;
        var count = false;
        this.itemArray[y][x].update();
        this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
        if(this.itemArray[y][x].dropWood){
            for(var i=-1;i<2;i++){
                for(var j=-1;j<2;j++){
                    if( this.mapArray[y+j][x+i] != 91 &&
                        this.mapArray[y+j][x+i] != 200 &&
                        this.itemArray[y+j][x+i].item_num == 0 
                        ){
                        if(((y+j) != 5) || ((x+i) != 5)){
                            count = true;
                            this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+i+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y+j}, new Item_wood());
                            this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                            m_map.draw(Framework.Game._context);
                            break;
                        }
                    }
                }
                if(count)
                    break;
            }
        }
        if(this.itemArray[y][x].treeStatus == 2){
            if(this.player1.getExperience(8)){
                this.audio.play({name: 'kick', loop: false});
            }
        }
        audio.play({name: 'cut', loop: false});
    }
    this.handleRockDig = function(){
        var audio = new Framework.Audio({
            dig: {
                mp3: define.musicPath + '挖掘.mp3',
            }
        });
        var y = 5+this.playerWalkDirection.y;
        var x = 5+this.playerWalkDirection.x;
        if(this.itemArray[y][x].item_num == 3){
            this.itemArray[y][x].update();
            if(this.itemArray[y][x].count == 5){
                var flint = new Item_flint();
                flint.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, flint);
                var gold = new Item_gold();
                gold.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject(this.on_map_name,{x:1 + this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, gold);
            }
        }
        else{
            this.itemArray[y][x - 1].update();
            if(this.itemArray[y][x - 1].count == 5){
                var flint = new Item_flint();
                flint.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, flint);
                var gold = new Item_gold();
                gold.amount = Math.floor(Math.random()*3) + 1;
                this.map_selector.addObject(this.on_map_name,{x:-1 + this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, gold);
            }
        }
        this.player1.equipmentBar.equipmentList[2].reduceDurability(this.visitor);
        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
        m_map.draw(Framework.Game._context);
        audio.play({name: 'dig', loop: false});
    }
    this.handlePlant = function(){
        var audio = new Framework.Audio({
            dig: {
                mp3: define.musicPath + '挖掘.mp3',
            }
        });
        if(this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 91 &&
            this.mapArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x] != 200){
            if(this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].item_num == 0){
                switch(this.player1.backpack.itemList[this.player1.plantIndex].item_num){
                    case 40:
                        var bush = new Item_bush();
                        bush.update();
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, bush);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 41:
                        var flower = new Item_flower();
                        flower.update();
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, flower);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 42:
                        var tree = new Map_item_tree(this);
                        tree.treeStatus = 2;
                        //長兩階段
                        tree.tryGrow();
                        tree.tryGrow();
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, tree);
                        break;
                    case 43:
                        var grass = new Item_grass();
                        grass.update();
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, grass);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 44:
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_bush());
                        break;
                    case 45:
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_flower());
                        break;
                    case 46:
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_grass());
                        break;
                    case 47:
                        var sapling = new Item_sapling();
                        sapling.update();
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, sapling);
                        this.regeneration_time = this.itemArray[5+this.playerWalkDirection.y][5+this.playerWalkDirection.x].regeneration_time;
                        this.callDrawRegenerationTime();
                        break;
                    case 48:
                        this.map_selector.addObject(this.on_map_name,{x:this.playerPositionOnMap.x+this.playerWalkDirection.x, y:this.playerPositionOnMap.y+this.playerWalkDirection.y}, new Item_sapling());
                        break;
                    default:
                        break;
                }
                this.player1.backpack.itemList[this.player1.plantIndex].amount -= 1;
                this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
                m_map.draw(Framework.Game._context);
                if(this.player1.backpack.itemList[this.player1.plantIndex].amount == 0)
                    this.player1.backpack.arrayRemoveByIndex(this.player1.plantIndex);
            }
        }
        audio.play({name: 'dig', loop: false});
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
        this.map_selector.pickObject(this.on_map_name, {x:this.playerPositionOnMap.x + this.playerWalkDirection.x ,y:this.playerPositionOnMap.y + this.playerWalkDirection.y})
        this.itemArray = this.map_selector.makeItemMap(this.on_map_name, this.playerPositionOnMap);
        m_map.draw(Framework.Game._context);
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
        if(this.mapArray[y][x] == 91 || this.mapArray[y][x] == 200 || this.itemArray[y][x].item_num !=0 || this.mapArray[y][x] == 4 ||
            (xx == this.npc1.position.x && yy == this.npc1.position.y && this.on_map_name == "World") ||
            (xx == this.npc2.position.x && yy == this.npc2.position.y && this.on_map_name == "House1")){
            return false;
        }else{
            return true;
        }
    }
    this.checkMonsterIsWalkAble = function(map_position){  //檢查人物是否超過地圖大小
        if(map_position.x == this.playerPositionOnMap.x && map_position.y == this.playerPositionOnMap.y)
            return false;
        else if(this.map_selector.checkFloorCanWalk(this.on_map_name, map_position) && this.map_selector.checkIsBlank(this.on_map_name, map_position)){
            return true;
        }else{
            return false;
        }
    }
    this.click = function(e){   
        if(this.playerInitial){
            if(this.character_description.is_character_description_open){
                if(this.player1.capabilityt_point !=0){
                    this.player1.characterAbilityClick(e);
                }
            }
            this.synthesisBar.click(e);
            this.player1.click(e);
            if(this.player1.plantIndex != -1){
                this.handlePlant();
            }
            this.handleHoverBackpack();
        }else{
            this.handle_initial_character.click(e);
        }
        m_map.draw(Framework.Game._context);
    }
    this.mousemove = function(e){
        if(this.playerInitial){
            this.synthesisBar.mousemove(e);
            this.player1.mousemove(e);
            this.handleHoverBackpack();
        }else{
            this.handle_initial_character.mousemove(e);
        }
    }
    this.handleHoverBackpack = function(){
        if(this.player1.backpack.getSelectedItem() != null){
            this.game_object_detail.showUpdate(this.player1.backpack.getSelectedItem().item_num); 
            m_map.draw(Framework.Game._context);
        }
        else{
            this.game_object_detail.showUpdate(null); 
            m_map.draw(Framework.Game._context);
        }
    }
}