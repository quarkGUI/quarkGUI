var style = require('./color-palette.scss');
import Grid from '../../01-molecules/sections/grid';
import Card from '../../02-organisms/cards/card';



export default function(colorPalette){

	var color = colorPalette.color !== undefined ? colorPalette.color : '';

	var colorClass = style.defaultColor
	if (color == 'primary')	colorClass = style.primaryColor;
	if (color == 'info') 	colorClass = style.infoColor;
	if (color == 'success')	colorClass = style.successColor;
	if (color == 'warning')	colorClass = style.warningColor;
	if (color == 'danger') 	colorClass = style.dangerColor;

	return `
		<div class="${style.colorPalette} ${colorClass}">
			<div class="${style.normalState}">
				<div class="${style.color}">
					<span class="${style.colorCode}"></span>
				</div>
			</div>
			<div class="${style.hoverState}">
				<div class="${style.color}">
					<span class="${style.colorCode}"></span>
				</div>
			</div>
			<div class="${style.activeState}">
				<div class="${style.color}">
					<span class="${style.colorCode}"></span>
				</div>
			</div>
		</div>
	`
}
