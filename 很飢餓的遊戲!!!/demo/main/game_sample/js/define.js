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
		'materialPath': {
			value: mainPath + 'material/',
			writable: true
		},
		'welcomimgPath': {
			value: mainPath + 'welcoming_page_pixel/',
			writable: true
		}

	});

	window.define = define;
})(window)