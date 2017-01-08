var style = require('../../style/globalStyle.scss');

import Header from '../02-organisms/global/header';

export default function(){

	return ` 
		${Header({
			theme: 'primary',
			logo: {
				image: {
					src: require('../../img/svg/GUI-blocks-vertical-white.svg'),
					alt: 'logo'
				},
				url: '/'
			},
			primaryNavigation: {
				theme: '',
				listItems: [
					{
						name: "Atoms",
						link: "#atoms"
					}, 
					{
						name: "Molecules",
						link: "#molecules"
					}, 
					{
						name: "Organisms",
						link: "#organisms"
					}
				]
			}
		})}
`
	
}