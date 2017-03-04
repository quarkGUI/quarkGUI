import * as AtomSelectList from '../../00-atoms/form-elements/select-list'

const Style = require<any>("./select-list.scss");

export class SelectList {
	id: string;
	name: string;
	searchable?: boolean;
	type?: string;
	value?: any;
	placeholder?: string;
	label?: string;
	options?: IOptions[];

	constructor(selectList: ISelectList) {
		this.id = selectList.id;
		this.name = selectList.name;
		if (selectList.searchable !== undefined) this.searchable = selectList.searchable;
		if (selectList.type !== undefined) this.type = selectList.type;
		if (selectList.value !== undefined) this.value = selectList.value;
		if (selectList.placeholder !== undefined) this.placeholder = selectList.placeholder;
		if (selectList.label !== undefined) this.label = selectList.label;
		if (selectList.options !== undefined) this.options = selectList.options;
	}

	public createModuleElement() {
		let selectList: any = {
			id: this.id,
			name: this.name,
			searchable: this.searchable,
			type: this.type,
			value: this.value,
			placeholder: this.placeholder,
			options: this.options
		}

		if (this.label !== undefined) selectList.labelElement = `<label for="${this.id}" class="${Style.label}">${this.label}</label>`;
		
		return `
			<div class="${Style.inputGroup}">
				${AtomSelectList.getModule(selectList)}
			</div>
		`
	}
}

export interface IOptions{
	name: string;
	value: any;
}

export interface ISelectList{
	id: string;
	name: string;
	searchable?: boolean;
	type?: string;
	value?: any;
	placeholder?: string;
	label?: string;
	options?: IOptions[];
}

export function getModule(selectList: ISelectList){
	return new SelectList(selectList).createModuleElement();
}
