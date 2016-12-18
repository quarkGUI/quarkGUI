import { PrimaryNavigation } from '../../01-molecules/navigation/primary-navigation';
import { Image } from '../../00-atoms/media/image';

var style = require('./header.scss');

export class Header {
	constructor(headerItems) {

		var header = document.createElement('header');
		header.classList.add(style.navbar);

		// Create the sidenav toggle element
		var sidenavToggle = document.createElement('a');
		sidenavToggle.classList.add(style.sidenavToggle);

		// Create the a element for logo:
		var logoLink = document.createElement('a');
		logoLink.classList.add(style.logo)
		logoLink.href = headerItems.logo.url;

		// Create the img element inside a element for logo:
		var logo = new Image(headerItems.logo.image);
		logoLink.innerHTML = logo.content;

		// Get Navigation menu
		var primaryNavigation = new PrimaryNavigation(headerItems.listItems);

		// Combine logolink and navigation menu
		header.innerHTML = sidenavToggle.outerHTML + logoLink.outerHTML + primaryNavigation.content;

		this.content = header.outerHTML;
	}
};