var House_1 = function()
{
    this.demo_dead_trigger = false;
    this.item_map_Array = [];
    this.load = function(){
        this.floor = new Framework.Sprite(define.builldingPath + '石磚.png'); 
        this.floor.scale = 2;
        this.wall = new Framework.Sprite(define.builldingPath + '石牆.png'); 
        this.wall.scale = 2;
        
        /////////////////////////////////////////////////////////////////////////////////////
        console.log(Framework.Game._levels);
        this.creation_blood_status = Framework.Game._levels[1].level.map['creation_blood_status'];

        this.clock = new Clock();
        this.clock.scale = 2;

        this.game_object_detail = new Game_object_detail();
        
        this.item_blank = new Framework.Sprite(define.materialPath + 'item_blank.png');
        this.item_blank.scale = 2;

        this.Floral = new Framework.Sprite(define.materialPath + 'Floral.png');
        this.Floral.scale = 2;

        this.item_sapling_dig = new Framework.Sprite(define.materialPath + 'item_sapling_dig.png'); 
        this.item_sapling_dig.scale = 0.4;

        this.player1 = Framework.Game._levels[1].level.map['player1'];

        this.player1.canvasPosition = {x:13, y:7};
        this.player1.position = {x:10, y:1};

        this.npc2 = new Npc2(this);
        this.npc2.position = {x:12,y:9};

        this.score = new Score();
        this.synthesisBar = new SynthesisBar(this.player1.getBackPack(), this.score);

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
        this.clock.init();
        
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
        this.clear = false;
        //playerPositionOnMap為人物出現在mapArray的位置，只要改這個，勿動其他常數
        this.playerPositionOnMap = {x:12,y:19};
        this.npc_event = new Npc_event(this);
        this.mapArray = [];
        //for demo

        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0

        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4]); //0

        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0
        this.mapArray.push([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]); //0


        this.item_map_Array = [];
        
        //1:小花 2:蜘蛛網 3:石頭 4:樹枝 5:偉凱的作業簿 6:草 7:木頭 8:燧石 9:黃金 10:豬皮
        //11:蜂刺 12:雪球 13:繩索 14:露水 15:十字鎬 16:斧頭 17:釣魚竿 18:鏟子 19:黃金斧頭 20:黃金鏟子 
        //21:黃金十字鎬 22:頭盔 23:草製盔甲 24:木製盔甲 25:長矛 26:吹箭 27:國王法杖 28:空間法杖 29:火法杖 30:冰法杖
        //31:黃金提燈 32:火把 33:帳篷 34:篝火 35:冰塊 36:漿果叢 37:採摘的花 38:採摘的草

        this.character_description = new Character_description();
        this.is_character_description_open = false;
        
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //1
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //2
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //3
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //4
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //5
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //6
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //7
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //8
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //9
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //10
        
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //11
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //12
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //13
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //14
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //15
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //16
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //17
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //18
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //19
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //20

        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //21
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //22
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //23
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //24
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //25
        for(var i = 0; i < 11;i++){
            this.tileArrayPosition = [];
            for(var j = 0; j < 11; j++){
                this.tileArrayPosition.push({x: j+8, y: i+2});
            }
            this.tilePosition.push(this.tileArrayPosition);
        }
	};

    this.setPlayerPosition = function(playerPosition){
        this.player1.position = playerPosition;
    }

	this.update = function()
	{  
        if(this.player1.player_state == "alive"){
            this.checkIsDie();
        }
        // this.level_up_animation.update();

        if(this.pressWalk === true)
        {
            if(this.player1.player_state == "alive" && this.checkIsWalkAble(this.playerWalkDirection))
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
        if(this.skillTimer.isEnergyFull){
            this.skill_handler.start(this.playerWalkDirection, this.playerPositionOnMap, this.player1.handEquipmentId);
        }
        this.player1.update();
        this.character_description.update(this.player1);

        this.character_description.update(this.player1);
        var hurt_point=0;
        
        var i = 0;
       
        if(hurt_point != 0)
            this.player1GotHurt(hurt_point);
        // console.log(hurt_point);
        // console.log(this.player1.characterStatus.currentHealth);
        this.creation_blood_status.characterBloodUpdate(this.player1);
        this.creation_blood_status.characterMagicUpdate(this.player1);
        this.creation_blood_status.characterHungryUpdate(this.player1);
        // console.log(this.player1.hunger_current_point);

        // setTimeout(()=>{this.draw(Framework.Game._context);},500);
        this.npc2.update();
            
        this.clockDraw(Framework.Game._context);
        m_map.draw(Framework.Game._context);
    }
    
	this.draw = function(ctx) {
        // console.log(this.playerPositionOnMap)
        for(var i=-5; i<6; i++){
            for(var j=-5; j<6; j++){
                switch(this.mapArray[j+this.playerPositionOnMap.y][i+this.playerPositionOnMap.x]){
                    case 3:
                        this.floor.position = {x:this.tilePosition[j+5][i+5].x*64,y:this.tilePosition[j+5][i+5].y*64};
                        this.floor.draw(ctx);
                        break;
                    case 4:
                        this.wall.position = {x:this.tilePosition[j+5][i+5].x*64,y:this.tilePosition[j+5][i+5].y*64};
                        this.wall.draw(ctx);
                        break;
                    default:
                        break;
                }
            }
        }
        this.player1.draw(ctx);
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
        this.player1.backpack.draw(ctx);
        this.clock.draw(ctx);

        
        this.game_object_detail.draw(ctx);
        ctx.beginPath();
        ctx.rect(1182, 293, 200, 600);
        ctx.fillStyle = "#BEBEBE";
        ctx.fill();
        ctx.beginPath();
        ctx.rect(242, 256, 225, 600);
        ctx.fillStyle = "#BEBEBE";
        ctx.fill();
        this.synthesisBar.draw(ctx);
        this.npc2.draw(ctx);
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = 'center';
        this.player1.draw(ctx);
        this.creation_blood_status.draw(ctx);
        this.character_description.draw(ctx);
        this.npc_event.draw(ctx);
    }	
    
    this.clockDraw = function(ctx){
        var clockInterval = setInterval(() => {
            this.clock.draw(ctx);
            this.creation_blood_status.draw(ctx);
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

    var m_map = this;
    this.deadClear = function(){
        this.skillTimer.clear();
        this.capture_key = [];
        // this.player1.characterStatus.currentHealth = 0;
        this.player1.character_descruption_point[0] = 0;
        this.player1.update();
    }

    this.gameClear = function(){
        this.skillTimer.clear();
        this.capture_key = [];
        this.clear = true;
        this.player1.gameClear = true;

    }

    this.checkIsDie = function(){
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

    this.pressWalk = false;
    this.keyPress = "";
    this.key_is_press = false;
    this.skill_number = -99;
  
    this.capture_key = [];
    this.keydown = function(e, list){
        // console.log("keydown");
        // console.log(e.key);
        this.capture_key.push(e);
       
        if(e.key == 'T'){
            this.deadClear();
            Framework.Game.goToLevel('gameOver');  
        }
        if(e.key == 'Y'){
            this.gameClear();
            Framework.Game.goToLevel('gameOver');  
        }

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

                m_map.draw(Framework.Game._context);
                break;
            default:
                break;
        }
        
        if(this.player1.player_state == "alive" && !this.npc_event.taking_is_start){
            if(this.whatIsTheLastKeyMove() == 'Down'){
                if(this.playerPositionOnMap.x ==12 && this.playerPositionOnMap.y ==19){
                    Framework.Game.goToLevel('level1');  
                }
                this.player1.walk({x:0,y:1});
                this.playerWalkDirection = {x:0,y:1};
                this.keyPress = "Down";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Left'){
                this.playerWalkDirection = {x:-1,y:0};
                this.player1.walk({x:-1,y:0});
                this.keyPress = "Left";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Right'){
                this.playerWalkDirection = {x:1,y:0};
                this.player1.walk({x:1,y:0});
                this.keyPress = "Right";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.pressWalk = true;
                }
            }else if(this.whatIsTheLastKeyMove() == 'Up'){
                this.playerWalkDirection = {x:0,y:-1};
                this.player1.walk({x:0,y:-1});
                this.keyPress = "Up";
                if(this.checkIsWalkAble(this.playerWalkDirection)){
                    this.pressWalk = true;
                }
            }

        }
    }
    this.keyup = function(e, list){
        if(e.key == 'S'){
            var attackMode = new Null_attack();

            if(this.player1.mode == "hide" && !this.player1.hide){
                this.player1.hidePlayer();
                this.player1.hideAnimation.start();
            }
            else if(this.player1.mode == "magic"){
                if(this.skillTimer.isEnergyFull)
                this.skillTimer.stopAccumulateEnergy();
            }
            else if(this.player1.mode == "arror"){
                this.arror_attack.setPositionAndDirection(this.playerWalkDirection, this.playerPositionOnMap);
                attackMode = this.arror_attack;
            }else if(this.player1.mode == "spear"){
                this.spear_handler.start(this.playerWalkDirection, this.playerPositionOnMap);
            }else{
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
            m_map.draw(Framework.Game._context);
        }
    }

    this.handleSpace = function(){
        if(this.playerPositionOnMap.x + this.playerWalkDirection.x == this.npc2.position.x && 
            this.playerPositionOnMap.y + this.playerWalkDirection.y == this.npc2.position.y ){
                if(!this.npc_event.taking_is_start){
                    this.npc_event.trigger(this.npc2.name, "dialog");
                    this.npc_event.talking();
                }
                else
                    this.npc_event.talking();
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

    this.pickObject = function(){
        this.map_selector.pickObject({x:this.playerPositionOnMap.x + this.playerWalkDirection.x ,y:this.playerPositionOnMap.y + this.playerWalkDirection.y})
        m_map.draw(Framework.Game._context);
    }
    
    this.checkIsWalkAble = function(direction){  //檢查人物是否超過地圖大小
        var x = this.playerPositionOnMap.x+direction.x;
        var y = this.playerPositionOnMap.y+direction.y;
        console.log(this.npc2.position);
        if(this.mapArray[y][x] == 4 || (x == this.npc2.position.x && y == this.npc2.position.y)){
            return false;
        }else{
            return true;
        }
    }


    this.click = function(e){   
        // console.log(this.is_character_description_open);
        console.log(e);
        if(this.character_description.is_character_description_open){
            if(this.player1.capabilityt_point !=0){
                this.player1.characterAbilityClick(e);
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