var FontFaceObserver = require('fontfaceobserver');
var fontObservers = []; 
var fontFamilies = { 
	'Lato': [ 
	{ weight: 'normal' }, 
	{ weight: 'bold' } 
	], 
	'FontAwesome': [ 
	{ weight: 'normal' } 
	] 
} 
Object.keys(fontFamilies).forEach(function(family) { 
	fontObservers.push(
		fontFamilies[family].map(function(config) {
			return new FontFaceObserver(family, config).load()
		})
	); 
}); 

Promise.all(fontObservers).then(function() { 
	document.documentElement.classList.add('webfont-loaded'); 
}, function() { 
	console.info('Web fonts could not be loaded in time. Falling back to system fonts.'); 
});



import TestPage from './modules/04-pages/test-page';

var app = document.getElementById('app');
app.innerHTML = TestPage();

if(DEVELOPMENT) {
	if(module.hot) {
		module.hot.accept();
	}
}

