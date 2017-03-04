"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../style/globalStyle.scss");
const header_1 = require("../03-templates/header");
const ListMenu = require("../02-organisms/menus/list-menu");
const footer_1 = require("../03-templates/footer");
function default_1() {
    return ` 
		${header_1.default()}
		<main id="mainContent">
			<div class="${Style.mainContent}">
				<h1>quarkGUI</h1>
				<p></p>
				<h2>Modules</h2>
				${ListMenu.getModule({
        id: 'index-listmenu',
        hover: true,
        listItems: [
            {
                title: 'Global',
                moduleLink: 'global'
            },
            {
                title: 'Atoms',
                moduleLink: 'atoms'
            },
            {
                title: 'Molecules',
                moduleLink: 'molecules'
            },
            {
                title: 'Organisms',
                moduleLink: 'organisms'
            },
        ]
    })}
				
			</div>
			${footer_1.default()}
		</main>
`;
}
exports.default = default_1;
