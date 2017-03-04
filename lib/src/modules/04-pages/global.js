"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../style/globalStyle.scss");
const global_1 = require("../03-templates/global");
const footer_1 = require("../03-templates/footer");
const page = `
	<div class="${Style.mainContent}">
		<h1>Global</h1>
		${global_1.default()}
	</div>
	${footer_1.default()}
`;
exports.default = page;
