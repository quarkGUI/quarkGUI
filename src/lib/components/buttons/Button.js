import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './Button.scss';

class Button extends React.Component {
	getThemeClass(){
		return style['buttonTheme-' + this.props.theme];
	}

	getTypeClass(){
		return style['buttonType-' + this.props.type];
	}

	render () {
		const buttonClassNames = classNames({
            [this.getThemeClass()]: true,
            [this.getTypeClass()]: true,
            [style.button]: true,
        });
		if (this.props.submit) {
			return <button type='submit' className={buttonClassNames}>{this.props.content}</button>
		}
		else if (this.props.href){
			return <a href={this.props.href} className={buttonClassNames}>{this.props.content}</a>
		} else {
			return <span className={buttonClassNames}>{this.props.content}</span>
		}
		
	}
}

Button.propTypes = {
	type: PropTypes.oneOf(['flat', 'raised', 'minimal']),
	theme: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'danger']),
	href: PropTypes.string, 
	/** Text content inside button */
	content: PropTypes.string,
	submit: PropTypes.bool
}

Button.defaultProps = {
	type: 'flat',
	theme: 'default',
	submit: false
}



export default Button;