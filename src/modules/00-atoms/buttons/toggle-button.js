var style = require('./toggle-button.scss');

export default function(button){

	var id 		    = button.id 		 !== undefined ? button.id          : '';
	var toggleType  = button.toggleType  !== undefined ? button.toggleType  : '';
	var title       = button.title 		 !== undefined ? button.title       : '';
	var targetClass	= button.targetClass !== undefined ? button.targetClass : false;
	var theme 		= button.theme 		 !== undefined ? button.theme       : '';
	var iconClass 	= button.iconClass   !== undefined ? button.iconClass   : '';

	var icon = (iconClass !== '') ? `<span class="${style.icon} ${iconClass}"></span>` : '';

	var themeClass = style.buttonThemeDefault
	if (theme == 'primary')	themeClass = style.buttonThemePrimary;
	if (theme == 'info') 	themeClass = style.buttonThemeInfo;
	if (theme == 'success')	themeClass = style.buttonThemeSuccess;
	if (theme == 'warning')	themeClass = style.buttonThemeWarning;
	if (theme == 'danger') 	themeClass = style.buttonThemeDanger;

	document.addEventListener("module-lazy-loaded", function(e) {
		var element = document.getElementById(id) !== undefined ? document.getElementById(id) : false;
		if (element){
			element.onclick = function(){
				var targetElements = targetClass ? document.getElementsByClassName(targetClass) : false;
				if (element.classList.contains('active')){
					element.classList.remove('active');
					if (targetElements){
						for (var i = 0; i < targetElements.length; i++) {
	    					targetElements[i].classList.remove('active');
						}
					}
				}else{
					element.classList.add('active');
					if (targetElements){
						for (var i = 0; i < targetElements.length; i++) {
	    					targetElements[i].classList.add('active');
						}
					}
				}
			};
		}
	}, false);

	return `
		<button id="${id}" 
				data-toggle-type="${toggleType}"
				title="${title}"
				value="${targetClass}"
				class="${style.button} ${themeClass}">
			${icon}
		</button>
	`
}