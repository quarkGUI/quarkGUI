const Style = require<any>("../../style/globalStyle.scss");

import Organisms from '../04-templates/organisms';
import Footer from '../04-templates/footer';

const page = `
	<div class="${Style.mainContent}">
		<h1>Organisms</h1>
		${Organisms()}
	</div>
	${Footer()}
`;
export default page;
