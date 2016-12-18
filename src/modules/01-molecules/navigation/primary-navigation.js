var style = require('./primary-navigation.scss');

export class PrimaryNavigation {
	constructor(listItems) {

		// Create the list element:
		var list = document.createElement('ul');

	    // Add class name for 'ul' element
		list.classList.add(style.menu);

		listItems.forEach(function(listItem){
			// Create the list item:
	        var item = document.createElement('li');

	        // Create the list item link:
	        var itemLink = document.createElement('a');
	       	itemLink.appendChild(document.createTextNode(listItem.name));
	       	itemLink.href = listItem.link;


	        // Set its contents:
	        item.appendChild(itemLink);

	        // Add class name for 'li' element
	        //item.classList.add(style.menu);

	        // Add it to the list:
	        list.appendChild(item);
		});

    	this.content = list.outerHTML;
  	}
};
