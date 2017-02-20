const Style = require<any>("./image.scss");

class Image {
	src: string;
	alt: string = "";

	constructor(image: IImage) {
		this.src = image.src;
		if (image.alt !== undefined) this.alt = image.alt;
	}

	public createModuleElement(){
		return `<img class="${Style.image}" src="${this.src}" alt="${this.alt}" />`
	}
}

interface IImage {
	src: string;
	alt?: string; 
}

export function getModule(image: IImage){
	return new Image(image).createModuleElement();
}
