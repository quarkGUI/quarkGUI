var style = require('./image.scss');

export default function(image){

	var src	= image.src !== undefined ? image.src : '';
	var alt	= image.alt !== undefined ? image.alt : '';

	return `
		<img class="${style.image}" src="${image.src}" alt="${image.alt}" />
	`
	
}