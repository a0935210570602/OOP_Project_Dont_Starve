var SynthesisBar = function(backpackList) {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;
    this.backpack.position = {x:0,y:0};
    this.currentPoint = {x:-1,y:-1};

    this.secondColumnRange = [];
    this.thirdColumnRange = [];
    this.firstColumeIndex = -1;
    this.secondColumnIndex = -1;
    this.item_branch = new Framework.Sprite(define.materialPath + 'item_branch.png');
    this.item_branch.scale = 2;

    this.item_droplet = new Framework.Sprite(define.materialPath + 'item_droplet.png');
    this.item_droplet.scale = 2;

    this.item_pixilart = new Framework.Sprite(define.materialPath + 'item_pixilart.png');
    this.item_pixilart.scale = 2;

    this.item_gold_pixilart = new Framework.Sprite(define.materialPath + 'item_gold_pixilart.png');
    this.item_gold_pixilart.scale = 2;

    this.item_space_wand = new Framework.Sprite(define.materialPath + 'item_space_wand.png');
    this.item_space_wand.scale = 2;
    
    this.item_fire_wand = new Framework.Sprite(define.materialPath + 'item_fire_wand.png');
    this.item_fire_wand.scale = 2;

    this.item_king_wand = new Framework.Sprite(define.materialPath + 'item_king_wand.png');
    this.item_king_wand.scale = 2;

    this.item_ice_wand = new Framework.Sprite(define.materialPath + 'item_ice_wand.png');
    this.item_ice_wand.scale = 2;

    this.item_gold = new Framework.Sprite(define.materialPath + 'item_gold.png');
    this.item_gold.scale = 2;

    this.item_ax = new Framework.Sprite(define.materialPath + 'item_ax.png');
    this.item_ax.scale = 2;

    this.item_gold_ax = new Framework.Sprite(define.materialPath + 'item_gold_ax.png');
    this.item_gold_ax.scale = 2;

    this.item_rope = new Framework.Sprite(define.materialPath + 'item_rope.png');
    this.item_rope.scale = 2;

    this.item_camp = new Framework.Sprite(define.materialPath + 'item_camp.png');
    this.item_camp.scale = 2;

    this.item_campfire = new Framework.Sprite(define.materialPath + 'item_campfire.png');
    this.item_campfire.scale = 2;

    this.item_wood = new Framework.Sprite(define.materialPath + 'item_wood.png');
    this.item_wood.scale = 2;

    this.item_firebundle = new Framework.Sprite(define.materialPath + 'item_firebundle.png');
    this.item_firebundle.scale = 1.5;

    this.item_spider_web = new Framework.Sprite(define.materialPath + 'item_spider_web.png'); 
    this.item_spider_web.scale = 2;

    this.item_grass = new Framework.Sprite(define.materialPath + 'item_grass.png');
    this.item_grass.scale = 2;

    this.item_grass_mowed = new Framework.Sprite(define.materialPath + 'item_grass_mowed.png'); 
    this.item_grass_mowed.scale = 2;
    
    this.item_flower = new Framework.Sprite(define.materialPath + 'item_flower.png'); 
    this.item_flower.scale = 2;

    this.item_stone = new Framework.Sprite(define.materialPath + 'item_stone.png');
    this.item_stone.scale = 2;

    this.item_waikei_homework = new Framework.Sprite(define.materialPath + 'item_waikei_homework.png');
    this.item_waikei_homework.scale = 2;
    // this.getBackpack;

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
            {item: 35, position: {x:2,y:9}}
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
            [{item: 25,amount: 1,position:{x:3, y:5}},{item: 36,amount: 1,position:{x:3, y:6}},{item:"合成",position:{x:3,y:7}}],
            [{item: 5,amount: 1,position:{x:3, y:6}},{item: 29,amount: 1,position:{x:3, y:7}},{item: 30,amount: 1,position:{x:3, y:8}},{item: 14,amount: 1,position:{x:3, y:9}},{item:"合成",position:{x:3,y:10}}],
            [{item: 25,amount: 2,position:{x:3, y:7}},{item: 32,amount: 1,position:{x:3, y:8}},{item:"合成",position:{x:3,y:9}}],
            [{item: 25,amount: 2,position:{x:3, y:8}},{item: 35,amount: 2,position:{x:3, y:9}},{item:"合成",position:{x:3,y:10}}],
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
                this.drawPicture(this.synthesisBarDetail[this.firstColumeIndex][i],ctx);
                // ctx.fillText(this.itemNameArray[index], this.synthesisBarDetail[this.firstColumeIndex][i].position.x*64, this.synthesisBarDetail[this.firstColumeIndex][i].position.y*64);
                
            }
        }

        //第三層工具列
        if(this.firstColumnIndex != -1 && this.secondColumnIndex != -1){
            for(var i = 0;i < this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length; i++){
                this.backpack.position = this.positionChange(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position);
                this.backpack.draw(ctx);
                ctx.font = "15px Arial";
                ctx.fillStyle = "black";
                // var index = this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].item-1;
                var check = backpackList.checkIfSynthesisAvailable(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex], this.synthesisBarDetail[this.firstColumeIndex][this.secondColumnIndex].item);
                if(i == this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length-1){
                    if(check == 1)
                        ctx.fillText("合成",this.backpack.position.x, this.backpack.position.y);
                    else if(check == -1)
                        ctx.fillText("沒空間拉幹",this.backpack.position.x, this.backpack.position.y);
                    else
                        ctx.fillText("沒材料拉幹",this.backpack.position.x, this.backpack.position.y);
                }else{
                    // ctx.fillText(this.itemNameArray[index], this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x*64, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y*64-10);
                    this.drawPicture(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i],ctx);
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                    ctx.fillText(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].amount.toString(), this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x*64, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y*64+15);
                    ctx.strokeStyle = 'blue';
                    ctx.lineWidth = 2.5;
                    // ctx.strokeText(this.itemList[i].amount.toString(), this.backpackPosition[i].x, this.backpackPosition[i].y+20);
                    ctx.strokeText(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].amount.toString(), this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x*64, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y*64+15);
                
                }
            }
        }
        
    }

    this.drawPicture = function(item_to_draw,ctx){
        switch(item_to_draw.item){
            case 1:
                this.item_flower.position = this.positionChange(item_to_draw.position);
                this.item_flower.draw(ctx);
                break;
            case 2:
                this.item_spider_web.position = this.positionChange(item_to_draw.position);
                this.item_spider_web.draw(ctx);
                break;
            case 3:
                this.item_stone.position = this.positionChange(item_to_draw.position);
                this.item_stone.draw(ctx);
                break;
            case 4:
                this.item_branch.position = this.positionChange(item_to_draw.position);
                this.item_branch.draw(ctx);
                break;
            case 5:
                this.item_waikei_homework.position = this.positionChange(item_to_draw.position);
                this.item_waikei_homework.draw(ctx);
                break;
            case 6:
                this.item_grass.position = this.positionChange(item_to_draw.position);
                this.item_grass.draw(ctx);
                break;
            case 7:
                this.item_wood.position = this.positionChange(item_to_draw.position);
                this.item_wood.draw(ctx);
                break;
            case 9:
                this.item_gold.position = this.positionChange(item_to_draw.position);
                this.item_gold.draw(ctx);
                break;
            case 13:
                this.item_rope.position = this.positionChange(item_to_draw.position);
                this.item_rope.draw(ctx);
                break;
            case 14:
                this.item_droplet.position = this.positionChange(item_to_draw.position);
                this.item_droplet.draw(ctx);
                break;
            case 15:
                this.item_pixilart.position = this.positionChange(item_to_draw.position);
                this.item_pixilart.draw(ctx);
                break;
            case 16:
                this.item_ax.position = this.positionChange(item_to_draw.position);
                this.item_ax.draw(ctx);
                break;
            case 19:
                this.item_gold_ax.position = this.positionChange(item_to_draw.position);
                this.item_gold_ax.draw(ctx);
                break;
            case 21:
                this.item_gold_pixilart.position = this.positionChange(item_to_draw.position);
                this.item_gold_pixilart.draw(ctx);
                break;
            case 27:
                this.item_king_wand.position = this.positionChange(item_to_draw.position);
                this.item_king_wand.draw(ctx);
                break;
            case 28:
                this.item_space_wand.position = this.positionChange(item_to_draw.position);
                this.item_space_wand.draw(ctx);
                break;
            case 29:
                this.item_fire_wand.position = this.positionChange(item_to_draw.position);
                this.item_fire_wand.draw(ctx);
                break;
            case 30:
                this.item_ice_wand.position = this.positionChange(item_to_draw.position);
                this.item_ice_wand.draw(ctx);
                break;
            case 32:
                this.item_firebundle.position = this.positionChange(item_to_draw.position);
                this.item_firebundle.draw(ctx);
                break;
            case 33:
                this.item_camp.position = this.positionChange(item_to_draw.position);
                this.item_camp.draw(ctx);
                break;
            case 34:
                this.item_campfire.position = this.positionChange(item_to_draw.position);
                this.item_campfire.draw(ctx);
                break;
            default:
                ctx.font = "20px Arial";
                ctx.fillStyle = "black";
                ctx.fillText(this.itemNameArray[item_to_draw.item-1], this.positionChange(item_to_draw.position).x, this.positionChange(item_to_draw.position).y);
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
                if(backpackList.checkIfSynthesisAvailable(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex], this.synthesisBarDetail[this.firstColumeIndex][this.secondColumnIndex].item)){
                    backpackList.addItem(this.synthesisBarDetail[this.firstColumeIndex][this.secondColumnIndex].item);
                    backpackList.update(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex]);
                }
            }
        }
    }
};