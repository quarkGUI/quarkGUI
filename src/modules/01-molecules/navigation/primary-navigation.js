import ListNavigation from './list-navigation';


var style = require('./primary-navigation.scss');

function hasDropdown(listItem){
	return listItem.dropdownContent !== undefined && listItem.dropdownContent !== '';
}

function createListElements(listItems){
	var listElements = "";
	listItems.forEach(function(listItem){
		var dropdownContent = '';
		var dropdownClass = '';
		var listElement = '';
		if (hasDropdown(listItem)){
			dropdownContent = `<div class="${style.dropdownContent}">${ListNavigation(listItem.dropdownContent)}<div>`;
			dropdownClass = `${style.hasDropdown}`;
			listElement = `<li class="overlay-element ${dropdownClass}">
						       <span class="${style.dropdownTitle}">${listItem.name}</span>
						       ${dropdownContent}
						    </li>`;
		}else{
			listElement = `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
		}
		listElements += listElement;
	});
	return listElements;
}

export default function(primaryNavigation){

	var id    = primaryNavigation.id    !== undefined ? primaryNavigation.id    : '';
	var theme = primaryNavigation.theme !== undefined ? primaryNavigation.theme : '';
	
	var listElements = '';
	if (primaryNavigation.listItems !== undefined) listElements = createListElements(primaryNavigation.listItems);

	var themeClass = style.listThemeDefault;
	if (theme == 'primary')	themeClass = style.listThemePrimary;
	if (theme == 'dark') 	themeClass = style.listThemeDark;

	document.addEventListener('DOMContentLoaded', function() {
		var navigationElements = document.getElementsByClassName(style.hasDropdown) !== undefined ? document.getElementsByClassName(style.hasDropdown) : false;
		if (navigationElements){
			for (var i = 0; i < navigationElements.length; i++) {
				var navigationElement = navigationElements[i];
				var dropdownElements = navigationElement.getElementsByClassName(style.dropdownContent);
				var dropdownElement = dropdownElements[0];

				var navigationElementWidth = navigationElements[i].offsetWidth;
				var dropdownElementWidth = dropdownElements[0].offsetWidth;
				var dropdownElementHeight = dropdownElements[0].offsetHeight;
				var widthDif = navigationElementWidth - dropdownElementWidth;

				dropdownElement.style.marginLeft = widthDif/2 + 'px';
			}
		}
	}, false);


	return `
		<ul id="${id}"" class="${style.list} ${themeClass}">
			${listElements}
		</ul>
	`

}
