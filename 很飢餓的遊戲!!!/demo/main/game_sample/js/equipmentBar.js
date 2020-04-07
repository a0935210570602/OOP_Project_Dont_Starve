var EquipmentBar = function(backpackList) {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;
    this.backpack.position = {x: 23*64, y: 8*64};    
    this.equipmentList = [null,null,null];

    //1:小花 2:蜘蛛網 3:石頭 4:樹枝 5:偉凱的作業簿 6:草 7:木頭 8:燧石 9:黃金 10:豬皮
    //11:蜂刺 12:雪球 13:繩索 14:露水 15:十字鎬 16:斧頭 17:釣魚竿 18:鏟子 19:黃金斧頭 20:黃金鏟子 
    //21:黃金十字鎬 22:頭盔 23:草製盔甲 24:木製盔甲 25:長矛 26:吹箭 27:國王法杖 28:空間法杖 29:火法杖 30:冰法杖
    //31:黃金提燈 32:火把 33:帳篷 34:篝火 35:冰塊 36:漿果叢

    this.itemNameArray = [
        "小花", "蜘蛛網", "石頭", "樹枝", "偉凱的作業簿", "草", "木頭", "燧石", "黃金", "豬皮",
        "蜂刺", "雪球", "繩索", "露水", "十字鎬", "斧頭", "釣魚竿", "鏟子", "黃金斧頭", "黃金鏟子", 
        "黃金十字鎬", "頭盔", "草製盔甲", "木製盔甲", "長矛", "吹箭", "國王法杖", "空間法杖", "火法杖", "冰法杖",
        "黃金提燈", "火把", "帳篷", "篝火", "冰塊", "漿果叢"
    ];


    this.positionChange = function(position){
        return {x:position.x*64,y:position.y*64};
    }

    this.draw = function(ctx){
        this.backpack.position = {x: 23*64, y: 8*64};    
        for(var i = 0;i < 3;i++){
            this.backpack.position.y += 64;
            this.backpack.draw(ctx);
        }
    }

    this.getHeadEquipment = function(){
        return this.equipmentList[0];
    }

    this.getBodyEquipment = function(){
        return this.equipmentList[1];
    }

    this.getHandEquipment = function(){
        return this.equipmentList[2];
    }

    this.click = function(e){

    }
};