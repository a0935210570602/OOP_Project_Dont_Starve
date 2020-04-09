//立即執行函式, 並封裝所有變數避免衝突
var loadGameEnd;
(function(){
    //動態依序載入JS
    //ref: http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/01/15/4061.aspx
    var  importJS = function(jsConf, src, lookFor) {
        var headID = document.getElementsByTagName("head")[0]; 
        var newJs = document.createElement('script');
        newJs.type = 'text/javascript';
        newJs.src= jsConf[0].src;
        headID.appendChild(newJs);
        wait_for_script_load(jsConf, function() {
            jsConf.splice(0, 1);
            if(jsConf.length > 0) {
                importJS(jsConf, lookFor);

				if(typeof blanket != "undefined"){
					blanket.utils.cache[jsConf[0].src] = {};
					blanket.utils.attachScript({url: jsConf[0].src}, function (content) {
						blanket.instrument({inputFile: content, inputFileName: jsConf[0].src},function (instrumented) {
							blanket.utils.cache[jsConf[0].src].loaded = true;
							blanket.utils.blanketEval(instrumented);
							blanket.requiringFile(jsConf[0].src, true);
						});
					});	
				}
            }else
            {
                loadGameEnd = true;
            }
        });
    }

    var wait_for_script_load = function(jsConf, callback) {
        var interval = setInterval(function() {
            if (typeof jsConf[0].lookFor === 'undefined') {
                jsConf[0].lookFor = '';
            }

            if (jsConf[0].lookFor === '') {
                clearInterval(interval);
                callback();
            } else if (eval("typeof " + jsConf[0].lookFor) !== 'undefined') {
                    clearInterval(interval);
                    callback();      
                }
            }, 50);
    }

    //陣列和載入JS檔的順序相同, lookFor為在要載入的檔案中, 
    //有用到的全域變數, importJS這個function, 會在找到lookFor的變數後
    //才會繼續loading下一個檔案, 如果沒有需要lookFor, 則以空字串代表
    var listScript = 
    [
        { src: 'game_sample/js/define.js', lookFor: 'define' },
        { src: 'game_sample/js/myMenu.js', lookFor: 'MyMenu' },
        { src: 'game_sample/js/myMenu_tutorial.js', lookFor: 'MyMenu_tutorial' },
        { src: 'game_sample/js/myMenu_gameteam.js', lookFor: 'MyMenu_gameteam' },
        { src: 'game_sample/js/constants.js', lookFor: 'Constants' },
        { src: 'game_sample/js/score.js', lookFor: 'Score' },
        { src: 'game_sample/js/bombMan.js', lookFor: 'BombMan' },
        { src: 'game_sample/js/monster.js', lookFor: 'Monster' },
        { src: 'game_sample/js/item_grass.js', lookFor: 'Item_grass' },
        { src: 'game_sample/js/item_grass_picked.js', lookFor: 'Item_grass_picked' },

        { src: 'game_sample/js/item_rope.js', lookFor: 'Item_rope' },
        { src: 'game_sample/js/item_stone.js', lookFor: 'Item_stone' },
        { src: 'game_sample/js/item_droplet.js', lookFor: 'Item_droplet' },
        { src: 'game_sample/js/item_gold_ax.js', lookFor: 'Item_gold_ax' },
        { src: 'game_sample/js/item_bee_sting.js', lookFor: 'Item_bee_sting' },
        { src: 'game_sample/js/item_pixilart.js', lookFor: 'Item_pixilart' },
        { src: 'game_sample/js/item_lamp.js', lookFor: 'Item_lamp' },
        { src: 'game_sample/js/item_ax.js', lookFor: 'Item_ax' },
        { src: 'game_sample/js/item_gold_pixilart.js', lookFor: 'Item_gold_pixilart' },
        { src: 'game_sample/js/item_gold.js', lookFor: 'Item_gold' },
        { src: 'game_sample/js/item_bush.js', lookFor: 'Item_bush' },
        { src: 'game_sample/js/item_ice.js', lookFor: 'Item_ice' },
        
        { src: 'game_sample/js/item_arror.js', lookFor: 'Item_arror' },
        { src: 'game_sample/js/item_shovel.js', lookFor: 'Item_shovel' },
        { src: 'game_sample/js/item_armor.js', lookFor: 'Item_armor' },
        { src: 'game_sample/js/item_spear.js', lookFor: 'Item_spear' },

        { src: 'game_sample/js/item_wood_armor.js', lookFor: 'Item_wood_armor' },
        { src: 'game_sample/js/item_helmat.js', lookFor: 'Item_helmat' },
        { src: 'game_sample/js/item_flint.js', lookFor: 'Item_flint' },
        { src: 'game_sample/js/item_pigskin.js', lookFor: 'Item_pigskin' },
        { src: 'game_sample/js/item_fishing_rod.js', lookFor: 'Item_fishing_rod' },
        { src: 'game_sample/js/item_gold_shovel.js', lookFor: 'Item_gold_shovel' },
        { src: 'game_sample/js/item_snow_ball.js', lookFor: 'Item_snow_ball' },
        { src: 'game_sample/js/item_space_wand.js', lookFor: 'Item_space_wand' },
        { src: 'game_sample/js/item_ice_wand.js', lookFor: 'Item_ice_wand' },
        { src: 'game_sample/js/item_fire_wand.js', lookFor: 'Item_fire_wand' },
        { src: 'game_sample/js/item_king_wand.js', lookFor: 'Item_king_wand' },
        { src: 'game_sample/js/item_wood.js', lookFor: 'Item_wood' },
        { src: 'game_sample/js/item_campfire.js', lookFor: 'Item_campfire' },
        { src: 'game_sample/js/item_camp.js', lookFor: 'Item_camp' },
        { src: 'game_sample/js/item_firebundle.js', lookFor: 'Item_firebundle' },

        { src: 'game_sample/js/item_flower.js', lookFor: 'Item_flower' },
        { src: 'game_sample/js/item_flower_picked.js', lookFor: 'Item_flower_picked' },

        { src: 'game_sample/js/item_waikei_homework.js', lookFor: 'Item_waikei_homework' },
        { src: 'game_sample/js/item_spider_web.js', lookFor: 'Item_spider_web' },
        { src: 'game_sample/js/final_Monster.js', lookFor: 'Final_Monster' },
        { src: 'game_sample/js/item_blank.js', lookFor: 'Item_blank' },
        { src: 'game_sample/js/synthesisBar.js', lookFor: 'SynthesisBar' },
        { src: 'game_sample/js/equipmentBar.js', lookFor: 'EquipmentBar' },
        { src: 'game_sample/js/explore.js', lookFor: 'Explore' },
        { src: 'game_sample/js/bomb.js', lookFor: 'Bomb' },
        { src: 'game_sample/js/box.js', lookFor: 'Box' },
        { src: 'game_sample/js/characterStatus.js', lookFor: 'CharacterStatus' },
        { src: 'game_sample/js/mapTile.js', lookFor: 'MapTile' },
        { src: 'game_sample/js/clock.js', lookFor: 'Clock' },
        { src: 'game_sample/js/world_map.js', lookFor: 'World_map' },
        { src: 'game_sample/js/item_branch.js', lookFor: 'Item_branch' },
        { src: 'game_sample/js/backpack.js', lookFor: 'Backpack' },
        { src: 'game_sample/js/myGameLevel1.js', lookFor: 'MyGame' },
        { src: 'game_sample/js/level2.js', lookFor: 'Level2' },
        { src: 'game_sample/js/level2_change.js', lookFor: 'Level2_change' },
        { src: 'game_sample/js/map_1.js', lookFor: 'Map_1' },

        { src: 'game_sample/js/gameOver.js', lookFor: 'GameOver' },
        { src: 'game_sample/js/mainGame.js'}
    ]
    importJS(listScript);
    
})();


    
