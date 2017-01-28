import ButtonRow from '../../01-molecules/buttons/button-row';

var style = require('./list-menu.scss');

function createTitleElement(listItem){
	var title      = listItem.title      !== undefined ? listItem.title      : false;
	var subTitle   = listItem.subTitle   !== undefined ? listItem.subTitle   : false;
	var link       = listItem.link       !== undefined ? listItem.link       : false;
	var moduleLink = listItem.moduleLink !== undefined ? listItem.moduleLink : false;

	var moduleLinkAttribute = moduleLink ? `data-module-target="${moduleLink}"` : '';

	var singleLineClass = title && !subTitle ? style.singleLine : '';

	var subTitleElement = (subTitle) ? `<small>${subTitle}</small>` : '';

	var titleElement = '';
	if (title && link) titleElement = `<a href="${link}" class="${style.listItemTitle} ${singleLineClass}">${title} ${subTitleElement}</a>`;
	else if (title && moduleLink) titleElement = `<a ${moduleLinkAttribute} class="loadPage ${style.listItemTitle} ${singleLineClass}">${title} ${subTitleElement}</a>`;
	else if (title) titleElement = `<span class="${style.listItemTitle} ${singleLineClass}" ${moduleLinkAttribute}>${title} ${subTitleElement}</span>`;
	return titleElement;
}

function createButtonRowElement(listItem){
	var buttonRow = listItem.buttonRow !== undefined ? listItem.buttonRow : false;

	var buttonRowElement = (buttonRow) ? `<span class="${style.listItemButtonRow}">${ButtonRow(buttonRow)}</span>` : '';
	
	return buttonRowElement;

}

function createListElements(listItems){
	var listElements = "";

	listItems.forEach(function(listItem){
		
		var title     = createTitleElement(listItem);
		var buttonRow = createButtonRowElement(listItem);

		listElements += `
							<li class="${style.listItem}">
								${title} ${buttonRow}
							</li>
						`;
	});
	return listElements;
}


export default function(listMenu){
	var id         = listMenu.id        !== undefined ? listMenu.id        : '';
	var listItems  = listMenu.listItems !== undefined ? listMenu.listItems : false;
	var hover      = listMenu.hover     !== undefined ? listMenu.hover     : false;

	var hoverClass = hover ? style.hover : '';

	var listElements = '';
	if (listItems) listElements = createListElements(listItems);

	return `
		<ul id="${id}" class="${style.listMenu} ${hoverClass}">
			${listElements}
		</ul>
	`

}