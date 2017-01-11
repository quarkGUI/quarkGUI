var style = require('../../style/globalStyle.scss');

import Header from '../02-organisms/global/header';

export default function(){

	return ` 
		${Header({
			theme: 'dark',
			logo: {
				image: {
					src: require('../../img/svg/GUI-blocks-vertical-white.svg'),
					alt: 'logo'
				},
				url: '/'
			},
			primaryNavigation: {
				listItems: [
					{
						name: "Atoms",
						link: "#"
					}, 
					{
						name: "Molecules",
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

					}, 
					{
						name: "Organisms",
						link: "#",
						dropdownContent: {
							listItems: [
								{
									name: "Header",
									link: "#"
								},
								{
									name: "Sidebar",
									link: "#"
								},
								{
									name: "Action bar",
									link: "#"
								},
								{
									name: "List menu",
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