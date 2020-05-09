//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var BombMan = function(file, options) {
    this.url = file;      

    this.sprite_dead = new Framework.AnimationSprite({url:define.materialPath + 'Actor_dead.png', col:3 , row:1 , loop:false , speed:4}); 
    this.sprite_dead.scale = 1.4;

    this.player_state = "";
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
    
    this.mode = "";

    //一個格子 = 20
    this.character_descruption_point = [];
    this.character_descruption_point[0] = 2;   //"生命";
    this.character_descruption_point[1] = 5;   //"魔力";
    this.character_descruption_point[2] = 4;   //"物功";
    this.character_descruption_point[3] = 8;   //"魔攻";
    this.character_descruption_point[4] = 2;   //"弓攻";
    this.character_descruption_point[5] = 6;   //"力量";
    this.character_descruption_point[6] = 13;  //"智力";
    this.character_descruption_point[7] = 6;   //"防禦";
    this.character_descruption_point[8] = 14;  //"技巧";

    //角色格子轉成數值
    this.characterStatus = new CharacterStatus(this.character_descruption_point[5]*20, this.character_descruption_point[0]*20);

    this.character_descruption_total_point = [];
    this.character_descruption_total_point[0] = 0;
    this.character_descruption_total_point[1] = 0;
    this.character_descruption_total_point[2] = 0;
    this.character_descruption_total_point[3] = 0;
    this.character_descruption_total_point[4] = 0;
    this.character_descruption_total_point[5] = 0;
    this.character_descruption_total_point[6] = 0;
    this.character_descruption_total_point[7] = 0;
    this.character_descruption_total_point[8] = 0;

    this.experience = 0;
    this.levelup_experience = 4;
    this.level = 1;
    this.is_levelup = false;
    this.capabilityt_point = 0;


    this.totalDefense = 10;
    this.plantIndex = -1;
    //以下這句話的意思是當options.position為undefined時this.sprite.position = x: 0, y: 0}
    //若options.position有值, 則this.sprite.position = options.position
    //原因是在JS中, undefined會被cast成false
    //this.sprite.position = options.position || {x: 0, y: 0};
    //this.sprite.scale = options.scale || 1;
    //由於0會被cast成false, 故不能用上面的方法來簡化
    //this.sprite.rotation = (Framework.Util.isUndefined(options.rotation))?0:options.rotation;
    this.init = function(){
        this.characterStatus.init();
        this.player_state = "alive";
    }
    this.getExperience= function(experience){
        this.experience += experience;
        if(this.experience >=this.levelup_experience){
            this.experience -= this.levelup_experience
            this.levelup_experience *= 2;
            this.level ++;
            this.capabilityt_point ++;
            this.is_levelup = true;
        }
        if(this.is_levelup){
            this.is_levelup = false;
            
            return true;
        }
    }
    this.getBackPack = function(){
        return this.backpack;
    }

    this.getHeadDeffensePointEquipment = function(){
        var bodyEquipment = this.equipmentBar.getEquipment(0);
        if(bodyEquipment != null)
            return this.equipmentBar.getEquipment(0).deffense_point;
        else
            return 0;
    }

    this.getBodyDeffensePointEquipment = function(){
        var bodyEquipment = this.equipmentBar.getEquipment(1);
        if(bodyEquipment != null)
            return this.equipmentBar.getEquipment(1).deffense_point;
        else
            return 0;
    }

    this.getHandAttackPointEquipment = function(){
        var handEquipment = this.equipmentBar.getEquipment(2);
        if(handEquipment != null)
            return this.equipmentBar.getEquipment(2).attack_point;
        else
            return 0;
    }

    this.getHandMagicAttackPointEquipment = function(){
        var handEquipment = this.equipmentBar.getEquipment(2);
        if(handEquipment != null)
            return this.equipmentBar.getEquipment(2).magic_attack_point;
        else
            return 0;
    }

    this.getHandArrorAttackPointEquipment = function(){
        var handEquipment = this.equipmentBar.getEquipment(2);
        if(handEquipment != null)
            return this.equipmentBar.getEquipment(2).arror_attack_point;
        else
            return 0;
    }

    this.getHandEquipment = function(){
        var handEquipment = this.equipmentBar.getEquipment(2);
        if(handEquipment != null){
            if(handEquipment.item_num == 32)
                this.mode = "light";
            else if(handEquipment.item_num == 16 || handEquipment.item_num == 19)
                this.mode = "cut_tree";
            else if(handEquipment.item_num == 15 || handEquipment.item_num == 21)
                this.mode = "rock_dig";
            else if(handEquipment.item_num == 18 || handEquipment.item_num == 20)
                this.mode = "plant_dig";
            else if(handEquipment.item_num == 27 || handEquipment.item_num == 28 || handEquipment.item_num == 29 || handEquipment.item_num == 30)
                this.mode = "magic";
            else if(handEquipment.item_num == 25)
                this.mode = "spear";
            else if(handEquipment.item_num == 26)
                this.mode = "arror";
            else
                this.mode = "";
        }else{
            this.mode = "";
        }
    }
    this.dieEvent = function(position){
        this.player_state = "dead";
        this.character_descruption_point[0] = 0;
        this.character_descruption_total_point[0] = 0;
        this.characterStatus.currentHealth = 0;
        // this.update();
        this.sprite_dead.position = {x: position.x*64, y: position.y*64};
        this.sprite_dead.start({ from: 0 , to: 2, loop: true});
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
        // console.log('player die');
        Framework.Game.goToLevel('gameOver');
    }

    this.walkEnd = function(){  
        this.sprite.stop();
    }

    this.capibility = function(){
        for(var i=0;i<9;i++)
            this.character_descruption_total_point[i] = this.character_descruption_point[i];
        this.character_descruption_total_point[2] += this.getHandAttackPointEquipment();
        this.character_descruption_total_point[3] += this.getHandMagicAttackPointEquipment();
        this.character_descruption_total_point[4] += this.getHandArrorAttackPointEquipment();
        this.character_descruption_total_point[7] += this.getBodyDeffensePointEquipment()+this.getHeadDeffensePointEquipment();
    }

    this.update = function(){
        //更新角色血量(飢餓狀態)  this.characterStatus.currentHunger是數值,要轉成格子
        // console.log("this.character_descruption_point[0]");
        // console.log(this.character_descruption_point[0]);
        this.character_descruption_point[0] = Math.floor(this.characterStatus.currentHealth/20);
        this.capibility();
        // if(this.character_descruption_total_point[0]<=0){
        //     this.player_state = "dead";
            // this.sprite_dead.update();
        // }


        if(this.isWalking){
            this.isWalking = false;
            this.sprite.index = this.playerDirection * 3 + 1;

            for(var i=0; i<this.StepMovedCallBack.length; i++){
                this.StepMovedCallBack[i];
            }
        }
        this.equipmentBar.update();
        this.getHandEquipment();
        this.sprite_dead.update();
        this.sprite.update();
    }


    this.draw = function(ctx){
        // console.log("this.sprite.position");
        // console.log(this.spritePosition);
        // console.log("this.canvasPosition");
        // console.log(this.canvasPosition);
        this.sprite.position = {x: this.spritePosition.x, y: this.spritePosition.y};
        this.equipmentBar.draw(ctx);
        this.backpack.draw(ctx);
        this.characterStatus.draw(ctx);
        if(this.player_state == "alive"){
            this.sprite.draw(ctx);
        }else if(this.player_state == "dead"){
            this.sprite_dead.draw(ctx);
        }
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
        if(obj.item_num == 32){
            obj.inEquipmentbar = true;
            obj.reduceDurability();
        }
        var equipment_obj = this.equipmentBar.getEquipment(indexForEquipment);
        this.backpack.arrayRemoveByIndex(indexForBackpack);
        this.equipmentBar.setEquipment(obj, indexForEquipment);
        if(equipment_obj != null){
            if(equipment_obj.item_num == 32)
                equipment_obj.inEquipmentbar = false;
            this.backpack.addItemByObject(equipment_obj);
        }
    }

    this.clickInBackPack = function(index){
        this.plantIndex = -1;
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
        if(obj.type == "plant")
            this.plantIndex = index;
    }

    this.removeEquipment = function(index){
        if(this.backpack.getItemListLength() < 17 && this.equipmentBar.getEquipment(index) != null){
            if(this.equipmentBar.getEquipment(index).item_num == 32)
                this.equipmentBar.getEquipment(index).inEquipmentbar = false;
            this.backpack.addItemByObject(this.equipmentBar.getEquipment(index));
            this.equipmentBar.setEquipment(null, index);
        }
    }
    this.get_back_number;
    this.mousemove = function(e){
        var index = this.getBackPackIndex(e);
        var equipmentIndex = this.getEquipmentIndex(e);
        this.backpack.selectedIndex = index;
        this.equipmentBar.selectedIndex = equipmentIndex;
        this.get_back_number = this.backpack.mousemove(e);
    }

    this.isChangeCapability = function(which_capability){
            this.character_descruption_point[which_capability]++;
            this.capabilityt_point--;
    }

    this.charaerAbilityClick = function(e){
        if(e.x >= 470 && e.x <=510){
            if(e.y >=540 && e.y<= 560){
                this.isChangeCapability(2);
            }else if(e.y >=622 && e.y<= 642){
                this.isChangeCapability(3);
            }else if(e.y >=700 && e.y<= 720){
                this.isChangeCapability(4);
            }
        }else if(e.x >= 822 && e.x <=861){
            if(e.y >=382 && e.y<= 415){
                this.isChangeCapability(5);
            }else if(e.y >=461 && e.y<= 502){
                this.isChangeCapability(6);
            }else if(e.y >=622 && e.y<= 661){
                this.isChangeCapability(9);
            }
        }   
    }
    this.click = function(e){
        var index = this.getBackPackIndex(e);
        var equipmentIndex = this.getEquipmentIndex(e);
        
        if(index != -1)
            this.clickInBackPack(index);
        
        if(equipmentIndex != -1)
            this.removeEquipment(equipmentIndex);
    }

    this.getBackPackIndex = function(e){
        var index = -1;
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
        }

        return index;
    }

    this.getEquipmentIndex = function(e){
        var equipmentIndex = -1;
        if(e.x >= 1443 && e.x <= 1498){
            if(e.y >= 547 && e.y <= 606)
                equipmentIndex = 0;
            if(e.y >= 606 && e.y <= 667)
                equipmentIndex = 1;
            if(e.y >= 667 && e.y <= 733)
                equipmentIndex = 2;
        }

        return equipmentIndex;
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