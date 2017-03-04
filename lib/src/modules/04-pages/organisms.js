"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../style/globalStyle.scss");
const organisms_1 = require("../03-templates/organisms");
const footer_1 = require("../03-templates/footer");
const page = `
	<div class="${Style.mainContent}">
		<h1>Organisms</h1>
		${organisms_1.default()}
	</div>
	${footer_1.default()}
`;
exports.default = page;
