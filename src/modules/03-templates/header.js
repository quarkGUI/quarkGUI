var style = require('../../style/globalStyle.scss');

import Header from '../02-organisms/global/header';

export default function(){

	return ` 
		${Header({
			theme: 'primary',
			logo: {
				image: {
					src: '/src/img/svg/GUI-Blocks-vertical-white.svg',
					alt: 'logo'
				},
				url: '/'
			},
			primaryNavigation: {
				theme: '',
				listItems: [
					{
						name: "testlink1",
						link: "https://github.com/"
					}, 
					{
						name: "testlink2",
						link: "https://github.com/"
					}
				]
			}
		})}
`
	
}