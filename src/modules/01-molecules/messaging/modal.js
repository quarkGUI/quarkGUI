var style = require('./modal.scss');

export default function(modal){

	var id      = modal.id      !== undefined ? modal.id      : '';
	var title   = modal.title   !== undefined ? modal.title   : '';
	var content = modal.content !== undefined ? modal.content : '';

	return `
		<div class="${style.modalOverlay}">
			<div class="${style.modal}">
				<div class="${style.modalHeader}">${title}</div>
				<div class="${style.modalContent}">${content}</div>
			</div>
		</div>
	`;

};
