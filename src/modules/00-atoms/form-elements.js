module.exports = {
	inputField: function(id, name, type, value, placeholder){
		var inputField = require("./form-elements/input-field");
		return inputField.default({
			id:          id        !== undefined ?   id          : '',
			name:        name      !== undefined ?   name        : '',
			type:        type      !== undefined ?   type        : '',
			value:       value     !== undefined ?   value       : '',
			placeholder: placeholder !== undefined ? placeholder : ''
		});
	}
}
