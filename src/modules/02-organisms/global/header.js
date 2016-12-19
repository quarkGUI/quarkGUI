import PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import Image from '../../00-atoms/media/image';

var style = require('./header.scss');

export default function(headerItems){

	return `
		<header class="${style.navbar}">
			<a class="${style.sidenavToggle}"></a>
			<a href="${headerItems.logo.url}" class="${style.logo}">
				${Image(headerItems.logo.image)}
			</a>
			${PrimaryNavigation(headerItems.listItems)}
		</header>
	`
	
}