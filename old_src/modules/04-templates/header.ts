var style = require('../../style/globalStyle.scss');

import * as Header from '../02-organisms/global/header';

export default function(){

	let indexUrl: string = '/';
	/*if(DOCS){
		indexUrl = '/quarkGUI/';
	}*/

	return ` 
	${Header.getModule({
		id: 'main-header',
		theme: 'primary',
		logo: {
			image: {
				src: require('../../img/svg/quark-GUI-logo-white.svg'),
				alt: 'quarkGUI logo'
			},
			url: indexUrl
		},
		primaryNavigationLeft: {
			listItems: [
			{
				name: "Link",
				link: "#",
				iconClass: "fa fa-home",
				responsive: {
					showIcon: false,
					showText: true
				}
			}, 
			{
				name: "Dropdown",
				link: "#",
				iconClass: "fa fa-home",
				responsive: {
					showIcon: true,
					showText: false
				},
				dropdownContent: {
					listItems: [
					{
						name: "Button row",
						link: "#"
					},
					{
						name: "Checkbox",
						link: "#"
					},
					{
						name: "Radio button",
						link: "#"
					},
					{
						name: "Input fied",
						link: "#"
					}
					]
				}

			}
			]
		},
		primaryNavigationRight: {
			listItems: [
			{
				name: "Link",
				link: "#",
				iconClass: "fa fa-cog",
				responsive: {
					showIcon: true,
					showText: false
				},
				dropdownContent: {
					listItems: [
					{
						name: "Button row",
						link: "#"
					},
					{
						name: "Checkbox",
						link: "#"
					}
					]
				}
			}, 
			{
				name: "Dropdown",
				link: "#",
				iconElement: "<img src='https://www.gravatar.com/avatar/6b8e775a9f940bc6753257d75e73c3de?s=190&d=robohash'/>",
				responsive: {
					showIcon: true,
					showText: false
				},
				dropdownContent: {
					listItems: [
					{
						name: "Button row fdsfds  fsdf dsf slutt",
						link: "#"
					},
					{
						name: "Checkbox",
						link: "#"
					},
					{
						name: "Radio button",
						link: "#"
					},
					{
						name: "Input fied",
						link: "#"
					}
					]
				}

			}
			]
		},
		htmlContent: '<span class="testklasse">hoyhoy</span>',
		sidebar: {
			sidebarNavigation: {
				listItems: [
				{
					name: "Global",
					link: "",
					moduleLink: "global",
					iconClass: "fa fa-globe"
				},
				{
					name: "Atoms",
					link: "",
					moduleLink: "atoms",
					iconClass: "fa fa-square-o"
				}, 
				{
					name: "Molecules",
					link: "",
					moduleLink: "molecules",
					iconClass: "fa fa-cube"
				}, {
					name: "Organisms",
					link: "",
					moduleLink: "organisms",
					iconClass: "fa fa-cubes"
				}, {
					name: "Vue test",
					link: "vue-test-page",
					iconClass: "fa fa-cubes",
					vueRouterLink: true
				}
				]
			}
		}
	})}
	`	
}
