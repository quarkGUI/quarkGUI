var style = require('../../style/globalStyle.scss');

import Header from '../03-templates/header';
import Sidebar from '../03-templates/sidebar';
import Atoms from '../03-templates/atoms';
import Molecules from '../03-templates/molecules';
import Organisms from '../03-templates/organisms';


export default function(){



	return ` 
		${Header()}

		${Sidebar()}

		<main id="mainContent">
			<div class="${style.mainContent}">
				<h1>Home</h1>

				<section id="atoms">
					<h2>Atoms</h2>
					${Atoms()}
				</section>

				<span>Atoms</span>

				<h2 id="molecules">Molecules</h2>
				${Molecules()}

				<h2 id="organisms">Organisms</h2>
				${Organisms()}

				<h2 id="templates">Templates</h2>

				<h2 id="pages">Pages</h2>
				


				<div class="${style.box}">
					DEV: ${DEVELOPMENT.toString()}<br/>
					PROD: ${PRODUCTION.toString()}<br/>
				</div>
			</div>
		</main>
`
	
}