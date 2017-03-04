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
							link: "",
							moduleLink: "global"
						},
						{
							name: "Atoms",
							link: "",
							moduleLink: "atoms"
						}, 
						{
							name: "Molecules",
							link: "",
							moduleLink: "molecules"
						}, {
							name: "Organisms",
							link: "",
							moduleLink: "organisms"
						}
					]
				}
			}
		})}
`	
}
