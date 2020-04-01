var SynthesisBar = function(backpackList) {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;
    this.backpack.position = {x:0,y:0};
    this.currentPoint = {x:-1,y:-1};

    this.secondColumnRange = [];
    this.thirdColumnRange = [];
    this.firstColumeIndex = -1;
    this.secondColumnIndex = -1;

    this.getBackpack;

    //1:小花 2:蜘蛛網 3:石頭 4:樹枝 5:偉凱的作業簿 6:草 7:木頭 8:燧石 9:黃金 10:豬皮
    //11:蜂刺 12:雪球 13:繩索 14:露水 15:十字鎬 16:斧頭 17:釣魚竿 18:鏟子 19:黃金斧頭 20:黃金鏟子 
    //21:黃金十字鎬 22:頭盔 23:草製盔甲 24:木製盔甲 25:長矛 26:吹箭 27:國王法杖 28:空間法杖 29:火法杖 30:冰法杖
    //31:黃金提燈 32:火把 33:帳篷 34:篝火 35:繩索 36:冰塊 37:漿果叢

    this.itemNameArray = [
        "小花", "蜘蛛網", "石頭", "樹枝", "偉凱的作業簿", "草", "木頭", "燧石", "黃金", "豬皮",
        "蜂刺", "雪球", "繩索", "露水", "十字鎬", "斧頭", "釣魚竿", "鏟子", "黃金斧頭", "黃金鏟子", 
        "黃金十字鎬", "頭盔", "草製盔甲", "木製盔甲", "長矛", "吹箭", "國王法杖", "空間法杖", "火法杖", "冰法杖",
        "黃金提燈", "火把", "帳篷", "篝火", "繩索", "冰塊", "漿果叢"
    ];
    this.synthesisBar = [
        {item:"工具", position:{x:1, y:4}},
        {item:"戰鬥", position:{x:1, y:5}},
        {item:"技能", position:{x:1, y:6}},
        {item:"生存", position:{x:1, y:7}},
        {item:"精煉", position:{x:1, y:8}}
    ];

    this.synthesisBarDetail = [
        [
            {item: 15, position: {x:2,y:1}},
            {item: 16, position: {x:2,y:2}},
            {item: 17, position: {x:2,y:3}},
            {item: 18, position: {x:2,y:4}},
            {item: 19, position: {x:2,y:5}},
            {item: 20, position: {x:2,y:6}},
            {item: 21, position: {x:2,y:7}}
        ],
        [
            {item: 22, position: {x:2,y:3}},
            {item: 23, position: {x:2,y:4}},
            {item: 24, position: {x:2,y:5}},
            {item: 25, position: {x:2,y:6}},
            {item: 26, position: {x:2,y:7}}
        ],
        [
            {item: 27, position: {x:2,y:5}},
            {item: 28, position: {x:2,y:6}},
            {item: 29, position: {x:2,y:7}},
            {item: 30, position: {x:2,y:8}}
        ],
        [
            {item: 31, position: {x:2,y:6}},
            {item: 32, position: {x:2,y:7}},
            {item: 33, position: {x:2,y:8}},
            {item: 34, position: {x:2,y:9}}
        ],
        [
            {item: 13, position: {x:2,y:8}},
            {item: 36, position: {x:2,y:9}}
        ]
    ];

    this.synthesisBarMaterial = [
        [
            [{item: 4,amount: 2,position:{x:3, y:1}},{item: 8,amount: 2,position:{x:3, y:2}},{item:"合成",position:{x:3,y:3}}],
            [{item: 4,amount: 1,position:{x:3, y:2}},{item: 8,amount: 1,position:{x:3, y:3}},{item:"合成",position:{x:3,y:4}}],
            [{item: 4,amount: 2,position:{x:3, y:3}},{item: 2,amount: 2,position:{x:3, y:4}},{item:"合成",position:{x:3,y:5}}],
            [{item: 4,amount: 2,position:{x:3, y:4}},{item: 8,amount: 2,position:{x:3, y:5}},{item:"合成",position:{x:3,y:6}}],
            [{item: 4,amount: 1,position:{x:3, y:5}},{item: 8,amount: 1,position:{x:3, y:6}},{item: 9,amount: 1,position:{x:3, y:7}},{item:"合成",position:{x:3,y:8}}],
            [{item: 4,amount: 2,position:{x:3, y:6}},{item: 8,amount: 2,position:{x:3, y:7}},{item: 9,amount: 1,position:{x:3, y:8}},{item:"合成",position:{x:3,y:9}}],
            [{item: 4,amount: 2,position:{x:3, y:7}},{item: 8,amount: 2,position:{x:3, y:8}},{item: 9,amount: 1,position:{x:3, y:9}},{item:"合成",position:{x:3,y:10}}]
        ],
        [
            [{item: 10,amount: 1,position:{x:3, y:3}},{item: 13,amount: 1,position:{x:3, y:4}},{item:"合成",position:{x:3,y:5}}],
            [{item: 6,amount: 10,position:{x:3, y:4}},{item: 4,amount: 2,position:{x:3, y:5}},{item:"合成",position:{x:3,y:6}}],
            [{item: 7,amount: 8,position:{x:3, y:5}},{item: 13,amount: 2,position:{x:3, y:6}},{item:"合成",position:{x:3,y:7}}],
            [{item: 4,amount: 2,position:{x:3, y:6}},{item: 8,amount: 1,position:{x:3, y:7}},{item: 13,amount: 1,position:{x:3, y:8}},{item:"合成",position:{x:3,y:9}}],
            [{item: 6,amount: 1,position:{x:3, y:7}},{item: 4,amount: 1,position:{x:3, y:8}},{item: 11,amount: 1,position:{x:3, y:9}},{item:"合成",position:{x:3,y:10}}]
        ],
        [
            [{item: 25,amount: 1,position:{x:3, y:5}},{item: 37,amount: 1,position:{x:3, y:6}},{item:"合成",position:{x:3,y:7}}],
            [{item: 5,amount: 1,position:{x:3, y:6}},{item: 29,amount: 1,position:{x:3, y:7}},{item: 30,amount: 1,position:{x:3, y:8}},{item: 14,amount: 1,position:{x:3, y:9}},{item:"合成",position:{x:3,y:10}}],
            [{item: 25,amount: 2,position:{x:3, y:7}},{item: 32,amount: 1,position:{x:3, y:8}},{item:"合成",position:{x:3,y:9}}],
            [{item: 25,amount: 2,position:{x:3, y:8}},{item: 36,amount: 2,position:{x:3, y:9}},{item:"合成",position:{x:3,y:10}}],
        ],
        [
            [{item: 4,amount: 2,position: {x:3,y:6}},{item: 9,amount: 2,position: {x:3,y:7}},{item: 8,amount: 1,position: {x:3,y:8}},{item: 13,amount: 2,position: {x:3,y:9}},{item:"合成",position:{x:3,y:10}}],
            [{item: 4,amount: 2,position: {x:3,y:7}},{item: 6,amount: 2,position: {x:3,y:8}},{item:"合成",position:{x:3,y:9}}],
            [{item: 2,amount: 6,position: {x:3,y:8}},{item: 13,amount: 3,position: {x:3,y:9}},{item: 4,amount: 4,position: {x:3,y:10}},{item:"合成",position:{x:3,y:11}}],
            [{item: 7,amount: 2,position: {x:3,y:9}},{item: 6,amount: 2,position: {x:3,y:10}},{item:"合成",position:{x:3,y:11}}]
        ],
        [
            [{item: 6,amount: 3,position: {x:3,y:8}},{item:"合成",position:{x:3,y:9}}],
            [{item: 12,amount: 3,position: {x:3,y:9}},{item:"合成",position:{x:3,y:10}}]
        ]
    ];

    this.positionChange = function(position){
        return {x:position.x*64,y:position.y*64};
    }

    this.draw = function(ctx){
        ctx.beginPath();
        ctx.rect(12, 23, 316-12, 777-23);
        ctx.fillStyle = "#BEBEBE";
        ctx.fill();

        // 第一層工具列
        for(var i = 0;i < this.synthesisBar.length; i++){
            this.backpack.position = this.positionChange(this.synthesisBar[i].position);
            this.backpack.draw(ctx);
            ctx.font = "15px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(this.synthesisBar[i].item, this.synthesisBar[i].position.x*64, this.synthesisBar[i].position.y*64);
        }

        //第二層工具列
        if(this.firstColumeIndex != -1){
            for(var i = 0;i < this.synthesisBarDetail[this.firstColumeIndex].length; i++){
                this.backpack.position = this.positionChange(this.synthesisBarDetail[this.firstColumeIndex][i].position);
                this.backpack.draw(ctx);
                ctx.font = "15px Arial";
                ctx.fillStyle = "black";
                var index = this.synthesisBarDetail[this.firstColumeIndex][i].item-1;
                ctx.fillText(this.itemNameArray[index], this.synthesisBarDetail[this.firstColumeIndex][i].position.x*64, this.synthesisBarDetail[this.firstColumeIndex][i].position.y*64);
            }
        }

        //第三層工具列
        if(this.secondColumnIndex != -1){
            for(var i = 0;i < this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length; i++){
                this.backpack.position = this.positionChange(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position);
                this.backpack.draw(ctx);
                ctx.font = "15px Arial";
                ctx.fillStyle = "black";
                var index = this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].item-1;
                if(i == this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length-1){
                    if(this.checkIfMaterialEnough())
                        ctx.fillText("合成",this.backpack.position.x, this.backpack.position.y);
                    else
                        ctx.fillText("沒材料拉幹",this.backpack.position.x, this.backpack.position.y);
                }else{
                    ctx.fillText(this.itemNameArray[index], this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x*64, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y*64-10);
                    ctx.fillText(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].amount.toString(), this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x*64, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y*64+15);
                }
            }
        }
        
    }

    this.updateChildBar = function(index){
        // this.drawChildBar = index;
        // console.log("drawChildBar",this.drawChildBar);
        this.currentPoint = index;

        if(this.currentPoint.x == 1 &&  this.currentPoint.y <= 8 &&  this.currentPoint.y >= 4){
            this.firstColumeIndex = this.currentPoint.y - 4;
            this.secondColumnRange = [];
            this.secondColumnIndex = -1;
            this.thirdColumnRange = [];
            for(var i = 0;i < this.synthesisBarDetail[this.firstColumeIndex].length;i++){
                this.secondColumnRange.push(this.synthesisBarDetail[this.firstColumeIndex][i].position);
            }
        }else if(this.currentPoint.x == 2 && this.checkSecondColumn() != -1){
            this.secondColumnIndex = this.checkSecondColumn();
            this.thirdColumnRange = [];
            for(var i = 0; i < this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length;i++){
                this.thirdColumnRange.push(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position);
            }
        }else if(this.currentPoint.x == 3 && this.checkThirdColumn()!=-1){
           
        }else{
            this.firstColumeIndex = -1;
            this.secondColumnIndex = -1;
            this.secondColumnRange = [];
            this.thirdColumnRange = [];
        }

    }


    this.checkSecondColumn = function(){
        for(var i = 0;i < this.secondColumnRange.length;i++){
            if(this.currentPoint.x == this.secondColumnRange[i].x && this.currentPoint.y == this.secondColumnRange[i].y)
                return i;
        }
        return -1;
    }

    this.checkThirdColumn = function(){
        for(var i = 0;i < this.thirdColumnRange.length;i++){
            if(this.currentPoint.x == this.thirdColumnRange[i].x && this.currentPoint.y == this.thirdColumnRange[i].y)
                return i;
        }
        return -1;
    }

    this.click = function(e){
        if(this.firstColumeIndex != -1 && this.secondColumnIndex != -1){
            var position = this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length-1].position;
            if(this.currentPoint.x == position.x && this.currentPoint.y == position.y){
                if(this.checkIfMaterialEnough()){
                    backpackList.addItem(this.synthesisBarDetail[this.firstColumeIndex][this.secondColumnIndex].item);
                    backpackList.update(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex]);
                }
            }
        }
    }

    this.checkIfMaterialEnough = function(){
        this.getBackpack = backpackList.getItemList();
        var material = this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex];
        var check = false;
        for(var i = 0;i < material.length-1;i++){
            check = false;
            for(var j = 0;j < this.getBackpack.length;j++){
                if(this.getBackpack[j].item == material[i].item && this.getBackpack[j].amount >= material[i].amount)
                    check = true;
            }
            if(!check)
                return false;
        }
        return true;
    }
};