import React from 'react';
import PropTypes from 'prop-types';
import Style from './Button.scss';

class Button extends React.Component {
	getThemeClass(){
		return Style['buttonTheme-' + this.props.theme];
	}

	getTypeClass(){
		return Style['buttonType-' + this.props.type];
	}

	render () {
		let themeClass = " " + this.getThemeClass();
		let typeClass = " " + this.getTypeClass();
		let className = Style.button + themeClass + typeClass;
		return (
			<button className={className}>{this.props.content}</button>
			)
	}
}

Button.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf(['flat', 'raised', 'minimal']),
	theme: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'danger']),
	link: PropTypes.string, 
	iconClass: PropTypes.string,
	/** Text content inside button */
	content: PropTypes.string,
	title: PropTypes.string,
	submit: PropTypes.bool,
	attributes: PropTypes.arrayOf(PropTypes.string)
}

Button.defaultProps = {
	type: 'flat',
	theme: 'default',
	submit: false
}



export default Button;