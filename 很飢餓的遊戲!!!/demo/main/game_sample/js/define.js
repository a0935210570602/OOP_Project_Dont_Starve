(function(window){	
	var define ={}, mainPath = 'game_sample/';
	Object.defineProperties(define, {
		'mainPath': {
			value: mainPath,
			writable: false
		},
		'jsPath': {
			value: mainPath + 'js/',
			writable: false
		},
		'musicPath': {
			value: mainPath + 'music/',
			writable: false
		},
		'imagePath': {
			value: mainPath + 'image/',
			writable: true
		},
		'builldingPath': {
			value: mainPath + 'building/',
			writable: true
		},
		'materialPath': {
			value: mainPath + 'material/',
			writable: true
		},
		'welcomimgPath': {
			value: mainPath + 'welcoming_page_pixel/',
			writable: true
		},
		'imageMorningPath': {
			value: mainPath + 'image_morning/',
			writable: true
		},
		'imageAfternoonPath': {
			value: mainPath + 'image_afternoon/',
			writable: true
		},
		'imageNightPath': {
			value: mainPath + 'image_night/',
			writable: true
		},
		'skillAnimationPath': {
			value: mainPath + 'skill_animation/',
			writable: true
		},
		'characterDescriptionPath': {
			value: mainPath + 'character_description/',
			writable: true
		},
		'npcPath': {
			value: mainPath + 'npc/',
			writable: true
		}
	});
	window.define = define;
})(window)