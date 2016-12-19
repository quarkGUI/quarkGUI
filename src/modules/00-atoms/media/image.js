var style = require('./image.scss');

export default function(imageInfo){

	return `
		<img class="${style.image}" src="${imageInfo.src}" />
	`
	
}