var style = require('./list-navigation.scss');

function createListElements(listItems){
	var listElements = "";
	listItems.forEach(function(listItem){
		listElements += `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
	});
	return listElements;
}

export default function(listNavigation){
	
	var listElements = '';
	if (listNavigation.listItems !== undefined) listElements = createListElements(listNavigation.listItems);


	return `
		<ul class="${style.listNavigation}">
			${listElements}
		</ul>
	`

}