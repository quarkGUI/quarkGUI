'use strict';

module.exports = {
	atoms: {
		buttons: {
			actionButton: function(actionButton) {
				return require("./src/modules/00-atoms/buttons/action-button").default(actionButton);
			},
			button: function(button) {
				return require("./src/modules/00-atoms/buttons/button").default(button);
			},
			toggleButton: function(toggleButton) {
				return require("./src/modules/00-atoms/buttons/toggle-button").default(toggleButton);
			}
		},
		formElements: {
			checkbox: function(checkbox) {
				return require("./src/modules/00-atoms/form-elements/checkbox").default(checkbox);
			},
			inputField: function(inputField) {
				return require("./src/modules/00-atoms/form-elements/input-field").default(inputField);
			},
			radioButton: function(radioButton) {
				return require("./src/modules/00-atoms/form-elements/radio-button").default(radioButton);
			},
			selectList: function(selectList) {
				return require("./src/modules/00-atoms/form-elements/select-list").default(selectList);
			}
		},
		media: {
			image: function(image) {
				return require("./src/modules/00-atoms/media/image").default(image);
			}
		},
		sections: {
			gridItem: function(gridItem){
				return require("./src/modules/00-atoms/sections/grid-item").default(gridItem);
			}
		}
	}
}
