var style = require('../../style/globalStyle.scss');

import ActionBar from '../02-organisms/menus/action-bar';
import ListMenu from '../02-organisms/menus/list-menu';
import Card from '../02-organisms/cards/card';
import Grid from '../01-molecules/sections/grid';


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

		<h3>Cards</h3>
		<h4>Card</h4>
		${Grid({
			gridItems:[
				{
					sizes: {
						xs: '12',
						sm: '6',
						md: '4',
						lg: '4'
					},
					content: Card({
						id: 'card1',
						title: 'Default card',
						content: ListMenu({
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
						xs: '12',
						sm: '6',
						md: '4',
						lg: '4'
					},
					content: Card({
						id: 'card2',
						title: 'Primary card',
						theme: 'primary',
						content: ListMenu({
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
						xs: '12',
						sm: '6',
						md: '4',
						lg: '4'
					},
					content: Card({
						id: 'card3',
						title: 'Info card',
						theme: 'info',
						content: ListMenu({
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
						xs: '12',
						sm: '6',
						md: '4',
						lg: '4'
					},
					content: Card({
						id: 'card4',
						title: 'Success card',
						theme: 'success',
						content: ListMenu({
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
						xs: '12',
						sm: '6',
						md: '4',
						lg: '4'
					},
					content: Card({
						id: 'card5',
						title: 'Warning card',
						theme: 'warning',
						content: ListMenu({
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
						xs: '12',
						sm: '6',
						md: '4',
						lg: '4'
					},
					content: Card({
						id: 'card6',
						title: 'Danger card',
						theme: 'danger',
						content: ListMenu({
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

