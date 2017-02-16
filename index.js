/*!
 * quarkGUI v0.3.19 (https://github.com/benjamindehli/quarkGUI)
 * Copyright(c) 2016-2017 Benjamin Dehli (https://github.com/benjamindehli)
 * Licenced under GNU General Public License
 */


'use strict';

require("font-awesome-webpack!font-awesome-webpack/font-awesome.config.js");

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
	},
	molecules: {
		buttons: {
			buttonRow: function(buttonRow) {
				return require("./src/modules/01-molecules/buttons/button-row").default(buttonRow);
			}
		},
		formElements: {
			checkbox: function(checkbox) {
				return require("./src/modules/01-molecules/form-elements/checkbox").default(checkbox);
			},
			inputField: function(inputField) {
				return require("./src/modules/01-molecules/form-elements/input-field").default(inputField);
			},
			radioButton: function(radioButton) {
				return require("./src/modules/01-molecules/form-elements/radio-button").default(radioButton);
			},
			selectList: function(selectList) {
				return require("./src/modules/01-molecules/form-elements/select-list").default(selectList);
			}
		},
		lists: {
			dragableList: function(dragableList) {
				return require("./src/modules/01-molecules/lists/dragable-list").default(dragableList);
			}
		},
		menus: {
			actionBarMenu: function(actionBarMenu) {
				return require("./src/modules/01-molecules/menus/action-bar-menu").default(actionBarMenu);
			}
		},
		messaging: {
			modal: function(modal) {
				return require("./src/modules/01-molecules/messaging/modal").default(modal);
			}
		},
		navigation: {
			listNavigation: function(listNavigation) {
				return require("./src/modules/01-molecules/navigation/list-navigation").default(listNavigation);
			},
			primaryNavigation: function(primaryNavigation) {
				return require("./src/modules/01-molecules/navigation/primary-navigation").default(primaryNavigation);
			},
			sidebarNavigation: function(sidebarNavigation) {
				return require("./src/modules/01-molecules/navigation/sidebar-navigation").default(sidebarNavigation);
			}
		},
		sections: {
			grid: function(grid) {
				return require("./src/modules/01-molecules/sections/grid").default(grid);
			}
		}
	},
	organisms: {
		cards: {
			card: function(card) {
				return require("./src/modules/02-organisms/cards/card").default(card);
			}
		},
		global: {
			footer: function(footer) {
				return require("./src/modules/02-organisms/global/footer").default(footer);
			},
			header: function(header) {
				return require("./src/modules/02-organisms/global/header").default(header);
			},
			sidebar: function(sidebar) {
				return require("./src/modules/02-organisms/global/sidebar").default(sidebar);
			}
		},
		menus: {
			actionBar: function(actionBar) {
				return require("./src/modules/02-organisms/menus/action-bar").default(actionBar);
			},
			listMenu: function(listMenu) {
				return require("./src/modules/02-organisms/menus/list-menu").default(listMenu);
			}
		}
	}
}
