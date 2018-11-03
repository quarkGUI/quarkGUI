const Style = require<any>("../../style/globalStyle.scss");

import Atoms from '../04-templates/atoms';
import Footer from '../04-templates/footer';

const page = `
	<div class="${Style.mainContent}">
		<h1>Atoms</h1>
		${Atoms()}
	</div>
	${Footer()}
`;
export default page;
