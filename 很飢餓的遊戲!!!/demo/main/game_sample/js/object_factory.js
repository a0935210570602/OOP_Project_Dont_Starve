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
Object_factory.prototype.createMonster = function(map){
  var random = Math.floor(Math.random()*5);
  switch(random){
    case 0:
      this.objectClass = Monster_cute_little_eye;
      break;
    case 1:
      this.objectClass = Monster_pig;
      break;
    case 2:
      this.objectClass = Monster_cow;
      break;
    case 3:
      this.objectClass = Monster_bee;
      break;
    case 4:
      this.objectClass = Monster_bat;
      break;
    default:
      return;
  }  
  return new this.objectClass(map);
};