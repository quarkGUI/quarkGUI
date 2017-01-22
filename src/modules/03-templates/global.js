var style = require('../../style/globalStyle.scss');

import ColorPalette from '../05-global/colors/color-palette';

export default function(){

	return ` 
		<h3>Global</h3>
		<h4>Color palette</h4>
		${ColorPalette()}		
	`
	
}