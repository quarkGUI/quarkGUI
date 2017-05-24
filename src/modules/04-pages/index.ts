const Style = require<any>("../../style/globalStyle.scss");

import Header from '../03-templates/header';
import * as ListMenu from '../02-organisms/menus/list-menu';
import Footer from '../03-templates/footer';

export default function(){

	return ` 
		${Header()}
		<main id="mainContent">
			<div class="${Style.mainContent}">
				<h1>quarkGUI</h1>
				<p></p>
				<h2>Modules</h2>
				${ListMenu.getModule({
					id: 'index-listmenu',
					hover: true,
					raised: true,
					listItems: [
						{
							title: 'Global',
							moduleLink: 'global',
							iconClass: 'fa fa-globe'
						},
						{
							title: 'Atoms',
							moduleLink: 'atoms',
							iconClass: 'fa fa-square-o'
						},
						{
							title: 'Molecules',
							moduleLink: 'molecules',
							iconClass: 'fa fa-cube'
						},
						{
							title: 'Organisms',
							moduleLink: 'organisms',
							iconClass: 'fa fa-cubes'
						},
					]
				})}
				
			</div>
			${Footer()}
		</main>
`	
}
