var style = require('../../style/globalStyle.scss');

import * as ActionBar from '../02-organisms/menus/action-bar';
import * as List from '../02-organisms/lists/list';
import * as Card from '../02-organisms/cards/card';
import * as Grid from '../01-molecules/sections/grid';


export default function(){

	return ` 
	<h2>Menus</h2>
	<h3>List menu</h3>
	${List.getModule({
		id: 'list-menu1',
		raised: true,
		hover: true,
		listItems: [
		{
			id: 'listItem1',
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
			id: 'listItem2',
			title: 'List item without subtitle',
			hiddenButtonRow: true,
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
		},
		{
			id: 'listItem3',
			title: 'List item with icon',
			iconClass: 'fa fa-user',
			hiddenButtonRow: true,
			buttonRow: {
				id: 'list-menu-button-row3',
				buttons: [
				{
					id: 'list-menu-buttonrow-button7',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button8',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button9',
					iconClass: 'fa fa-list'
				}
				]
			}
		},
		{
			id: 'listItem4',
			title: 'List item with subtitle and icon',
			subTitle: 'This is a subtitle',
			iconClass: 'fa fa-user',
			buttonRow: {
				id: 'list-menu-button-row4',
				buttons: [
				{
					id: 'list-menu-buttonrow-button10',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button11',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button12',
					iconClass: 'fa fa-list'
				}
				]
			}
		}
		]
	})}
	<h3>Expandable list menu</h3>
	${List.getModule({
		id: 'list-menu2',
		raised: true,
		listItems: [
		{
			id: 'listItem5',
			title: 'List item with subtitle',
			subTitle: 'This is a subtitle',
			iconClass: 'fa fa-user',
			expandable: true,
			buttonRow: {
				id: 'list-menu-button-row5',
				buttons: [
				{
					id: 'list-menu-buttonrow-button13',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button14',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button15',
					iconClass: 'fa fa-list'
				}
				]
			},
			expandableContent: '<h2>testcontent</h2>'
		},
		{
			id: 'listItem6',
			title: 'List item with subtitle and icon',
			subTitle: 'This is a subtitle',
			iconClass: 'fa fa-user',
			expandable: true,
			buttonRow: {
				id: 'list-menu-button-row6',
				buttons: [
				{
					id: 'list-menu-buttonrow-button16',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button17',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button18',
					iconClass: 'fa fa-list'
				}
				]
			},
			expandableContent: 'testcontent'
		}
		]
	})}

	<h3>Dragable list menu</h3>
	${List.getModule({
		id: 'list-menu3',
		raised: true,
		dragable: true,
		listItems: [
		{
			id: 'listItem7',
			title: 'List item with subtitle',
			subTitle: 'This is a subtitle',
			iconClass: 'fa fa-user',
			expandable: true,
			buttonRow: {
				id: 'list-menu-button-row7',
				buttons: [
				{
					id: 'list-menu-buttonrow-button13',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button14',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button15',
					iconClass: 'fa fa-list'
				}
				]
			},
			expandableContent: '<h2>testcontent</h2>'
		},
		{
			id: 'listItem8',
			title: 'List item with subtitle and icon',
			subTitle: 'This is a subtitle',
			iconClass: 'fa fa-user',
			expandable: true,
			buttonRow: {
				id: 'list-menu-button-row8',
				buttons: [
				{
					id: 'list-menu-buttonrow-button16',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button17',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button18',
					iconClass: 'fa fa-list'
				}
				]
			},
			expandableContent: 'testcontent'
		}
		]
	})}

	<h3>Action bar</h3>
	${ActionBar.getModule({
		theme: 'primary',
		actionButton:{
			id: 'actionbutton1',
			theme: 'primary',
			iconClass: 'fa fa-info'
		},
		actionBarMenu: {
			id: 'action-bar1',
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
				theme: 'primary',
				iconClass: 'fa fa-search'
			},
			{
				id: 'togglebutton4',
				toggleType: '',
				title: '',
				targetClass: 'src-style-globalStyle---box',
				theme: 'primary',
				iconClass: 'fa fa-list'
			}
			]
		}
	})}

	<h2>Cards</h2>
	<h3>Card</h3>
	${Grid.getModule({
		gridItems:[
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Default card',
				content: List.getModule({
					id: 'card-list-menu1',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Primary card',
				theme: 'primary',
				content: List.getModule({
					id: 'card-list-menu2',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Info card',
				theme: 'info',
				content: List.getModule({
					id: 'card-list-menu3',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Success card',
				theme: 'success',
				content: List.getModule({
					id: 'card-list-menu4',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Warning card',
				theme: 'warning',
				content: List.getModule({
					id: 'card-list-menu5',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Danger card',
				theme: 'danger',
				content: List.getModule({
					id: 'card-list-menu6',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		}
		]
	})}
	`	
}

