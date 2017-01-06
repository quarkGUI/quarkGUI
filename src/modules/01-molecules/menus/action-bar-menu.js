import ToggleButton from '../../00-atoms/buttons/toggle-button';

var style = require('./action-bar-menu.scss');

function createActionBarElements(toggleButtons){
	var toggleButtonElements = "";
	toggleButtons.forEach(function(toggleButton){
		toggleButtonElements += `${ToggleButton(toggleButton)}`;
	});
	return toggleButtonElements;
}

export default function(actionBarMenu){
	var id    = actionBarMenu.id    !== undefined ? actionBarMenu.id    : '';
	var theme = actionBarMenu.theme !== undefined ? actionBarMenu.theme : '';
	
	var toggleButtonElements = '';
	if (actionBarMenu.toggleButtons !== undefined) toggleButtonElements = createActionBarElements(actionBarMenu.toggleButtons);

	var themeClass = style.actionBarThemeDefault
	if (theme == 'primary')	themeClass = style.actionBarThemePrimary;
	if (theme == 'info') 	themeClass = style.actionBarThemeInfo;
	if (theme == 'success')	themeClass = style.actionBarThemeSuccess;
	if (theme == 'warning')	themeClass = style.actionBarThemeWarning;
	if (theme == 'danger') 	themeClass = style.actionBarThemeDanger;


	return `
		<ul id="${id}" class="${style.actionBar} ${themeClass}">
			${toggleButtonElements}
		</ul>
	`

}
