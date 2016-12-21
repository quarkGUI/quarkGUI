import PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import Image from '../../00-atoms/media/image';

var style = require('./header.scss');

export default function(headerItems){

	var theme = headerItems.theme !== undefined ? headerItems.theme	: '';
	var logoUrl = headerItems.logo.url !== undefined ? headerItems.logo.url	: '';
	var primaryNavigationObj = headerItems.primaryNavigation !== undefined ? headerItems.primaryNavigation : {};
	
	var logoImage = '';
	if (headerItems.logo.image !== undefined) logoImage = Image(headerItems.logo.image);

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
	if (headerItems.primaryNavigation !== undefined) primaryNavigation = PrimaryNavigation(headerItems.primaryNavigation);

	return `
		<header class="${style.navbar} ${themeClass}">
			<a class="${style.sidenavToggle}"></a>
			<a href="${logoUrl}" class="${style.logo}">
				${logoImage}
			</a>
			${primaryNavigation}
		</header>
	`
	
}