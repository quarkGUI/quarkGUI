const Style = require<any>("../../../../src/modules/00-atoms/media/image.scss");

export class Image {
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

export interface IImage {
	src: any;
	alt?: string; 
}

export function getModule(image: IImage){
	return new Image(image).createModuleElement();
}
