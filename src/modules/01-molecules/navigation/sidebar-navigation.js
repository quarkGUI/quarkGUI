var style = require('./sidebar-navigation.scss');

function createListElements(listItems){
	var listElements = "";
	listItems.forEach(function(listItem){
		listElements += `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
	});
	return listElements;
}

export default function(sidebarNavigation){
	
	var listElements = '';
	if (sidebarNavigation.listItems !== undefined) listElements = createListElements(sidebarNavigation.listItems);


	return `
		<ul class="${style.list}">
			${listElements}
		</ul>
	`

}