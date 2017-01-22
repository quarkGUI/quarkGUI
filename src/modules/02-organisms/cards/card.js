import ButtonRow from '../../01-molecules/buttons/button-row';

var style = require('./card.scss');

export default function(card){
	
	var theme           = card.theme   !== undefined ? card.theme : '';
	var title           = card.title   !== undefined ? card.title : '';
	var cardBodyContent = card.content !== undefined ? card.content : '';

	var themeClass = style.cardThemeDefault
	if (theme == 'primary')	themeClass = style.cardThemePrimary;
	if (theme == 'info') 	themeClass = style.cardThemeInfo;
	if (theme == 'success')	themeClass = style.cardThemeSuccess;
	if (theme == 'warning')	themeClass = style.cardThemeWarning;
	if (theme == 'danger') 	themeClass = style.cardThemeDanger;

	return `
		<div class="card ${style.card} ${themeClass}">
			<div class="${style.cardHeader}">
				<span class="${style.cardHeaderTitle}">${title}</span>
			</div>
			<div class="${style.cardBody}">
				${cardBodyContent}
			</div>
		</div>
	`
}
