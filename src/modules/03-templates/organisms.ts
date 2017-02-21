var style = require('../../style/globalStyle.scss');

import * as ActionBar from '../02-organisms/menus/action-bar';
import ListMenu from '../02-organisms/menus/list-menu';
import Card from '../02-organisms/cards/card';
import * as Grid from '../01-molecules/sections/grid';


export default function(){

	return ` 
		<h2>Menus</h2>
		<h3>List menu</h3>
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
						phone: 12,
						tablet: 6,
						tabletLandscape: 4,
						screen: 4
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
						phone: 12,
						tablet: 6,
						tabletLandscape: 4,
						screen: 4
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
						phone: 12,
						tablet: 6,
						tabletLandscape: 4,
						screen: 4
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
						phone: 12,
						tablet: 6,
						tabletLandscape: 4,
						screen: 4
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
						phone: 12,
						tablet: 6,
						tabletLandscape: 4,
						screen: 4
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

