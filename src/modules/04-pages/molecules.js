var style = require('../../style/globalStyle.scss');

import Molecules from '../03-templates/molecules';
import Footer from '../03-templates/footer';

const page = `
	<div class="${style.mainContent}">
		<h1>Molecules</h1>
		${Molecules()}
	</div>
	${Footer()}
`;
export default page;
