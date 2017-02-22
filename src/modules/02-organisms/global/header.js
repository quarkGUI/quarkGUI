import * as PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import * as Image from '../../00-atoms/media/image';
import * as Sidebar from './sidebar';

var style = require('./header.scss');

export default function(headerItems){

	var id            = headerItems.id              !== undefined ? headerItems.id              : '';
	var theme         = headerItems.theme           !== undefined ? headerItems.theme	        : '';
	var logoUrl       = headerItems.logo.link       !== undefined ? headerItems.logo.link	    : false;
	var logoId        = headerItems.logo.id         !== undefined ? headerItems.logo.id         : '';
	var primaryNavigationObj = headerItems.primaryNavigation !== undefined ? headerItems.primaryNavigation : {};
	
	primaryNavigationObj.id = id + '-primary-navigation';

	var logoUrlAttribute = logoUrl ? `href="${logoUrl}"` : '';

	var logoImage = '';
	if (headerItems.logo.image !== undefined) logoImage = Image.getModule(headerItems.logo.image);

	var themeClass = style.headerThemeDefault;
	if (theme == 'primary'){
		primaryNavigationObj.theme = theme;
		themeClass = style.headerThemePrimary;
	}
	if (theme == 'dark'){
		primaryNavigationObj.theme = theme;
		themeClass = style.headerThemeDark;
	}

	var primaryNavigation = {};
	if (headerItems.primaryNavigation !== undefined) primaryNavigation = PrimaryNavigation.getModule(headerItems.primaryNavigation);


	document.addEventListener('DOMContentLoaded', function() {
		var sidebarToggleElement = document.getElementById('sidebarToggle') !== undefined ? document.getElementById('sidebarToggle') : false;
		
	}, false);

	return `
		<header class="${style.navbar} ${themeClass}">
			<div id="sidebarToggle" class="overlay-element ${style.sidenavToggle}">
				${Sidebar.getModule(headerItems.sidebar)}
			</div>
			<a id="${logoId}" ${logoUrlAttribute} class="${style.logo}">
				${logoImage}
			</a>
			<span class="${style.menuDivider}"></span>
			${primaryNavigation}
		</header>
	`
	
}