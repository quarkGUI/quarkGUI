var style = require('../../style/globalStyle.scss');

import Header from '../03-templates/header';
import Sidebar from '../03-templates/sidebar';
import Global from '../03-templates/global';
import Atoms from '../03-templates/atoms';
import Molecules from '../03-templates/molecules';
import Organisms from '../03-templates/organisms';
import Footer from '../03-templates/footer';


export default function(){



	return ` 
		${Header()}

		${Sidebar()}

		<main id="mainContent">
			<div class="${style.mainContent}">
				<h1>quarkGUI</h1>

				<section>
					${Global()}
				</section>

				<section id="atoms">
					<h2>Atoms</h2>
					${Atoms()}
				</section>

				<section id="molecules">
					<h2>Molecules</h2>
					${Molecules()}
				</section>

				<section id="organisms">
					<h2>Organisms</h2>
					${Organisms()}
				</section>
			</div>
			${Footer()}
		</main>

`
	
}