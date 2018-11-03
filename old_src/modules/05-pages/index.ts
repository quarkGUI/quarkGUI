const Style = require<any>("../../style/globalStyle.scss");

import Header from '../04-templates/header';
import * as List from '../02-organisms/lists/list';
import * as ListItem from '../01-molecules/lists/list-item';
import * as Modal from '../01-molecules/messaging/modal';
import * as Button from '../00-atoms/buttons/button';
import * as RadioButton from '../01-molecules/form-elements/radio-button';
import * as InputField from '../01-molecules/form-elements/input-field';
import * as DatePicker from '../01-molecules/form-elements/date-picker';
import * as SelectList from '../01-molecules/form-elements/select-list';
import * as Checkbox from '../01-molecules/form-elements/checkbox';

import Footer from '../04-templates/footer';

export default function(){

	return ` 
	${Header()}
	<main id="mainContent">
	<div class="${Style.mainContent}">
	<h1>quarkGUI</h1>
	<p></p>

	<h3>Radio button</h3>
	${RadioButton.getModule({
		id: 'molecule-radio11',
		name: 'molecule-radio-buttons',
		value: 'one',
		label: 'Radio button 11'
	})}
	${RadioButton.getModule({
		id: 'molecule-radio12',
		name: 'molecule-radio-buttons',
		value: 'two',
		label: 'Radio button 12'
	})}
	${RadioButton.getModule({
		id: 'molecule-radio13',
		name: 'molecule-radio-buttons',
		value: 'one',
		label: 'Radio button disabled',
		attributes: ['disabled']
	})}
	${RadioButton.getModule({
		id: 'molecule-radio14',
		name: 'molecule-radio-buttons',
		value: 'two',
		label: 'Radio button read only',
		attributes: ['readonly']
	})}
	
	<h2>Modules</h2>
	${InputField.getModule({
		id: 'ajax-input-test',
		name: 'ajax-input-test',
		type: 'text',
		placeholder: 'Ajax test'
	})}
	<div id="vuetest">

	<h2>vue modals</h2>
	<div v-for="vueModal in vueModals">
		<span v-on:click="selectVueModal(vueModal)">Add {{ vueModal.id }}</span>
		<span v-on:click="addLazyEvent()">Add lazy event</span>
	</div>
	<div v-for="selectedVueModal in selectedVueModals">

		${Modal.getModule({
			id: 'testmodal1',
			triggerElement: Button.getModule({
				content: "vue modal",
				theme: "primary"
			}),
			modalElement: {
				title: 'Vue modal',
				content: '' + SelectList.getModule({
					name: 'vue-modal-selectname1',
					type: 'text',
					placeholder: 'Vue modal testing',
					searchable: true,
					label: 'vue modal select list',
					vueBindings: {
						options: 'listoptions',
						value: 'vueinput.values',
						id: 'selectedVueModal.id + "select-list"'
					}
				}) + 
				InputField.getModule({
					name: 'vue-modal-inputname1',
					type: 'text',
					placeholder: 'Vue modal testing',
					label: 'vue modal select list',
					vueBindings: {
						value: 'vueinput.values',
						id: 'selectedVueModal.id + "input-field"'
					}
				}),
				scrollable: true
			},
			vueBindings: {
				id: 'selectedVueModal.id'
			}
		})}

	</div>


	<hr />



	<h2>vueinput</h2>
	${InputField.getModule({
		id: 'vue-input-test',
		name: 'vue-input-test',
		type: 'text',
		placeholder: 'vue test',
		vueBindings: {
			id: 'vueinput.id',
			name: 'vueinput.name',
			value: 'vueinput.values',
			placeholder: 'vueinput.placeholder',
		}
	})}
	${SelectList.getModule({
		id: 'vue-select1',
		name: 'vue-selectname1',
		type: 'text',
		placeholder: 'Vue testing',
		searchable: true,
		label: 'vue select list',
		vueBindings: {
			options: 'listoptions',
			value: 'vueinput.values'
		}
	})}



	${SelectList.getModule({
		id: 'vueindex-select1',
		name: 'vueindex-selectname1',
		type: 'text',
		placeholder: 'Type here',
		searchable: true,
		label: 'vue standard select list',
		vueBindings: {
			value: 'vueselectlist.value',
			options: 'vueselectlist.options'
		},
		options: [
		{
			name: 'first',
			value: '1.'
		},
		{
			name: 'second',
			value: '2.'
		},
		{
			name: 'testing',
			value: '3.'
		},
		{
			name: 'fourth',
			value: '4.'
		},
		{
			name: 'fifth',
			value: '5.'
		}
		]
	})}

	${Checkbox.getModule({
		id: 'vue-checkbox1-guitar',
		name: 'vue-checkbox1',
		value: 'guitar',
		label: 'Guitar',
		vueBindings: {
			value: 'vuecheckbox.values'
		}
	})}

	${Checkbox.getModule({
		id: 'vue-checkbox2-keyboard',
		name: 'vue-checkbox2',
		value: 'keyboard',
		label: 'Keyboard',
		vueBindings: {
			value: 'vuecheckbox.values'
		}
	})}

	${Checkbox.getModule({
		id: 'vue-checkbox3-disabled',
		name: 'vue-checkbox3',
		value: 'disabled',
		label: 'Disabled',
		attributes: ['disabled']
		
	})}

	${Checkbox.getModule({
		id: 'vue-checkbox4-readonly',
		name: 'vue-checkbox4',
		value: 'readonly',
		label: 'Readonly',
		attributes: ['readonly']
		
	})}

	${Checkbox.getModule({
		id: 'vue-checkbox5-checked-disabled',
		name: 'vue-checkbox5',
		value: 'disabled and checked',
		label: 'Disabled and checked',
		attributes: ['disabled', 'checked']
		
	})}

	${Checkbox.getModule({
		id: 'vue-checkbox6-checked-readonly',
		name: 'vue-checkbox6',
		value: 'readonly and checked',
		label: 'Readonly and checked',
		attributes: ['readonly', 'checked']
		
	})}

	

	</div>

	${Button.getModule({
		content: "ajax post",
		id: "ajaxpost-button",
		theme: "primary",
		ajaxOptions: {
			method: 'post',
			url: '/test/api/',
			data: {
				name: 'dehli',
				age: 28
			},
			getDataFromElements: true,
			dataFromElements: [
			{
				name: 'fornavn',
				elementId: 'ajax-input-test'
			}
			],
			csrfToken: 'tokentesst123'
		}
	})}

	${Button.getModule({
		content: "ajax put",
		id: "ajaxput-button",
		theme: "primary",
		ajaxOptions: {
			method: 'put',
			url: '/test/api/',
			data: {
				name: 'dehputtenli',
				age: 28
			},
			csrfToken: 'puttokentesst123'
		}
	})}

	<div class="content-container">
	<div class="content-container-header">Test</div>
	${ListItem.getModule({
		iconClass: "fa fa-cog",
		title: "element 1",
		subTitle: "undertittel1",
		hover: true,
		buttonRow: {
			buttons: [
			{
				iconClass: 'fa fa-home'
			},
			{
				iconClass: 'fa fa-cog'
			},
			{
				submit: true,
				type: 'minimal',
				theme: 'primary',
				content: 'Set expired',
				formWrapper: {
					formMethod: 'POST',
					vueBindings: {
						formAction: 'links.setExpired'
					},
					hiddenFields: [
					{
						name: "_token",
						vueBindings: {
							value: 'csrfToken'
						}
					},
					{
						name: '_method',
						value: 'PUT'
					}
					]
				}
			}
			]
		}
	})}
	${ListItem.getModule({
		iconClass: "fa fa-cog",
		title: "element 1",
		subTitle: "undertittel1",
		hover: true,
		buttonRow: {
			buttonElementsFirst: true,
			buttons: [
			{
				iconClass: 'fa fa-home'
			},
			{
				iconClass: 'fa fa-cog'
			}
			],
			buttonElements: [
				'<button>knapp</button>'
			]
		}
	})}
	${ListItem.getModule({
		iconClass: "fa fa-cog",
		title: "element 1",
		subTitle: "undertittel1",
		hover: true,
		buttonRow: {
			buttons: [
			{
				iconClass: 'fa fa-home'
			},
			{
				iconClass: 'fa fa-cog'
			}
			]
		}
	})}

	</div>

	${List.getModule({
		id: 'index-listmenu',
		hover: true,
		raised: true,
		listItems: [
		{
			title: 'Global',
			iconClass: 'fa fa-globe'
		},
		{
			title: 'Atoms',
			iconClass: 'fa fa-square-o',
			buttonRow: {
				buttons: [
				{
					iconClass: 'fa fa-home'
				},
				{
					iconClass: 'fa fa-cog'
				},
				{
					iconClass: 'fa fa-list'
				}
				]
			},
			vueBindings: {
				title: 'tittelfeltet'
			}
		},
		{
			title: 'Molecules',
			iconClass: 'fa fa-cube',
			link: 'test',
			vueBindings: {
				subTitle: 'undertittelfeltet'
			}
		},
		{
			title: 'Organisms',
			iconClass: 'fa fa-cubes'
		},
		]
	})}

	${Modal.getModule({
		id: 'testmodal1',
		triggerElement: Button.getModule({
			content: "standard modal",
			id: "modalButton",
			theme: "primary"
		}),
		modalElement: {
			title: 'Standard',
			content: `<p>modal content</p>`
		}
	})}

	${Modal.getModule({
		id: 'testmodal2',
		triggerElement: Button.getModule({
			content: "scrollable modal",
			id: "modalButton",
			theme: "primary"
		}),
		modalElement: {
			title: 'Scroll',
			content: `<p>modal content</p><h2>hey</h2><p>testest</p><p>testest</p><ul><li>testing</li></ul><p>hoy</p>`,
			scrollable: true
		}
	})}

	${Modal.getModule({
		id: 'testmodal3',
		triggerElement: Button.getModule({
			content: "fullscreen modal",
			id: "modalButton",
			theme: "primary"
		}),
		modalElement: {
			title: 'Fullscreen',
			content: `<p>modal content</p>`,
			fullscreen: true
		}
	})}

	${Modal.getModule({
		id: 'testmodal4',
		triggerElement: Button.getModule({
			content: "fullscreen scroll modal",
			id: "modalButton",
			theme: "primary"
		}),
		modalElement: {
			title: 'Fullscreen scroll',
			content: `<p>modal content</p>`,
			scrollable: true,
			fullscreen: true
		}
	})}

	${DatePicker.getModule({
		id: 'datepicker1',
		name: 'date1',
		label: 'Dato',
		value: '2017-02-15'
	})}

	${DatePicker.getModule({
		id: 'datepicker2',
		name: 'date2',
		type: 'time',
		label: 'klokkeslett'
	})}

	${DatePicker.getModule({
		id: 'datepicker3',
		name: 'date3',
		type: 'datetime',
		label: 'tid og dato'
	})}

	${DatePicker.getModule({
		id: 'datepicker4',
		name: 'date4',
		type: 'datetime',
		label: 'tid og dato uten sekunder',
		clockOptions: {
			showSeconds: false
		}
	})}

	${DatePicker.getModule({
		id: 'datepicker5',
		name: 'date5',
		type: 'datetime',
		label: 'disabled tid og dato uten sekunder',
		attributes: ['disabled'],
		value: '2018-06-05 03:04:00',
		clockOptions: {
			showSeconds: false
		}
	})}

	${DatePicker.getModule({
		id: 'datepicker6',
		name: 'date6',
		type: 'datetime',
		label: 'readonly tid og dato uten sekunder',
		attributes: ['readonly'],
		value: '2018-06-05 03:06:00',
		clockOptions: {
			showSeconds: false
		}
	})}

	${DatePicker.getModule({
		id: 'datepicker7',
		name: 'date7',
		type: 'datetime',
		label: 'tid og dato uten krevd tid',
		clockOptions: {
			required: false
		}
	})}




	${SelectList.getModule({
		id: 'index-select2',
		name: 'index-selectname2',
		type: 'text',
		placeholder: 'Type here',
		label: 'standard select list',
		options: [
		{
			name: 'first',
			value: 1
		},
		{
			name: 'second',
			value: 2
		},
		{
			name: 'third',
			value: 3
		},
		{
			name: 'fourth',
			value: 4
		},
		{
			name: 'fifth',
			value: 5
		}
		]
	})}

	${SelectList.getModule({
		id: 'index-select3',
		name: 'index-selectname3',
		type: 'text',
		placeholder: 'Type here',
		label: 'Disabled select list',
		searchable: true,
		attributes: ['disabled'],
		options: [
		{
			name: 'first',
			value: 'first'
		},
		{
			name: 'second',
			value: 'second'
		},
		{
			name: 'third',
			value: 'third'
		},
		{
			name: 'fourth',
			value: 'fourth'
		},
		{
			name: 'fifth',
			value: 'fifth'
		}
		]
	})}

	${SelectList.getModule({
		id: 'index-select4',
		name: 'index-selectname4',
		type: 'text',
		placeholder: 'Type here',
		label: 'Readonly select list',
		searchable: true,
		attributes: ['readonly'],
		options: [
		{
			name: 'first',
			value: 'first'
		},
		{
			name: 'second',
			value: 'second'
		},
		{
			name: 'third',
			value: 'third'
		},
		{
			name: 'fourth',
			value: 'fourth'
		},
		{
			name: 'fifth',
			value: 'fifth'
		}
		]
	})}

	</div>
	${Footer()}
	</main>
	`	
}
