var style = require('../../style/globalStyle.scss');

import Organisms from '../03-templates/organisms';
import Footer from '../03-templates/footer';

const page = `
	<div class="${style.mainContent}">
		<h1>Organisms</h1>
		${Organisms()}
	</div>
	${Footer()}
`;
export default page;
