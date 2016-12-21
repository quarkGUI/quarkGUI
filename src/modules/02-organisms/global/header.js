import PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import Image from '../../00-atoms/media/image';

var style = require('./header.scss');

export default function(headerItems){

	var logoUrl	= headerItems.logo.url !== undefined ? headerItems.logo.url	: '';
	
	var logoImage = '';
	if (headerItems.logo.image !== undefined) logoImage = Image(headerItems.logo.image);

	var listItems = '';
	if (headerItems.listItems !== undefined) listItems = PrimaryNavigation(headerItems.listItems);

	return `
		<header class="${style.navbar}">
			<a class="${style.sidenavToggle}"></a>
			<a href="${logoUrl}" class="${style.logo}">
				${logoImage}
			</a>
			${listItems}
		</header>
	`
	
}