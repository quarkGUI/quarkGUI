"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../style/globalStyle.scss");
const atoms_1 = require("../03-templates/atoms");
const footer_1 = require("../03-templates/footer");
const page = `
	<div class="${Style.mainContent}">
		<h1>Atoms</h1>
		${atoms_1.default()}
	</div>
	${footer_1.default()}
`;
exports.default = page;
