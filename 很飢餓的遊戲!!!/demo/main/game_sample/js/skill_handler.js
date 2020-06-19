var Skill_handler = function() {
    this.url = define.skillAnimationPath + 'fire_wand_level1.png';
    this.fire_wand_level1 = new Framework.AnimationSprite({url:this.url, col:5 , row:3 , loop:false , speed:12}); 
    this.fire_wand_level1.scale = 1.25;
    this.fire_wand_level1.index = 0;
    this.fire_wand_level1.position = {x:13*64-64*3, y:7*64};
    this.url2 = define.skillAnimationPath + 'Ice1.png';
    this.ice_wand_level1 = new Framework.AnimationSprite({url:this.url2, col:5 , row:3 , loop:false , speed:12}); 
    this.ice_wand_level1.scale = 1.25;
    this.ice_wand_level1.index = 0;
    this.ice_wand_level1.position = {x:13*64-64*3, y:7*64};
    this.update = function(){
        this.fire_wand_level1.update();
        this.ice_wand_level1.update();
    }
    this.isAnimationStart = function(){
        return this.fire_wand_level1._start || this.ice_wand_level1._start
    }
    this.start = function(playerWalkDirection,playerPositionOnMap,equipmentId){  
        var audio = new Framework.Audio({
            fire: {
                mp3: define.musicPath + '火魔法.mp3',
            },
            ice: {
                mp3: define.musicPath + '冰魔法.mp3',
            }
        });
        this.mapPosition = {x: playerPositionOnMap.x+playerWalkDirection.x*3, y: playerPositionOnMap.y+playerWalkDirection.y*3};
        if(equipmentId == 29){
            this.fire_wand_level1.start({ from: 0, to: 14, loop: false});
        }
        if(equipmentId == 30){
            this.ice_wand_level1.start({ from: 0, to: 14, loop: false});
        }
    }
    this.setPosition = function(positionOnMap){
        this.fire_wand_level1.position = positionOnMap;
        this.ice_wand_level1.position = positionOnMap;
    }
    this.draw = function(ctx){
        if(this.fire_wand_level1._start)
            this.fire_wand_level1.draw(ctx);
        if(this.ice_wand_level1._start)
            this.ice_wand_level1.draw(ctx);
    }
};