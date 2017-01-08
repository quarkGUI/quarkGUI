var style = require('./action-button.scss');

export default function(button){

	var id 			= button.id 		!== undefined ? button.id 			: '';
	var theme		= button.theme 		!== undefined ? button.theme 		: '';
	var iconClass	= button.iconClass	!== undefined ? button.iconClass	: '';

	var icon = (iconClass !== '') ? `<span class="${style.icon} ${iconClass}"></span>` : '';

	var themeClass = style.buttonThemeDefault
	if (theme == 'primary')	themeClass = style.buttonThemePrimary;
	if (theme == 'info') 	themeClass = style.buttonThemeInfo;
	if (theme == 'success')	themeClass = style.buttonThemeSuccess;
	if (theme == 'warning')	themeClass = style.buttonThemeWarning;
	if (theme == 'danger') 	themeClass = style.buttonThemeDanger;

	document.addEventListener('DOMContentLoaded', function() {
		var element = document.getElementById(id) !== undefined ? document.getElementById(id) : false;
		if (element){
			element.onclick = function(){
				if (element.classList.contains('active')){
					element.classList.remove("active");
					document.body.classList.remove('action-menu-active');
				}else{
					element.classList.add("active");
					document.body.classList.add('action-menu-active');
				}
			};
		}
	}, false);

	return `
	<div id="${id}" class="${style.button} ${themeClass}">${icon}</div>
	`
}