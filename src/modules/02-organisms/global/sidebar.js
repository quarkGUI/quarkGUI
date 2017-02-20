import SidebarNavigation from '../../01-molecules/navigation/sidebar-navigation';
import Image from '../../00-atoms/media/image';

var style = require('./sidebar.scss');

export default function(sidebarItems){

	var logoUrl = sidebarItems.logo.url !== undefined ? sidebarItems.logo.url	: '';
	var sidebarNavigationObj = sidebarItems.sidebarNavigation !== undefined ? sidebarItems.sidebarNavigation : {};
	
	var logoImage = '';
	if (sidebarItems.logo.image !== undefined) logoImage = Image.getModule(sidebarItems.logo.image);

	var sidebarNavigation = {};
	if (sidebarItems.sidebarNavigation !== undefined) sidebarNavigation = SidebarNavigation(sidebarItems.sidebarNavigation);

	return `
		<aside class="${style.sidebar}">
			<div class="${style.sidebarOverlay}"></div>
			<div class="${style.sidebarContent}">
				${sidebarNavigation}
			</div>
		</aside>
	`
	
}