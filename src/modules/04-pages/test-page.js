var style = require('../../style/globalStyle.scss');

import Header from '../03-templates/header';
import Sidebar from '../03-templates/sidebar';
import Atoms from '../03-templates/atoms';
import Molecules from '../03-templates/molecules';

export default function(){

	return ` 
		${Header()}

		${Sidebar()}

		<main>
			<div id="content">
				<h1>Home</h1>
			</div>
			<h2>Atoms</h2>
			${Atoms()}

			<h2>Molecules</h2>
			${Molecules()}

			<h2>Organisms</h2>

			<h2>Templates</h2>

			<h2>Pages</h2>
			


			<div class="${style.box}">
				DEV: ${DEVELOPMENT.toString()}<br/>
				PROD: ${PRODUCTION.toString()}<br/>
			</div>
		</main>
`
	
}