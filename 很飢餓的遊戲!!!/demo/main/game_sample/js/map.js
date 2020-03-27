var Map = function(map, item_map)
{
    this.mapArray = map;
    this.item_map_Array = item_map;
    this.addition = {x: 0, y: 0};
    this.load = function(){

        this.score = new Score();
        this.score.position = {x:1000,y:0};
        this.terrain_plain = new Framework.Sprite(define.imagePath + 'terrain_plain.png');
        this.terrain_plain.scale = 2;
    
        this.terrain_water = new Framework.Sprite(define.imagePath + 'terrain_water.png');
        this.terrain_water.scale = 2;
    
        this.terrain_mountain = new Framework.Sprite(define.imagePath + 'terrain_mountain.png');
        this.terrain_mountain.scale = 2;
    
        this.terrain_blood_water = new Framework.Sprite(define.imagePath + 'terrain_blood_water.png');
        this.terrain_blood_water.scale = 2;
    
        this.terrain_forest = new Framework.Sprite(define.imagePath + 'terrain_forest.png');
        this.terrain_forest.scale = 2;
    
        this.terrain_lava = new Framework.Sprite(define.imagePath + 'terrain_lava.png');
        this.terrain_lava.scale = 2;
    
        this.terrain_snow_ground = new Framework.Sprite(define.imagePath + 'terrain_snow_ground.png');
        this.terrain_snow_ground.scale = 2;
    
        this.mapFloor = new Framework.Sprite(define.imagePath + 'floor2.png');
        this.mapFloor.scale = 2;

        this.mapWall = new Framework.Sprite(define.imagePath + 'treeStone.png');
        this.mapWall.scale = 2;

        this.item_branch = new Framework.Sprite(define.materialPath + 'item_branch.png');
        this.item_branch.scale = 2;

        this.item_spider_web = new Framework.Sprite(define.materialPath + 'item_spider_web.png'); 
        this.item_spider_web.scale = 2;

        this.item_grass = new Framework.Sprite(define.materialPath + 'item_grass.png');
        this.item_grass.scale = 2;

        this.item_grass_mowed = new Framework.Sprite(define.materialPath + 'item_grass_mowed.png'); 
        this.item_grass_mowed.scale = 2;
        
        this.item_flower = new Framework.Sprite(define.materialPath + 'item_flower.png'); 
        this.item_flower.scale = 2;

        this.item_flower_pulled = new Framework.Sprite(define.materialPath + 'item_flower_pulled.png'); 
        this.item_flower_pulled.scale = 2;

        
        this.item_stone = new Framework.Sprite(define.materialPath + 'item_stone.png');
        this.item_stone.scale = 2;
        
        this.item_waikei_homework = new Framework.Sprite(define.materialPath + 'item_waikei_homework.png');
        this.item_waikei_homework.scale = 2;
        
        this.item_blank = new Framework.Sprite(define.materialPath + 'item_blank.png');
        this.item_blank.scale = 2;

        var mapBoxPic = new Framework.Sprite(define.imagePath + 'box.png');
        var bombPic  = new Framework.Sprite(define.imagePath + 'bomb.png');
        var bombPic  = new Framework.Sprite(define.imagePath + 'explore.png');
        var newMonster = new Monster(define.imagePath + 'monster.png',this, {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        
        
        this.player1 = new BombMan(define.imagePath + 'player1.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        this.player1.position = {x:1, y:1};

        this.monster = [];
        this.stopMonster = false;
        this.stopMonsterCounter =0;

        this.backpack = new Backpack();
    }

    this.init = function()
    {
        this.player1.StepMovedCallBack.push(this.playerMovedHandler);
        this.constants = new Constants();
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
        this.playerPositionOnMap = {x:20,y:10};
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
                // tile.tileType = 0;
                // tile.position = {x:j,y:i}
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
                    default:
                        this.itemArray.push(new Item_blank());
                        break;    
                }
            }
            this.itemMap.push(this.itemArray);
        }

        for(var i=0; i<this.mapArray.length; i++){
            var line = this.mapArray[i];
            this.tileArray = [];
            for(var j=0; j<this.mapArray[i].length; j++){
                var tile = new MapTile();
                tile.tileType = 0;
                switch(line[j]){
                    case 192:
                        tile.tileType = -4;
                        break;
                    case 200:
                        tile.tileType = -5;
                        break;
                    case 137:
                        tile.tileType = -6;
                        break;
                    case 91:
                        tile.tileType = -7;
                        break;
                    case 123:
                        tile.tileType = -8;
                        break;
                    case 196:      
                        tile.tileType = -9;
                        break;
                    case 255:      
                        tile.tileType = -10;
                        break;
                    default:
                        break;    
                }
                this.tileArray.push(tile);
            }
            this.tileMap.push(this.tileArray);
        }
	};

    this.setPlayerPosition = function(playerPosition){
        this.player1.position = playerPosition;
    }
    this.addMonster = function(monsterPosition)
    {
        var newMonster = new Monster(define.imagePath + 'monster.png',this, {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
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
        this.player1.update();
        if(this.stopMonster === true)
        {
            this.stopMonsterCounter++;
            if(this.stopMonsterCounter > 1000)
            {
                this.stopMonster = false;
            }
        }else
        {
            for(var i=0;i<this.monster.length;i++)
            {
                this.monster[i].update();
                if(this.monster[i].isDead == false && this.monster[i].position.x == this.player1.position.x && this.monster[i].position.y == this.player1.position.y)
                {
                    this.player1.die();
                    break;
                }
            }
        }
    }
    this.generation_time;

	this.draw = function(ctx) {
        console.log("draw")
        this.boxArray = [];
        this.bombArray = [];
        this.exploreArray = [];
        this.tileArray = [];

        // for(var i=0; i<11; i++){
        //     for(var j=0; j<11; j++){
        //         this.tileMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].position = this.tilePosition[j][i];
        //         this.tileMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].draw(ctx);
        //     }
        // }

        for(var i=0; i<11; i++){
            for(var j=0; j<11; j++){
                switch(this.mapArray[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x]){
                    case 192:
                        this.terrain_plain.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                        this.terrain_plain.draw(ctx);
                        break;
                    case 200:
                        this.terrain_water.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                        this.terrain_water.draw(ctx);
                        break;
                    case 137:
                        this.terrain_mountain.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                        this.terrain_mountain.draw(ctx);
                        break;
                    case 91:
                        this.terrain_blood_water.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                        this.terrain_blood_water.draw(ctx);
                        break;
                    case 123:
                        this.terrain_forest.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                        this.terrain_forest.draw(ctx);
                        break;
                    case 196:     
                        this.terrain_lava.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                        this.terrain_lava.draw(ctx);
                        break;
                    case 255:      
                        this.terrain_snow_ground.position = {x:this.tilePosition[j][i].x*64,y:this.tilePosition[j][i].y*64};
                        this.terrain_snow_ground.draw(ctx);
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

        this.backpack.draw(ctx);

        this.player1.draw(ctx);
	}	

    var m_map = this;
    this.bombExploredHandler = function(exploredArray, bomb){
        var index = m_map.bombArray.indexOf(bomb);
        m_map.bombArray.splice(index,1);
        m_map.mapArray[bomb.position.y][bomb.position.x] = 0;
        looptop:
        for(var i=0; i<exploredArray.length; i++){
            for(var j=0;j<exploredArray[i].length;j++)
            {
                var explorePos = exploredArray[i][j];
                var hasExploreBox = false;
                if(explorePos.x>0 && explorePos.y>0 && explorePos.y<m_map.mapArray.length && explorePos.x<m_map.mapArray[0].length){
                    if(m_map.mapArray[explorePos.y][explorePos.x]<0){
                        //item
                    }else if(m_map.mapArray[explorePos.y][explorePos.x] == 1)
                    {
                        //wall
                        break;
                    }else if(m_map.mapArray[explorePos.y][explorePos.x] >= 2){
                        //box
                        m_map.checkBoxExplore(explorePos);
                        hasExploreBox = true;
                    }

                    if(m_map.mapArray[explorePos.y][explorePos.x] != 1){
                        var explore = new Explore();
                        explore.position = explorePos;
                        explore.ExploredEndCallBack.push(m_map.exploreEndHandler);
                        m_map.exploreArray.push(explore);
                        if(hasExploreBox)
                        {
                            break;
                        }
                    }
                    if(explorePos.x === m_map.player1.position.x && explorePos.y === m_map.player1.position.y){
                        m_map.player1.die();
                        break looptop;
                    }
                    for(var k=0;k<m_map.monster.length;k++)
                    {
                        if(explorePos.x === m_map.monster[k].position.x && explorePos.y === m_map.monster[k].position.y){
                            m_map.monster[k].die();
                            m_map.score.addScore(500);
                        }
                    }
                }
            }
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
    this.keydown = function(e, list){
        var playerPosition = this.player1.position;
        if(e.key === 'Down') {
            this.player1.walk({x:0,y:1});
            this.playerWalkDirection = {x:0,y:1};
            if(this.checkIsWalkAble(this.playerPositionOnMap.x,this.playerPositionOnMap.y+1)){
                // console.log("x2= ",playerPosition.x);
                // console.log("y2= ",playerPosition.y);
                this.pressWalk = true;
                this.keyPress = "Down";
            }
        }

        if(e.key === 'Left') {
            this.playerWalkDirection = {x:-1,y:0};
            this.player1.walk({x:-1,y:0});
            if(this.checkIsWalkAble(this.playerPositionOnMap.x-1,this.playerPositionOnMap.y)){
                this.pressWalk = true;
                this.keyPress = "Left";
            }
        }

        if(e.key === 'Right') {
            this.playerWalkDirection = {x:1,y:0};
            this.player1.walk({x:1,y:0});
            if(this.checkIsWalkAble(this.playerPositionOnMap.x+1,this.playerPositionOnMap.y)){
                this.pressWalk = true;
                this.keyPress = "Right";
            }
        }

        if(e.key === 'Up') {
            this.playerWalkDirection = {x:0,y:-1};
            this.player1.walk({x:0,y:-1});
            if(this.checkIsWalkAble(this.playerPositionOnMap.x,this.playerPositionOnMap.y-1)){
                this.pressWalk = true;
                this.keyPress = "Up";
            }
        }

        // && this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].status

        if(e.key === 'Space'){
            if(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x]!=0){
                if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].status)
                {
                    this.backpack.addItem(this.item_map_Array[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x]);
                    if(this.itemMap[this.playerPositionOnMap.y+this.playerWalkDirection.y][this.playerPositionOnMap.x+this.playerWalkDirection.x].isRegenerate)
                        this.pickRegenerateObject();
                    else
                        this.pickObject();
                }
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

    this.keyup = function(e, list){
        if(e.key === 'Down' || e.key === 'Up' || e.key === 'Left' || e.key === 'Right') {

            if(this.keyPress == e.key)
            {
                this.player1.walkEnd();
                this.pressWalk = false;
            };
        }
    }
}