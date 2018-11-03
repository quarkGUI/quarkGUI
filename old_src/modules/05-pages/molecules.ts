const Style = require<any>("../../style/globalStyle.scss");

import Molecules from '../04-templates/molecules';
import Footer from '../04-templates/footer';

const page = `
	<div class="${Style.mainContent}">
		<h1>Molecules</h1>
		${Molecules()}
	</div>
	${Footer()}
`;
export default page;
