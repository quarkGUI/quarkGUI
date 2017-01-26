var style = require('../../style/globalStyle.scss');

import Footer from '../02-organisms/global/footer';

export default function(){

	return ` 
		${Footer({
			logo: {
				image: {
					src: require('../../img/svg/quark-GUI-logo-primary.svg'),
					alt: 'logo'
				},
				url: '/'
			},
			content: `
				<div class="text-center">
					<p>quark GUI licensed under <a href="https://github.com/benjamindehli/Simple-GUI-Template/blob/master/LICENSE">GNU General Public License</a></p>
					<p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>
				</div>
			`
		})}
`
	
}