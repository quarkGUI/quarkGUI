import GridItem from '../../00-atoms/sections/grid-item';

var style = require('./grid.scss');

function createGridItemElements(gridItems){
	var gridItemElements = '';
	gridItems.forEach(function(gridItem){
		gridItemElements += `${GridItem(gridItem)}`;
	});
	return gridItemElements;
}

export default function(grid){

	var gridItemElements = '';
	if (grid.gridItems !== undefined) gridItemElements = createGridItemElements(grid.gridItems);

	return `
		<div class="${style.row}">
			${gridItemElements}
			<div class="${style.clearFix}"></div>
		</div>
	`

}
