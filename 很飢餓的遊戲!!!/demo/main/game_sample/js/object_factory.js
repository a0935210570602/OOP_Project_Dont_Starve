var Object_factory = function() {};
Object_factory.prototype.objectClass = null;
Object_factory.prototype.createObject = function(options){
  if(options.type == "Tool")
    this.objectClass = Tool;
  else if(options.type == "Weapon")
    this.objectClass = Weapon;
  else
    return;
    
  return new this.objectClass(options);
};