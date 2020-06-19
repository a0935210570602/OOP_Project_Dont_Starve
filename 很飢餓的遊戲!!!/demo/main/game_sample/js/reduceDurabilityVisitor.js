var ReduceDurabilityVisitor = function() {
    this.visitBasicTool = function(basicTool){
        basicTool.durability -= 10;
    }
    this.visitGoldenTool = function(goldenTool){
        goldenTool.durability -= 5;
    }
    this.visitFireBundle = function(fireBundle){
        if(fireBundle.inEquipmentbar){
            fireBundle.durability -= 1;
            setTimeout(()=>{
                fireBundle.reduceDurability(this);
            },1000);
        }
    }
    this.visitArror = function(arror){
        arror.durability -= 10;
    }
    this.visitSpear = function(arror){
        arror.durability -= 5;
    }
    this.visitWand = function(wand){
        wand.durability -= 20;
    }
};