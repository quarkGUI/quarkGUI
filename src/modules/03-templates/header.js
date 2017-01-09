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
						link: ""
					}, 
					{
						name: "Molecules",
						link: ""
					}, 
					{
						name: "Organisms",
						link: ""
					}
				]
			}
		})}
`
	
}