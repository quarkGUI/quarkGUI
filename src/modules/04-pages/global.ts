const Style = require<any>("../../style/globalStyle.scss");

import Global from '../03-templates/global';
import Footer from '../03-templates/footer';

const page = `
	<div class="${Style.mainContent}">
		<h1>Global</h1>
		${Global()}
	</div>
	${Footer()}
`;
export default page;
