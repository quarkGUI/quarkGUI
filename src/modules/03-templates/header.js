var style = require('../../style/globalStyle.scss');

import Header from '../02-organisms/global/header';

export default function(){

	var indexUrl = '/';
	if(DOCS){
		indexUrl = '/Simple-GUI-Template/';
	}

	return ` 
		${Header({
			id: 'main-header',
			theme: 'primary',
			logo: {
				image: {
					src: require('../../img/svg/quark-GUI-logo-white.svg'),
					alt: 'quarkGUI logo'
				},
				link: indexUrl
			},
			primaryNavigation: {
				listItems: [
					{
						name: "Link",
						link: "#"
					}, 
					{
						name: "Dropdown",
						link: "#",
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
			sidebar: {
				logo: {
					image: {
						src: require('../../img/svg/flowgig-logo-black.svg')
					},
					url: '/'
				},
				sidebarNavigation: {
					listItems: [
						{
							name: "Global",
							moduleLink: "./modules/04-pages/global"
						},
						{
							name: "Atoms",
							moduleLink: "./modules/04-pages/atoms"
						}, 
						{
							name: "Molecules",
							moduleLink: "./modules/04-pages/molecules"
						}, {
							name: "Organisms",
							moduleLink: "./modules/04-pages/organisms"
						}
					]
				}
			}
		})}
`
	
}