//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var BombMan = function(file, options) {
    this.url = file;      
    //AnimationSprite當圖片是一整張圖片(連續圖), 而非Array時一定要給col, row三個(url是一定要的)   
    this.sprite = new Framework.AnimationSprite({url:this.url, col:3 , row:4 , loop:true , speed:12}); 
    this.sprite.scale = 1.4;
    this.sprite.index = 1;
    var PIXEL_CONST = 64;
    //this.sprite.start({ from: 0, to: 2, loop: true});
    this.canvasPosition = {x:0, y:0};
    this.spritePosition = {x:0, y:0};
    this.constants = new Constants();
    this.StepMovedCallBack = [];
    this.maxBombNum = 1;
    this.bombNum = 0;
    this.pic_count = 0;
    this.isWalking = false;
    var m_bombMan = this;
    this.playerDirection = this.constants.DirectionEnum.DOWN;
    this.equipmentBar = new EquipmentBar();
    this.backpack = new Backpack();
    this.characterStatus = new CharacterStatus();
    this.mode = "";
    this.baseAttack = 10;
    this.baseDefense = 10;
    this.headEquipmentDefense = 0;
    this.bodyEquipmentDefense = 0;
    this.handEquipmentAttack = 0;

    this.totalDefense = 10;

    //以下這句話的意思是當options.position為undefined時this.sprite.position = x: 0, y: 0}
    //若options.position有值, 則this.sprite.position = options.position
    //原因是在JS中, undefined會被cast成false
    //this.sprite.position = options.position || {x: 0, y: 0};
    //this.sprite.scale = options.scale || 1;
    //由於0會被cast成false, 故不能用上面的方法來簡化
    //this.sprite.rotation = (Framework.Util.isUndefined(options.rotation))?0:options.rotation;
    this.init = function(){
        this.characterStatus.init();
    }

    this.getBackPack = function(){
        return this.backpack;
    }

    this.getHeadEquipment = function(){
        var headEquipment = this.equipmentBar.getEquipment(0);
        if(headEquipment != null)
            this.headEquipmentDefense = 10;
    }

    this.getBodyEquipment = function(){
        var bodyEquipment = this.equipmentBar.getEquipment(1);
        if(bodyEquipment != null)
            this.bodyEquipmentDefense = 10;
    }

    this.getHandEquipment = function(){
        var handEquipment = this.equipmentBar.getEquipment(2);
        if(handEquipment != null){
            this.handEquipmentAttack = 10;
            if(handEquipment.item_num == 32)
                this.mode = "light";
            else if(handEquipment.item_num == 16 || handEquipment.item_num == 19)
                this.mode = "cut_tree";
            else if(handEquipment.item_num == 15 || handEquipment.item_num == 21)
                this.mode = "rock_dig";
            else
                this.mode = "";
        }
    }
    //moveStep為位移量  格式範例{x:1,y:0}
    this.walk = function(moveStep){
        //console.log("player walk " + this.spritePosition.x + ", " + this.spritePosition.y);
        if(this.isWalking === false){
            if(moveStep.x > 0){
                this.playerDirection = this.constants.DirectionEnum.RIGHT;
            }else if(moveStep.x <0){
                this.playerDirection = this.constants.DirectionEnum.LEFT;
            }

            if(moveStep.y > 0){
                this.playerDirection = this.constants.DirectionEnum.DOWN;
            }else if(moveStep.y < 0){
                this.playerDirection = this.constants.DirectionEnum.UP;
            }
            this.isWalking = true;
            //this.canvasPosition = {x:this.canvasPosition.x, y:this.canvasPosition.y};
            this.sprite.start({ from: this.playerDirection * 3, to: this.playerDirection * 3 + 2, loop: true});
        }
    }

    this.die = function(){
        console.log('player die');
        Framework.Game.goToNextLevel();
    }

    this.walkEnd = function(){  
        this.sprite.stop();
    }

    this.update = function(){
        if(this.isWalking){
            this.isWalking = false;
            this.sprite.index = this.playerDirection * 3 + 1;

            for(var i=0; i<this.StepMovedCallBack.length; i++){
                this.StepMovedCallBack[i];
            }
        }
        this.equipmentBar.update();
        this.getBodyEquipment();
        this.getHandEquipment();
        this.getHeadEquipment();
    }


    this.draw = function(ctx){
        // console.log("this.sprite.position");
        // console.log(this.spritePosition);
        // console.log("this.canvasPosition");
        // console.log(this.canvasPosition);
        this.sprite.position = {x: this.spritePosition.x, y: this.spritePosition.y};
        this.sprite.update();
        this.sprite.draw(ctx);
        this.equipmentBar.draw(ctx);
        this.backpack.draw(ctx);
        this.characterStatus.draw(ctx);
    }

    this.increaseBombNum = function(){
        this.maxBombNum += 1;
    }

    this.increaseBombPower = function(){
        this.bombPower += 1;
    }

    this.bombExploredHandler = function(exploredArray, bomb){
        m_bombMan.bombNum -= 1;
    }

    this.placeBomb = function(){
        if(this.bombNum < this.maxBombNum){
            var bomb = new Bomb(this.bombPower);
            bomb.position = this.canvasPosition;
            bomb.ExploredCallBack.push(this.bombExploredHandler);
            this.bombNum += 1;
            return bomb;
        }
        return null;
    }

    this.equipFromBackpack = function(indexForBackpack, indexForEquipment){
        var obj = this.backpack.getItem(indexForBackpack);
        obj.inEquipmentbar = true;
        var equipment_obj = this.equipmentBar.getEquipment(indexForEquipment);
        this.backpack.arrayRemoveByIndex(indexForBackpack);
        this.equipmentBar.setEquipment(obj, indexForEquipment);
        if(equipment_obj != null){
            equipment_obj.inEquipmentbar = false;
            this.backpack.addItemByObject(equipment_obj);
        }
    }

    this.clickInBackPack = function(index){
        var obj = this.backpack.getItem(index);
        if (obj.type == "equipment"){
            switch(obj.place){
                case "head":
                    this.equipFromBackpack(index, 0);
                    break;
                case "body":
                    this.equipFromBackpack(index, 1);
                    break;
                case "hand":
                    this.equipFromBackpack(index, 2);
                    break;
            }
        }
        if (obj.type == "food"){
            this.characterStatus.increaseStatusByEat(obj.hungerAddition, obj.healthAddition);
            this.backpack.updateByEat(index);
        }
    }

    this.removeEquipment = function(index){
        if(this.backpack.getItemListLength() < 17 && this.equipmentBar.getEquipment(index) != null){
            this.equipmentBar.equipmentList[index].inEquipmentbar = false;

            this.backpack.addItemByObject(this.equipmentBar.getEquipment(index));
            this.equipmentBar.setEquipment(null, index);

        }
    }

    this.click = function(e){
        var index = -1;
        var equipmentIndex = -1
        if(e.y >= 800 && e.y <=860){
            if(e.x >= 290 && e.x < 350)
                index = 0;
            else if(e.x >= 350 && e.x < 410)
                index = 1;
            else if(e.x >= 410 && e.x < 480)
                index = 2;
            else if(e.x >= 480 && e.x < 540)
                index = 3;
            else if(e.x >= 540 && e.x < 605)
                index = 4;
            else if(e.x >= 605 && e.x < 672)
                index = 5;
            else if(e.x >= 672 && e.x < 732)
                index = 6;
            else if(e.x >= 732 && e.x < 800)
                index = 7;
            else if(e.x >= 800 && e.x < 860)
                index = 8;
            else if(e.x >= 860 && e.x < 924)
                index = 9;
            else if(e.x >= 924 && e.x < 990)
                index = 10;
            else if(e.x >= 990 && e.x < 1053)
                index = 11;
            else if(e.x >= 1053 && e.x < 1118)
                index = 12;
            else if(e.x >= 1118 && e.x < 1183)
                index = 13;
            else if(e.x >= 1183 && e.x < 1247)
                index = 14;
            else if(e.x >= 1247 && e.x < 1310)
                index = 15;
            else if(e.x >= 1310 && e.x < 1370)
                index = 16;
            if(index != -1){
                this.clickInBackPack(index);
            }
        }

        if(e.x >= 1443 && e.x <= 1498){
            if(e.y >= 547 && e.y <= 606)
                equipmentIndex = 0;
            if(e.y >= 606 && e.y <= 667)
                equipmentIndex = 1;
            if(e.y >= 667 && e.y <= 733)
                equipmentIndex = 2;
            if(equipmentIndex != -1)
                this.removeEquipment(equipmentIndex);
        }
    }

};

Object.defineProperty(BombMan.prototype, 'position', {
    get: function() {
        return this.canvasPosition;
    },
    set: function(newValue) {
        this.canvasPosition = newValue;
        this.spritePosition = {x:this.canvasPosition.x * 64, y: this.canvasPosition.y * 64};
    }
});