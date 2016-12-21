var style = require('./primary-navigation.scss');

function createListElements(listItems){
	var listElements = "";
	listItems.forEach(function(listItem){
		listElements += `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
	});
	return listElements;
}

export default function(primaryNavigation){

	var theme = primaryNavigation.theme !== undefined ? primaryNavigation.theme : '';
	
	var listElements = '';
	if (primaryNavigation.listItems !== undefined) listElements = createListElements(primaryNavigation.listItems);

	var themeClass = style.listThemeDefault;
	if (theme == 'primary')	themeClass = style.listThemePrimary;
	if (theme == 'dark') 	themeClass = style.listThemeDark;


	return `
		<ul class="${style.list} ${themeClass}">
			${listElements}
		</ul>
	`

}
