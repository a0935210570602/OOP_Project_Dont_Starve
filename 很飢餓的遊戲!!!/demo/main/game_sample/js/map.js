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

        this.mapBranch = new Framework.Sprite(define.materialPath + '0.png');
        this.mapBranch.scale = 2;

        this.item_1 = new Framework.Sprite(define.materialPath + '1.png');
        this.item_1.scale = 2;

        this.item_2 = new Framework.Sprite(define.materialPath + '2.png');
        this.item_2.scale = 2;

        this.item_3 = new Framework.Sprite(define.materialPath + '3.png');
        this.item_3.scale = 2;

        this.item_4 = new Framework.Sprite(define.materialPath + '4.png');
        this.item_4.scale = 2;

        this.item_5 = new Framework.Sprite(define.materialPath + '5.png');
        this.item_5.scale = 2;

        var mapBoxPic = new Framework.Sprite(define.imagePath + 'box.png');
        var bombPic  = new Framework.Sprite(define.imagePath + 'bomb.png');
        var bombPic  = new Framework.Sprite(define.imagePath + 'explore.png');
        var newMonster = new Monster(define.imagePath + 'monster.png',this, {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        
        this.increaseBombNum  = new Framework.Sprite(define.imagePath + 'increaseBombNum.png');
        this.increaseBombNum.scale = 1.5;
        this.increaseBombPower  = new Framework.Sprite(define.imagePath + 'increaseBombPower.png');
        this.increaseBombPower.scale = 1.5;
        this.stopMonster  = new Framework.Sprite(define.imagePath + 'stopMonster.png');
        this.stopMonster.scale = 1.5;
        this.player1 = new BombMan(define.imagePath + 'player1.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        this.player1.position = {x:1, y:1};

        this.monster = [];
        this.stopMonster = false;
        this.stopMonsterCounter =0;
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
                var tile = new Branch();
                // tile.tileType = 0;
                // tile.position = {x:j,y:i}
                if(line[j] === 1){
                    tile.tileType = this.constants.Items.ITEM_1;
                }else if(line[j] ===2){
                    tile.tileType = this.constants.Items.ITEM_2;
                }else if(line[j] === 3){
                    tile.tileType = this.constants.Items.ITEM_3;
                    console.log("3");
                }else if(line[j] === 4){
                    tile.tileType = this.constants.Items.ITEM_4;
                }else if(line[j] === 5){
                    tile.tileType = this.constants.Items.ITEM_5;
                }else{
                    // tile.tileType = this.constants.Items.BRANCH;
                }
                this.itemArray.push(tile);
            }
            this.itemMap.push(this.itemArray);
        }

        for(var i=0; i<this.mapArray.length; i++){
            var line = this.mapArray[i];
            this.tileArray = [];
            for(var j=0; j<this.mapArray[i].length; j++){
                var tile = new MapTile();
                tile.tileType = 0;
                if(line[j] === 192){
                    tile.tileType = -4
                }else if(line[j] === 200){
                    tile.tileType = -5
                }else if(line[j] === 137){
                    tile.tileType = -6
                }else if(line[j] === 91){
                    tile.tileType = -7
                }else if(line[j] === 123){
                    tile.tileType = -8
                }else if(line[j] === 196){
                    tile.tileType = -9
                }else if(line[j] === 255){
                    tile.tileType = -10
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
	this.draw = function(ctx) {

        this.boxArray = [];
        this.bombArray = [];
        this.exploreArray = [];
        this.tileArray = [];

        for(var i=0; i<11; i++){
            for(var j=0; j<11; j++){
                this.tileMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].position = this.tilePosition[j][i];
                this.tileMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].draw(ctx);
            }
        }

        for(var i=0; i<11; i++){
            for(var j=0; j<11; j++){
                console.log("babubau");
                this.itemMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].position = this.tilePosition[j][i];
                this.itemMap[j+ this.addition.y+this.mapDisplacement.y][i+ this.addition.x+this.mapDisplacement.x].draw(ctx);
            }
        }
        // console.log(this.item_map_Array);
        // console.log("this.item_map_Array");
        // for(var i=2+ this.addition.y; i<13+ this.addition.y; i++){
        //     var line = this.item_map_Array[i];
        //     for(var j=9+ this.addition.x; j<20+ this.addition.x; j++){
        //         var tile = new Branch();
        //         tile.tileType = 0;
        //         tile.position = {x:j-this.addition.x,y:i-this.addition.y};
        //         if(line[j] === 1){
        //             // console.log(1);
        //             tile.tileType = this.constants.Items.ITEM_1;
        //         }else if(line[j] ===2){
        //             tile.tileType = this.constants.Items.ITEM_2;
        //         }else if(line[j] === 3){
        //             tile.tileType = this.constants.Items.ITEM_3;
        //         }else if(line[j] === 4){
        //             tile.tileType = this.constants.Items.ITEM_4;
        //         }else if(line[j] === 5){
        //             tile.tileType = this.constants.Items.ITEM_5;
        //         }else{
        //             // tile.tileType = this.constants.Items.BRANCH;
        //         }
        //         if(tile.tileType != 0){
        //             this.item_tileArray.push(tile);
        //         }
        //     }
        // }



        // for(var i=0; i<this.boxArray.length; i++)
        // {
        //     this.boxArray[i].draw(ctx);
        // }
        // for(var i=0; i<this.exploreArray.length; i++)
        // {
        //     this.exploreArray[i].draw(ctx);
        // }
        // for(var i=0;i<this.monster.length;i++)
        // {
        //     this.monster[i].draw(ctx);
        // }
        // for(var i=0;i<this.monster.length;i++)
        // {
        //     this.monster[i].draw(ctx);
        // }
        // for(var i=0; i<this.item_tileArray.length; i++)
        // {
        //     // console.log("drawing",i);
        //     // console.log(this.item_tileArray[i]);
        //     this.item_tileArray[i].draw(ctx);
        // }
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
            if(this.checkIsWalkAble(this.playerPositionOnMap.x,this.playerPositionOnMap.y+1)){
                // console.log("x2= ",playerPosition.x);
                // console.log("y2= ",playerPosition.y);
                this.pressWalk = true;
                this.keyPress = "Down";
                this.playerWalkDirection = {x:0,y:1};
            }
        }

        if(e.key === 'Left') {
            if(this.checkIsWalkAble(this.playerPositionOnMap.x-1,this.playerPositionOnMap.y)){
                this.pressWalk = true;
                this.keyPress = "Left";
                this.playerWalkDirection = {x:-1,y:0};
            }
        }

        if(e.key === 'Right') {
            if(this.checkIsWalkAble(this.playerPositionOnMap.x+1,this.playerPositionOnMap.y)){
                this.pressWalk = true;
                this.keyPress = "Right";
                this.playerWalkDirection = {x:1,y:0};
            }
        }

        if(e.key === 'Up') {
            if(this.checkIsWalkAble(this.playerPositionOnMap.x,this.playerPositionOnMap.y-1)){
                this.pressWalk = true;
                this.keyPress = "Up";
                this.playerWalkDirection = {x:0,y:-1};
            }
        }

        if(e.key === 'Space'){
            var bomb = this.player1.placeBomb();
            if(!Framework.Util.isNull(bomb))
            {
                bomb.ExploredCallBack.push(Framework.Game._currentLevel.map.bombExploredHandler);
                this.bombArray.push(bomb);
                var bombPosition = bomb.position;
                this.mapArray[bombPosition.y][bombPosition.x] = 3;
            }
        }
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