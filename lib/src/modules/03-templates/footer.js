"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style = require('../../style/globalStyle.scss');
const Footer = require("../02-organisms/global/footer");
function default_1() {
    return ` 
		${Footer.getModule({
        logo: {
            image: {
                src: require('../../img/svg/quark-GUI-logo-primary.svg'),
                alt: 'quarkGUI logo'
            },
            url: '/'
        },
        content: `
				<div class="text-center">
					<p>quarkGUI licensed under <a href="https://github.com/benjamindehli/Simple-GUI-Template/blob/master/LICENSE">GNU General Public License</a></p>
					<p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>
				</div>
			`
    })}
`;
}
exports.default = default_1;
