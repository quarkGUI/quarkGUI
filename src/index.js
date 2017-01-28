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


import IndexPage from './modules/04-pages/index';

var app = document.getElementById('app');
app.innerHTML = IndexPage();





function initModuleTargetUrls(){
	var pageLinks = document.getElementsByClassName('loadPage') !== undefined ? document.getElementsByClassName('loadPage') : false;
	console.log("initModuleTargetUrls");
	if (pageLinks){
		for (var i = 0; i < pageLinks.length; i++) {
			pageLinks[i].addEventListener('click', (event) => {
				event.preventDefault();
				var targetPage = event.target.getAttribute('data-module-target');
				if (targetPage == null){
					targetPage = event.target.parentNode.getAttribute('data-module-target');
				}
				if (targetPage !== null){
					System.import('' + targetPage)
						.then(pageModule => {
							document.getElementById('mainContent').innerHTML = pageModule.default;
							// Create the event
							var event = new CustomEvent("module-lazy-loaded", { "detail": "One or more modules has been lazy loaded" });
							// Dispatch/Trigger/Fire the event
							document.dispatchEvent(event);
						})
				}
			});
		}
	}
}



// Add an event listener
/*document.addEventListener("module-lazy-loaded", function(e) {
  console.log(e.detail); // Prints "Example of an event"
  initModuleTargetUrls();
});

*/


document.addEventListener('DOMContentLoaded', function() {
	initModuleTargetUrls();

	var overlayElements = document.getElementsByClassName('overlay-element') !== undefined ? document.getElementsByClassName('overlay-element') : false;
	if (overlayElements){
		for (var i = 0; i < overlayElements.length; i++) {
			var overlayElement = overlayElements[i];

			document.onclick = function(event){
				for (var i = 0; i < overlayElements.length; i++) {
					overlayElements[i].classList.remove('active');
				}
				var thisNodeClassList = event.target.classList !== undefined ? event.target.classList : false;
				var parentNodeClassList = event.target.parentNode !== null && event.target.parentNode.classList !== undefined ? event.target.parentNode.classList : false;
				if (thisNodeClassList){
					thisNodeClassList.forEach(function (className){
						if (className == 'overlay-element') thisNodeClassList.add('active');
					});
				}
				if (parentNodeClassList){
					parentNodeClassList.forEach(function (className){
						if (className == 'overlay-element') parentNodeClassList.add('active');
					});
				}
			}
		}
	}
}, false);


if(DEVELOPMENT) {
	if(module.hot) {
		module.hot.accept();
	}
}

