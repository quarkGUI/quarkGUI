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
						id: "loadPageGlobal",
						name: "Global",
						link: "./modules/04-pages/global"
					},
					{
						id: "loadPageAtoms",
						name: "Atoms",
						link: "./modules/04-pages/atoms"
					}, 
					{
						id: "loadPageMolecules",
						name: "Molecules",
						link: "./modules/04-pages/molecules"
					}, {
						id: "loadPageOrganisms",
						name: "Organisms",
						link: "./modules/04-pages/organisms"
					}
				]
			}
		})}
`
}