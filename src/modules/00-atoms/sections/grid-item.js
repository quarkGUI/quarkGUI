
var style = require('./grid-item.scss');



export default function(gridItem){

	var sizeXSClass = gridItem.sizes !== undefined && gridItem.sizes.xs !== undefined ? 'col-xs-' + gridItem.sizes.xs : '';
	var sizeSMClass = gridItem.sizes !== undefined && gridItem.sizes.sm !== undefined ? 'col-sm-' + gridItem.sizes.sm : '';
	var sizeMDClass = gridItem.sizes !== undefined && gridItem.sizes.md !== undefined ? 'col-md-' + gridItem.sizes.md : '';
	var sizeLGClass = gridItem.sizes !== undefined && gridItem.sizes.lg !== undefined ? 'col-lg-' + gridItem.sizes.lg : '';

	var content = gridItem.content !== undefined ? gridItem.content : '';

	return `
		<div class="${sizeXSClass} ${sizeSMClass} ${sizeMDClass} ${sizeLGClass}">
			${content}
		</div>
	`

}
