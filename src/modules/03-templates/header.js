var style = require('../../style/globalStyle.scss');

import Header from '../02-organisms/global/header';

export default function(){

	return ` 
		${Header({
			theme: 'primary',
			logo: {
				image: {
					src: require('../../img/svg/quark-GUI-logo-white.svg'),
					alt: 'logo'
				},
				url: '/'
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
			}
		})}
`
	
}