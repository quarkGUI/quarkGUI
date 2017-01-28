import Dragula from 'dragula';

var style = require('./dragable-list.scss');

function createListElements(listItems){
	var listElements = "";
	listItems.forEach(function(listItem){
		var listItemContent = listItem.content !== undefined ? listItem.content : '';
		listElements += `<div class="${style.listItem}">${listItemContent}</div>`;
	});
	return listElements;
}

function initDragula(containers){
	var dragula = Dragula(containers, {});
	dragula.on('drop', function(element, container) {

	});
}

export default function(dragableList){

	var id      = dragableList.id      !== undefined ? dragableList.id      : '';
	var content = dragableList.content !== undefined ? dragableList.content : '';

	var listElements = '';
	if (dragableList.listItems !== undefined) listElements = createListElements(dragableList.listItems);

	document.addEventListener('DOMContentLoaded', function() {
		var containers = [document.getElementById(id)];
		initDragula(containers);
	}, false);

	document.addEventListener("module-lazy-loaded", function(e) {
  		var containers = [document.getElementById(id)];
		initDragula(containers);
	});

	return `
		<div id="${id}" class="${style.dragableList}">
			${listElements}
		</div>
	`;

};
