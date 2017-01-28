var style = require('./sidebar-navigation.scss');

function createListElements(listItems){
	var listElements = "";
	listItems.forEach(function(listItem){
		var id         =   listItem.id       !== undefined ? `id="${listItem.id}"` : '';
		var name       = listItem.name       !== undefined ? listItem.name : '';
		var link       = listItem.link       !== undefined ? `href="${listItem.link}"` : '';
		var moduleLink = listItem.moduleLink !== undefined ? `data-module-target="${listItem.moduleLink}"` : '';

		listElements += `<li><a class="loadPage" ${id} ${link} ${moduleLink}>${name}</a></li>`;
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