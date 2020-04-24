var World_map = function(map, item_map)
{
    this.demo_dead_trigger = 0;
    this.mapArray = map;
    this.item_map_Array = item_map;
    this.addition = {x: 0, y: 0};
    this.load = function(){

        this.score = new Score();
        this.score.position = {x:1000,y:0};
        this.skill_handler = new Skill_handler();

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

        this.item_blank = new Framework.Sprite(define.materialPath + 'item_blank.png');
        this.item_blank.scale = 2;

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

        this.map_item_tree = new Framework.Sprite(define.materialPath + 'map_item_tree.png'); 
        this.map_item_tree_growed = new Framework.Sprite(define.materialPath + 'map_item_tree_growed.png'); 
        this.map_item_tree_cutted = new Framework.Sprite(define.materialPath + 'map_item_tree_cutted.png'); 

        this.map_item_tree.scale = 2;
        this.map_item_tree_growed.scale = 2;
        this.map_item_tree_cutted.scale = 2;

        var mapBoxPic = new Framework.Sprite(define.imagePath + 'box.png');
        var bombPic  = new Framework.Sprite(define.imagePath + 'bomb.png');
        var bombPic  = new Framework.Sprite(define.imagePath + 'explore.png');
        var newMonster = new Monster(define.materialPath + 'monster_3.png',this, {down: {from: 0, to: 3}, left: {from:4, to: 7}, right: {from: 8, to: 11}, up: {from: 12, to: 15}});
        
        
        this.player1 = new BombMan(define.materialPath + 'Actor.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        this.player1.canvasPosition = {x:13, y:7};
        this.player1.position = {x:10, y:1};
        this.monster_cute_little_eye = new Monster_cute_little_eye(this);
        this.monster_cute_little_eye.position = {x: 15, y: 20};

        this.monster = [];
        this.stopMonster = false;
        this.stopMonsterCounter =0;

        this.synthesisBar = new SynthesisBar(this.player1.getBackPack());

        this.audio = new Framework.Audio({
            kick: {
                mp3: define.musicPath + 'levelup.mp3',
                //ogg: define.musicPath + 'kick2.ogg',
                //wav: define.musicPath + 'kick2.wav'
            }, song1:{
                mp3: define.musicPath + 'easy.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }
        });
    }

    this.init = function()
    {
        this.character_description = new Character_description();
        this.player1.init();
        this.clock.init();
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
        this.initialPosition = {x:5,y:5};
        //playerPositionOnMap為人物出現在mapArray的位置，只要改這個，勿動其他常數
        this.playerPositionOnMap = {x:20,y:20};
        this.skill_handler.init(this.playerPositionOnMap);
        this.mapDisplacement = {x:this.playerPositionOnMap.x-this.initialPosition.x,y:this.playerPositionOnMap.y-this.initialPosition.y};
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

    this.exploreEndHandler = function(explore){
        var index = m_map.exploreArray.indexOf(explore);
        m_map.exploreArray.splice(index,1);
        m_map.draw(Framework.Game._context);
    }

	this.update = function()
	{   
        // console.log("keyPress");
        // console.log(this.keyPress);
        this.DieEvent();
        this.skill_handler.update(this.playerPositionOnMap);
        this.monster_cute_little_eye.update();
        if(this.pressWalk === true)
        {
            if(this.checkIsWalkAble(this.playerPositionOnMap.x+this.playerWalkDirection.x,this.playerPositionOnMap.y+this.playerWalkDirection.y))
            {
                if(this.keyPress == "Down") {
                    this.player1.walk({x:0,y:1});
                    this.playerPositionOnMap.y+=1;
                    this.addition.x += 0;
                    this.addition.y += 1;
                }
        
                if(this.keyPress == "Left") {
                    this.player1.walk({x:-1,y:0});
                    this.playerPositionOnMap.x-=1;
                    this.addition.x += -1;
                    this.addition.y += 0;
                }
        
                if(this.keyPress == "Right") {
                    this.player1.walk({x:1,y:0});
                    this.playerPositionOnMap.x+=1;
                    this.addition.x += 1;
                    this.addition.y += 0;
                }
        
                if(this.keyPress == "Up") {
                    this.player1.walk({x:0,y:-1});
                    this.playerPositionOnMap.y-=1;
                    this.addition.x += 0;
                    this.addition.y += -1;
                }
            }
        }
        this.character_description.update(this.player1);
        this.player1.update();
        if(this.stopMonster === true)
        {
            console.log("stopMonster");
            this.stopMonsterCounter++;
            if(this.stopMonsterCounter > 1000)
            {
                this.stopMonster = false;
            }
        }else
        {
            // console.log("stopMonster");
            for(var i=0;i<this.monster.length;i++)
            {
                this.monster[i].update();
                if((this.demo_dead_trigger == 1 && this.player1.characterStatus.currentHealth <= 0)  || (this.monster[i].isDead == false && this.monster[i].position.x == this.player1.position.x && this.monster[i].position.y == this.player1.position.y))
                {
                    this.player1.die();
                    break;
                }
            }
        }
    }
    this.generation_time;
	this.draw = function(ctx) {
        for(var i=0; i<11; i++){
            for(var j=0; j<11; j++){
                // console.log(j+ this.addition.y+this.mapDisplacement.y,i+ this.addition.x+this.mapDisplacement.x);
                switch(this.mapArray[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x]){
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

        for(var i=0; i<11; i++){
            for(var j=0; j<11; j++){
                this.itemMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].position = this.tilePosition[j][i];
                this.itemMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].draw(ctx);
            }
        }

        for(var i=0;i<this.monster.length;i++){
            if(this.isCanvasCanDraw(i)){
                this.CanvasCanDraw(this.monster[i], ctx);
            }
        }

        this.synthesisBar.draw(ctx);
        this.player1.draw(ctx);
        this.clock.draw(ctx);
        // console.log(this.capture_key.indexOf('S'));

        if(this.is_character_description_open){
            this.character_description.draw(ctx);
        }


        if(this.monster_cute_little_eye.is_start)
            this.monster_cute_little_eye.draw(ctx);
        
        if(this.checkSKeyIsPress('S')){
            console.log("drawskill_handler");
            this.skill_handler.draw(ctx);
        }

        if(this.skill_handler.fire_wand_level1._start){
            // this.skillOutbreak.triggerSetFalse();
        }
    }	
    this.checkSKeyIsPress  = function(key){
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

    this.isCanvasCanDraw = function(i){
        //玩家在畫布上的座標
        // console.log("this.player1.position");
        // console.log(this.player1.position);
        // console.log("newMonster.mapPosition");
        // console.log(this.monster[0].mapPosition);
  
        //玩家在遊戲中的座標
        // console.log("this.playerPositionOnMap");
        // console.log(this.playerPositionOnMap);
        if(Math.abs(this.monster[i].mapPosition.x-this.playerPositionOnMap.x)<=5 && Math.abs(this.monster[i].mapPosition.y-this.playerPositionOnMap.y)<=5){
            return true;
        }
        return false;
    }
    this.CanvasCanDraw = function(monster, ctx){
        monster.canvasPosition.x = this.player1.position.x + monster.mapPosition.x-this.playerPositionOnMap.x;
        monster.canvasPosition.y = this.player1.position.y + monster.mapPosition.y-this.playerPositionOnMap.y;
        monster.draw(ctx);
    }
    var m_map = this;
    this.DieEvent = function(){
        if(this.playerPositionOnMap.x == this.monster_cute_little_eye.mapPosition.x &&
            this.playerPositionOnMap.y == this.monster_cute_little_eye.mapPosition.y){
            console.log("you die");
            m_map.player1.die();
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

    this.playerWalkDirection = {x:0,y:0};
    this.pressWalk = false;
    this.keyPress = "";
    this.key_is_press = false;
    this.skill_number = -99;
    this.skillOutbreak = function(){
        this.skill_handler.start(this.playerWalkDirection);
    }
    this.skillTimer = function(){
        this.skillOutbreak();
    }
    this.capture_key = [];
    this.keydown = function(e, list){
        // console.log("keydown");
        // console.log(e.key);

        this.capture_key.push(e);
        for(var i=0;i<this.capture_key.length;i++){
            console.log(this.capture_key[i].key);
        }
        switch(e.key){
            case 'S':
                this.keyPress = "S";
                this.skillTimer();

                break;
            case 'D':
                this.handleDrop();
                break;
            case 'F':
                this.demo_dead_trigger = 1;
                break;
            
            case 'E':
                if(e.key === 'E') {
                    if(this.is_character_description_open){
                        this.is_character_description_open = false;
                    }else{
                        this.is_character_description_open = true;
                    }
                }
                break;

            case 'Space':
                this.handleSpace();
                break;
            default:
                break;
        }
        if(this.whatIsTheLastKeyMove() == 'Down'){
            this.player1.walk({x:0,y:1});
            this.playerWalkDirection = {x:0,y:1};
            this.keyPress = "Down";
            if(this.checkIsWalkAble(this.playerPositionOnMap.x,this.playerPositionOnMap.y+1)){
                // console.log("x2= ",playerPosition.x);
                // console.log("y2= ",playerPosition.y);
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
    this.keyup = function(e, list){
        for(var i=0;i<this.capture_key.length;i++){
            if( this.capture_key[i].key == e.key){
                this.capture_key.splice(i, 1);
                break;
            }
        }
        for(var i=0;i<this.capture_key.length;i++){
            console.log(this.capture_key[i].key);
        }
        if( !(this.checkSKeyIsPress('Down') || this.checkSKeyIsPress('Up') || 
            this.checkSKeyIsPress('Left') || this.checkSKeyIsPress('Right')) ) {
            {
                this.player1.walkEnd();
                this.pressWalk = false;
                this.keyPress = "";
            };
        }
    }

    this.handleDrop = function(){
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

    this.handleSpace = function(){
        if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x]!=0){
            if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == 3 ||
                this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x] == -3){
                if(this.player1.mode == "rock_dig")
                    this.handleRockDig();
            }
            else if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].isRegenerate && this.player1.mode == "plant_dig"){
                this.handlePlantDig();
                console.log("dig");
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
                            console.log("p = ",y+j,x+i);
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

    this.checkIsWalkAble = function(x,y){  //檢查人物是否超過地圖大小
        // console.log("x = ",x);
        // console.log("y = ",y);
        // if(x < 0 || x > this.mapArray[0].length){ return false; }
        // if(y < 0 || y > this.mapArray.length){ return false; }

        // if(this.mapArray[y][x] > 0){ return false; }
        // else{ return true;}
        if(this.mapArray[y][x] == 91 || this.mapArray[y][x] == 200 || this.item_map_Array[y][x]!=0){
            return false;
        }
        else{ 
            return true;
        }
    }

    
    this.click = function(e){   
        if(this.is_character_description_open){
            if(this.player1.capabilityt_point !=0){
                this.player1.charaerAbilityClick(e);
            }
        }
        this.synthesisBar.click(e);
        console.log(e);
        this.player1.click(e);
        if(this.player1.plantIndex != -1){
            this.handlePlant();
        }
        m_map.draw(Framework.Game._context);
    }

    this.mousemove = function(e){
        this.synthesisBar.mousemove(e);
        this.player1.mousemove(e);
        m_map.draw(Framework.Game._context);
    }
}