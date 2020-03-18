var Map = function(map)
{
    this.mapArray = map;
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
        this.itemArray = [];
        this.tileArray = [];
        this.exploreArray = [];

        for(var i=0; i<11; i++){
            var line = this.mapArray[i];
            for(var j=0; j<11; j++){
                var tile = new MapTile();
                tile.tileType = 0;
                tile.position = {x:j,y:i}
                if(line[j] === 2){
                    var box = new Box(this.constants.ItemEnum.NONE);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else if(line[j] === 3){
                    var box = new Box(this.constants.ItemEnum.INCREASE_BOMB);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else if(line[j] === 4){
                    var box = new Box(this.constants.ItemEnum.INCREASE_POWER);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else if(line[j] === 5){
                    var box = new Box(this.constants.ItemEnum.STOP_MONSTER);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else if(line[j] === 192){
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
                else
                {
                    tile.tileType = line[j];
                }
                this.tileArray.push(tile);
            }
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
        // for(var i=0; i<this.boxArray.length; i++)
        // {
        //     this.boxArray[i].update();
        // }
        // for(var i=0; i<this.bombArray.length; i++)
        // {
        //     this.bombArray[i].update();
        // }
        // for(var i=0; i<this.exploreArray.length; i++)
        // {
        //     this.exploreArray[i].update();
        // }

        // if(this.pressWalk === true && this.player1.isWalking === false)
        if(this.pressWalk === true)
        {
            if(this.checkIsWalkAble(this.player1.position.x+this.playerWalkDirection.x,this.player1.position.y+this.playerWalkDirection.y))
            {
                // this.player1.walk(this.playerWalkDirection);
                if(this.keyPress == "Down") {
                    // console.log("x2= ",playerPosition.x);
                    // console.log("y2= ",playerPosition.y);
                    this.player1.walk({x:0,y:1});
                    this.player1.position.y+=1;
                    this.addition.x += 0;
                    this.addition.y += 1;
                    // m_map.draw(Framework.Game._context);
                }
        
                if(this.keyPress == "Left") {
                    this.player1.walk({x:-1,y:0});
                    this.player1.position.x-=1;
                    this.addition.x += -1;
                    this.addition.y += 0;
                    // m_map.draw(Framework.Game._context);
                }
        
                if(this.keyPress == "Right") {
                    this.player1.walk({x:1,y:0});
                    this.player1.position.x+=1;
                    this.addition.x += 1;
                    this.addition.y += 0;
                    // m_map.draw(Framework.Game._context);
                }
        
                if(this.keyPress == "Up") {
                    this.player1.walk({x:0,y:-1});
                    this.player1.position.y-=1;
                    this.addition.x += 0;
                    this.addition.y += -1;
                    // m_map.draw(Framework.Game._context);
                }
            }
            console.log("addition:",this.addition);
            console.log("position",this.player1.position);
            console.log("pressWalk",this.pressWalk);
            console.log("keyPress",this.keyPress);
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
        // console.log("draw");
        this.boxArray = [];
        this.bombArray = [];
        this.itemArray = [];
        this.tileArray = [];
        this.exploreArray = [];
        for(var i=2+ this.addition.y; i<13+ this.addition.y; i++){
            var line = this.mapArray[i];
            for(var j=9+ this.addition.x; j<20+ this.addition.x; j++){
                var tile = new MapTile();
                tile._tileType = 0;
                tile.position = {x:j-this.addition.x,y:i-this.addition.y};
                if(line[j] === 2){
                    var box = new Box(this.constants.ItemEnum.NONE);
                    box.position = {x:j-this.addition.x, y:i-this.addition.y};
                    this.boxArray.push(box);
                }else if(line[j] === 3){
                    var box = new Box(this.constants.ItemEnum.INCREASE_BOMB);
                    box.position = {x:j-this.addition.x, y:i-this.addition.y};
                    this.boxArray.push(box);
                }else if(line[j] === 4){
                    var box = new Box(this.constants.ItemEnum.INCREASE_POWER);
                    box.position = {x:j-this.addition.x, y:i-this.addition.y};
                    this.boxArray.push(box);
                }else if(line[j] === 5){
                    var box = new Box(this.constants.ItemEnum.STOP_MONSTER);
                    box.position = {x:j-this.addition.x, y:i-this.addition.y};
                    this.boxArray.push(box);
                }else if(line[j] === 192){
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
                else
                {
                    tile.tileType = line[j];
                }
                this.tileArray.push(tile);
            }
        }
		// for(var i=0; i<this.mapArray.length; i++){
		// 	var line = this.mapArray[i];
		// 	for(var j=0; j<line.length; j++){
		// 		this.mapFloor.position = {x: j * 64, y: i * 64};
		// 		this.mapFloor.draw(ctx);
  //               if(line[j] === 1){
  //                   this.mapWall.position = {x: j * 64, y: i * 64};
  //                   this.mapWall.draw(ctx);
  //               }else if(line[j] === -1){
  //                   this.increaseBombNum.position = {x: j * 64, y: i * 64};
  //                   this.increaseBombNum.draw(ctx);
  //               }else if(line[j] === -2){
  //                   this.increaseBombPower.position = {x: j * 64, y: i * 64};
  //                   this.increaseBombPower.draw(ctx);
  //               }
		// 	}
		// }


        for(var i=0; i<this.tileArray.length; i++)
        {
            this.tileArray[i].draw(ctx);
        }

        for(var i=0; i<this.boxArray.length; i++)
        {
            this.boxArray[i].draw(ctx);
        }
        for(var i=0; i<this.bombArray.length; i++)
        {
            this.bombArray[i].draw(ctx);
        }
        for(var i=0; i<this.exploreArray.length; i++)
        {
            this.exploreArray[i].draw(ctx);
        }
        for(var i=0;i<this.monster.length;i++)
        {
            this.monster[i].draw(ctx);
        }
        this.player1.draw(ctx);
        // this.score.draw(ctx);
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
            if(this.checkIsWalkAble(playerPosition.x,playerPosition.y+1)){
                // console.log("x2= ",playerPosition.x);
                // console.log("y2= ",playerPosition.y);
                this.pressWalk = true;
                this.keyPress = "Down";
                this.playerWalkDirection = {x:0,y:1};
            }
        }

        if(e.key === 'Left') {
            if(this.checkIsWalkAble(playerPosition.x-1,playerPosition.y)){
                this.pressWalk = true;
                this.keyPress = "Left";
                this.playerWalkDirection = {x:-1,y:0};
            }
        }

        if(e.key === 'Right') {
            if(this.checkIsWalkAble(playerPosition.x+1,playerPosition.y)){
                this.pressWalk = true;
                this.keyPress = "Right";
                this.playerWalkDirection = {x:1,y:0};
            }
        }

        if(e.key === 'Up') {
            if(this.checkIsWalkAble(playerPosition.x,playerPosition.y-1)){
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
        if(this.mapArray[y][x] == 91 || this.mapArray[y][x] == 200){
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