"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../style/globalStyle.scss");
const molecules_1 = require("../03-templates/molecules");
const footer_1 = require("../03-templates/footer");
const page = `
	<div class="${Style.mainContent}">
		<h1>Molecules</h1>
		${molecules_1.default()}
	</div>
	${footer_1.default()}
`;
exports.default = page;
