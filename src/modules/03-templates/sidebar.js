var style = require('../../style/globalStyle.scss');

import Sidebar from '../02-organisms/global/sidebar';

export default function(){

	return ` 
		${Sidebar({
			logo: {
				image: {
					src: require('../../img/svg/flowgig-logo-black.svg')
				},
				url: '/'
			},
			sidebarNavigation: {
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