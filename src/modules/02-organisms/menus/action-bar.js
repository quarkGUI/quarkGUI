import ActionButton from '../../00-atoms/buttons/action-button';
import ActionBarMenu from '../../01-molecules/menus/action-bar-menu';

export default function(actionBar){
	var theme = actionBar.theme !== undefined ? actionBar.theme	: 'default';

	if (actionBar.actionButton !== undefined) actionBar.actionButton.theme = theme;
	if (actionBar.actionBarMenu !== undefined) actionBar.actionBarMenu.theme = theme;

	var actionButtonElement  = actionBar.actionButton  !== undefined ? ActionButton(actionBar.actionButton)    : '';
	var actionBarMenuElement = actionBar.actionBarMenu !== undefined ? ActionBarMenu(actionBar.actionBarMenu) : '';
	

	return `
		${actionButtonElement}
		${actionBarMenuElement}
	`
}
