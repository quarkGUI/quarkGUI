var style = require('../../style/globalStyle.scss');

import ActionBar from '../02-organisms/menus/action-bar';
import ListMenu from '../02-organisms/menus/list-menu';


export default function(){

	return ` 
		<h3>Menus</h3>
		<h4>List menu</h4>
		${ListMenu({
			id: 'list-menu1',
			listItems: [
				{
					title: 'List item with subtitle',
					subTitle: 'This is a subtitle',
					buttonRow: {
						id: 'list-menu-button-row1',
						buttons: [
							{
								id: 'list-menu-buttonrow-button1',
								iconClass: 'fa fa-home'
							},
							{
								id: 'list-menu-buttonrow-button2',
								iconClass: 'fa fa-cog'
							},
							{
								id: 'list-menu-buttonrow-button3',
								iconClass: 'fa fa-list'
							}
						]
					}
				},
				{
					title: 'List item without subtitle',
					buttonRow: {
						id: 'list-menu-button-row2',
						buttons: [
							{
								id: 'list-menu-buttonrow-button4',
								iconClass: 'fa fa-home'
							},
							{
								id: 'list-menu-buttonrow-button5',
								iconClass: 'fa fa-cog'
							},
							{
								id: 'list-menu-buttonrow-button6',
								iconClass: 'fa fa-list'
							}
						]
					}
				}
			]
		})}
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
