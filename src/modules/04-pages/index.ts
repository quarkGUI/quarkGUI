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
							moduleLink: 'global'
						},
						{
							title: 'Atoms',
							moduleLink: 'atoms'
						},
						{
							title: 'Molecules',
							moduleLink: 'molecules'
						},
						{
							title: 'Organisms',
							moduleLink: 'organisms'
						},
					]
				})}
				
			</div>
			${Footer()}
		</main>
`	
}
