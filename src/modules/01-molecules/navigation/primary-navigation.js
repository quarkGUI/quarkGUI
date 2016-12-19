var style = require('./primary-navigation.scss');

function createListElements(listItems){
	var listElements = "";
	listItems.forEach(function(listItem){
		listElements += `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
	});
	return listElements;
}

export default function(listItems){

	return `
		<ul class="${style.menu}">
			${createListElements(listItems)}
		</ul>
	`

}
