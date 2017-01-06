var style = require('../../style/globalStyle.scss');

import ActionBar from '../02-organisms/menus/action-bar';


export default function(){

	return ` 
		<h3>Menus</h3>
		<h4>Action bar</h4>
		${ActionBar({
			theme: 'primary',
			actionButton:{
				id: 'actionbutton1',
				theme: 'primary',
				iconClass: 'fa fa-info'
			},
			actionBarMenu: {
				id: 'action-bar1',
				theme: 'info',
				toggleButtons: [
					{
						id: 'togglebutton2',
						toggleType: '',
						title: '',
						targetClass: 'src-style-globalStyle---box',
						theme: 'primary',
						iconClass: 'fa fa-home'
					},
					{
						id: 'togglebutton3',
						toggleType: '',
						title: '',
						targetClass: 'src-style-globalStyle---box',
						theme: 'warning',
						iconClass: 'fa fa-search'
					}
				]
			}
		})}
	`	
}
