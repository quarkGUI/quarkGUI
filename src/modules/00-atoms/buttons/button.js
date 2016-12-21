var style = require('./button.scss');

export default function(button){

	var id 			= button.id 		!== undefined ? button.id 			: '';
	var type		= button.type 		!== undefined ? button.type 		: '';
	var theme		= button.theme 		!== undefined ? button.theme 		: '';
	var content		= button.content 	!== undefined ? button.content		: '';
	var iconClass	= button.iconClass	!== undefined ? button.iconClass	: '';

	var icon = (iconClass !== '') ? `<span class="${iconClass}"></span>` : '';

	var typeClass = style.buttonTypeFlat;
	if (type == 'raised') 	typeClass = style.buttonTypeRaised;

	var themeClass = style.buttonThemeDefault
	if (theme == 'primary')	themeClass = style.buttonThemePrimary;
	if (theme == 'info') 	themeClass = style.buttonThemeInfo;
	if (theme == 'success')	themeClass = style.buttonThemeSuccess;
	if (theme == 'warning')	themeClass = style.buttonThemeWarning;
	if (theme == 'danger') 	themeClass = style.buttonThemeDanger;


	return `
		<a id="${id}" class="${style.button} ${typeClass} ${themeClass}">${icon} ${content}</a>
	`

}