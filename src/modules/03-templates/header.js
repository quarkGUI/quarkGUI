var style = require('../../style/globalStyle.scss');

import Header from '../02-organisms/global/header';

export default function(){

	var indexUrl = '/';
	if(DOCS){
		indexUrl = '/quarkGUI/';
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
				sidebarNavigation: {
					listItems: [
						{
							name: "Global",
							moduleLink: "global"
						},
						{
							name: "Atoms",
							moduleLink: "atoms"
						}, 
						{
							name: "Molecules",
							moduleLink: "molecules"
						}, {
							name: "Organisms",
							moduleLink: "organisms"
						}
					]
				}
			}
		})}
`
	
}