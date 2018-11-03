var style = require('../../style/globalStyle.scss');

import * as Footer from '../02-organisms/global/footer';

export default function(){

	return ` 
		${Footer.getModule({
			logo: {
				image: {
					src: require('../../img/svg/quark-GUI-logo-gray.svg'),
					alt: 'quarkGUI logo'
				},
				url: '/'
			},
			content: `
				<div class="text-center">
					<p>quarkGUI licensed under <a href="https://github.com/quarkGUI/quarkGUI/blob/master/LICENSE">GNU General Public License</a></p>
					<p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>
				</div>
			`
		})}
`
	
}