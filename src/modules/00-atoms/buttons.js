module.exports = {
	button: function(id, type, theme, link, content, iconClass){
		var button = require("./buttons/button");
		return button.default({
			id:        id        !== undefined ? id        : '',
			type:      type      !== undefined ? type      : '',
			theme:     theme     !== undefined ? theme     : '',
			link:      link      !== undefined ? link      : '#',
			content:   content   !== undefined ? content   : '',
			iconClass: iconClass !== undefined ? iconClass : ''
		});
	}
}
