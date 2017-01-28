var style = require('../../style/globalStyle.scss');

import Atoms from '../03-templates/atoms';
import Footer from '../03-templates/footer';

const page = `
	<div class="${style.mainContent}">
		<h1>Atoms</h1>
		${Atoms()}
	</div>
	${Footer()}
`;
export default page;
