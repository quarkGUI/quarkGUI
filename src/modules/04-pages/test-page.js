var style = require('../../style/globalStyle.scss');

import InputField from '../01-molecules/form-elements/input-field';
import Header from '../02-organisms/global/header';
import Sidebar from '../02-organisms/global/sidebar';
import Button from '../00-atoms/buttons/button';
import Checkbox from '../01-molecules/form-elements/checkbox';
import RadioButton from '../01-molecules/form-elements/radio-button';

export default function(){

	return ` 
		${Header({
			theme: 'primary',
			logo: {
				image: {
					src: require('../../img/svg/flowgig-logo-black.svg'),
					alt: 'logo'
				},
				url: '/'
			},
			primaryNavigation: {
				theme: '',
				listItems: [
					{
						name: "testlink1",
						link: "https://github.com/"
					}, 
					{
						name: "testlink2",
						link: "https://github.com/"
					}
				]
			}
		})}

		${Sidebar({
			logo: {
				image: {
					src: require('../../img/svg/flowgig-logo-black.svg')
				},
				url: '/'
			},
			sidebarNavigation: {
				listItems: [
					{
						name: "testlink1",
						link: "https://github.com/"
					}, 
					{
						name: "testlink2",
						link: "https://github.com/"
					}
				]
			}
		})}

		<div id="content">
			<h1>Home</h1>
		</div>
		<br/>
		<h2>Checkboxes</h2>
		${Checkbox({
			id: 'checkbox1',
			name: 'checkboxes',
			value: 'one',
			label: 'Checkbox 1'
		})}
		${Checkbox({
			id: 'checkbox2',
			name: 'checkboxes',
			value: 'two',
			label: 'Checkbox 2'
		})}
		<br/>
		<h2>Radio buttons</h2>
		${RadioButton({
			id: 'radio1',
			name: 'radio-buttons',
			value: 'one',
			label: 'Radio button 1'
		})}
		${RadioButton({
			id: 'radio2',
			name: 'radio-buttons',
			value: 'two',
			label: 'Radio button 2'
		})}
		<h2>Buttons</h2>
		<h3>Flat buttons</h3>
		${Button({
			id: 'button1',
			type: 'flat',
			theme: '',
			content: 'Default button'
		})}

		${Button({
			id: 'button1',
			type: 'flat',
			theme: 'primary',
			content: 'Primary button'
		})}

		${Button({
			id: 'button1',
			type: 'flat',
			theme: 'info',
			content: 'Info button'
		})}

		${Button({
			id: 'button1',
			type: 'flat',
			theme: 'success',
			content: 'Success button'
		})}

		${Button({
			id: 'button1',
			type: 'flat',
			theme: 'warning',
			content: 'Warning button'
		})}

		${Button({
			id: 'button1',
			type: 'flat',
			theme: 'danger',
			content: 'Danger button'
		})}

		<h3>Raised buttons</h3>

		${Button({
			id: 'button1',
			type: 'raised',
			theme: '',
			content: 'Default button'
		})}

		${Button({
			id: 'button1',
			type: 'raised',
			theme: 'primary',
			content: 'Primary button'
		})}

		${Button({
			id: 'button1',
			type: 'raised',
			theme: 'info',
			content: 'Info button'
		})}

		${Button({
			id: 'button1',
			type: 'raised',
			theme: 'success',
			content: 'Success button'
		})}

		${Button({
			id: 'button1',
			type: 'raised',
			theme: 'warning',
			content: 'Warning button'
		})}

		${Button({
			id: 'button1',
			type: 'raised',
			theme: 'danger',
			content: 'Danger button'
		})}

		<h2>Form elements</h2>
		<h3>Input field</h3>
		${InputField({
			id: 'input1',
			name: 'inputname1',
			type: 'text',
			placeholder: 'Example text here',
			label: 'Input 1'
		})}


		<div class="${style.box}">
			DEV: ${DEVELOPMENT.toString()}<br/>
			PROD: ${PRODUCTION.toString()}<br/>
		</div>
`
	
}