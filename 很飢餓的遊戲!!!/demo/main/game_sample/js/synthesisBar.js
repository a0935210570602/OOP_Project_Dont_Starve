var SynthesisBar = function() {
    this.backpack = new Framework.Sprite(define.materialPath + 'backpack.png'); 
    this.backpack.scale = 2;
    this.backpack.position = {x:0,y:0};

    this.secondColumnRange = [];
    this.thirdColumnRange = [];
    this.firstColumeIndex = -1;
    this.secondColumnIndex = -1;

    this.synthesisBar = [
        {picture:"工具", position:{x:1, y:4}},
        {picture:"戰鬥", position:{x:1, y:5}},
        {picture:"技能", position:{x:1, y:6}},
        {picture:"生存", position:{x:1, y:7}},
        {picture:"精煉", position:{x:1, y:8}}
    ];

    this.synthesisBarMaterial = [];
    this.synthesisBarMaterial.push(
        [
            [{item: "樹枝",amount: 2,position:{x:3, y:1}},{item: "燧石",amount: 2,position:{x:3, y:2}}],
            [{item: "樹枝",amount: 1,position:{x:3, y:2}},{item: "燧石",amount: 1,position:{x:3, y:3}}],
            [{item: "樹枝",amount: 2,position:{x:3, y:3}},{item: "蜘蛛網",amount: 2,position:{x:3, y:4}}],
            [{item: "樹枝",amount: 2,position:{x:3, y:4}},{item: "燧石",amount: 2,position:{x:3, y:5}}],
            [{item: "樹枝",amount: 1,position:{x:3, y:5}},{item: "燧石",amount: 1,position:{x:3, y:6}},{item: "黃金",amount: 1,position:{x:3, y:7}}],
            [{item: "樹枝",amount: 2,position:{x:3, y:6}},{item: "燧石",amount: 2,position:{x:3, y:7}},{item: "黃金",amount: 1,position:{x:3, y:8}}],
            [{item: "樹枝",amount: 2,position:{x:3, y:7}},{item: "燧石",amount: 2,position:{x:3, y:8}},{item: "黃金",amount: 1,position:{x:3, y:9}}]
        ]
    );
    this.synthesisBarMaterial.push(
        [
            [{item: "豬皮",amount: 1,position:{x:3, y:3}},{item: "繩索",amount: 1,position:{x:3, y:4}}],
            [{item: "草",amount: 10,position:{x:3, y:4}},{item: "樹枝",amount: 2,position:{x:3, y:5}}],
            [{item: "木頭",amount: 8,position:{x:3, y:5}},{item: "繩索",amount: 2,position:{x:3, y:6}}],
            [{item: "樹枝",amount: 2,position:{x:3, y:6}},{item: "燧石",amount: 1,position:{x:3, y:7}},{item: "繩索",amount: 1,position:{x:3, y:8}}],
            [{item: "草",amount: 1,position:{x:3, y:7}},{item: "樹枝",amount: 1,position:{x:3, y:8}},{item: "蜂刺",amount: 1,position:{x:3, y:9}}]
        ]
    );
    this.synthesisBarMaterial.push(
        [
            [{item: "長矛",amount: 1,position:{x:3, y:5}},{item: "漿果叢",amount: 1,position:{x:3, y:6}}],
            [{item: "新手教學手冊",amount: 1,position:{x:3, y:6}},{item: "火法杖",amount: 1,position:{x:3, y:7}},{item: "冰法杖",amount: 1,position:{x:3, y:8}},{item: "露水",amount: 1,position:{x:3, y:9}}],
            [{item: "長矛",amount: 2,position:{x:3, y:7}},{item: "火把",amount: 1,position:{x:3, y:8}}],
            [{item: "長矛",amount: 2,position:{x:3, y:8}},{item: "冰塊",amount: 2,position:{x:3, y:9}}],
        ]
    );
    this.synthesisBarMaterial.push(
        [
            [{item: "樹枝",amount: 2,position: {x:3,y:6}},{item: "黃金",amount: 2,position: {x:3,y:7}},{item: "燧石",amount: 1,position: {x:3,y:8}},{item: "繩索",amount: 2,position: {x:3,y:9}}],
            [{item: "樹枝",amount: 2,position: {x:3,y:7}},{item: "草",amount: 2,position: {x:3,y:8}}],
            [{item: "蜘蛛網",amount: 6,position: {x:3,y:8}},{item: "繩索",amount: 3,position: {x:3,y:9}},{item: "樹枝",amount: 4,position: {x:3,y:10}}],
            [{item: "木頭",amount: 2,position: {x:3,y:9}},{item: "草",amount: 2,position: {x:3,y:10}}]
        ]
    );
    this.synthesisBarMaterial.push(
        [
            [{item: "草",amount: 3,position: {x:3,y:8}}],
            [{item: "雪球",amount: 3,position: {x:3,y:9}}]
        ]
    );

    this.synthesisBarDetail = [
        [
            {picture: "十字鎬", position: {x:2,y:1}},
            {picture: "斧頭", position: {x:2,y:2}},
            {picture: "釣魚竿", position: {x:2,y:3}},
            {picture: "鏟子", position: {x:2,y:4}},
            {picture: "黃金斧頭", position: {x:2,y:5}},
            {picture: "黃金鏟子", position: {x:2,y:6}},
            {picture: "黃金十字鎬", position: {x:2,y:7}}
        ],
        [
            {picture: "頭盔", position: {x:2,y:3}},
            {picture: "草製盔甲", position: {x:2,y:4}},
            {picture: "木製盔甲", position: {x:2,y:5}},
            {picture: "長矛", position: {x:2,y:6}},
            {picture: "吹箭", position: {x:2,y:7}}
        ],
        [
            {picture: "國王法杖", position: {x:2,y:5}},
            {picture: "空間法杖", position: {x:2,y:6}},
            {picture: "火法杖", position: {x:2,y:7}},
            {picture: "冰法杖", position: {x:2,y:8}}
        ],
        [
            {picture: "黃金提燈", position: {x:2,y:6}},
            {picture: "火把", position: {x:2,y:7}},
            {picture: "帳篷", position: {x:2,y:8}},
            {picture: "篝火", position: {x:2,y:9}}
        ],
        [
            {picture: "繩索", position: {x:2,y:8}},
            {picture: "冰塊", position: {x:2,y:9}}
        ]
    ];

    this.currentPoint = {x:-1,y:-1};

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
            ctx.fillText(this.synthesisBar[i].picture, this.synthesisBar[i].position.x*64, this.synthesisBar[i].position.y*64);
        }

        //第二層工具列
        if(this.firstColumeIndex != -1){
            for(var i = 0;i < this.synthesisBarDetail[this.firstColumeIndex].length; i++){
                this.backpack.position = this.positionChange(this.synthesisBarDetail[this.firstColumeIndex][i].position);
                this.backpack.draw(ctx);
                ctx.font = "15px Arial";
                ctx.fillStyle = "black";
                ctx.fillText(this.synthesisBarDetail[this.firstColumeIndex][i].picture, this.synthesisBarDetail[this.firstColumeIndex][i].position.x*64, this.synthesisBarDetail[this.firstColumeIndex][i].position.y*64);
            }
        }

        //第三層工具列
        if(this.secondColumnIndex != -1){
            for(var i = 0;i < this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length; i++){
                this.backpack.position = this.positionChange(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position);
                this.backpack.draw(ctx);
                ctx.font = "15px Arial";
                ctx.fillStyle = "black";
                ctx.fillText(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].item, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x*64, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y*64-10);
                ctx.fillText(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].amount.toString(), this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x*64, this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y*64+15);
                if(i == this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length-1){
                    this.backpack.position.x = (this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.x)*64;
                    this.backpack.position.y = (this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position.y+1)*64;
                    this.backpack.draw(ctx);
                    ctx.font = "15px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText("合成",this.backpack.position.x, this.backpack.position.y);
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
        }else if(this.currentPoint.x == 2){
            if(this.checkSecondColumn() != -1){
                this.secondColumnIndex = this.checkSecondColumn();
                this.thirdColumnRange = [];
                for(var i = 0; i < this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex].length;i++){
                    this.thirdColumnRange.push(this.synthesisBarMaterial[this.firstColumeIndex][this.secondColumnIndex][i].position);
                }
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
};