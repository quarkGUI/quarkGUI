var style = require('./image.scss');

export default Image;

export class Image {
	constructor(imageInfo) {
		var imageSrc = imageInfo.src;
		
		// Create the img element:
		var image = document.createElement('img');

		// Set src attribute
		image.src = imageSrc;

	    // Add class name for 'img' element
		image.classList.add(style.image);

    	this.content = image.outerHTML;
  	}
};