const Style = require<any>("../../style/globalStyle.scss");

import Molecules from '../03-templates/molecules';
import Footer from '../03-templates/footer';

const page = `
	<div class="${Style.mainContent}">
		<h1>Molecules</h1>
		${Molecules()}
	</div>
	${Footer()}
`;
export default page;
