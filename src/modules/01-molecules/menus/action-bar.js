import ToggleButton from '../../00-atoms/buttons/toggle-button';

var style = require('./action-bar.scss');

function createActionBarElements(toggleButtons){
	var toggleButtonElements = "";
	toggleButtons.forEach(function(toggleButton){
		toggleButtonElements += `${ToggleButton(toggleButton)}`;
	});
	return toggleButtonElements;
}

export default function(actionBar){
	var id    = actionBar.id    !== undefined ? actionBar.id    : '';
	var theme = actionBar.theme !== undefined ? actionBar.theme : '';
	
	var toggleButtonElements = '';
	if (actionBar.toggleButtons !== undefined) toggleButtonElements = createActionBarElements(actionBar.toggleButtons);

	var themeClass = style.listThemeDefault;
	if (theme == 'primary')	themeClass = style.listThemePrimary;
	if (theme == 'dark') 	themeClass = style.listThemeDark;

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
