const Style = require<any>("../../style/globalStyle.scss");

import Global from '../04-templates/global';
import Footer from '../04-templates/footer';

const page = `
	<div class="${Style.mainContent}">
		<h1>Global</h1>
		${Global()}
	</div>
	${Footer()}
`;
export default page;
