import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind';

import style from './RadioButton.scss';

class RadioButton extends React.Component {
	toggleChecked(event) {
		if (!this.props.disabled && !this.props.readOnly){
			this.setState(prevState => ({
				checked: !prevState.checked
			}))
		}
	}
	render () {
		const radioClassNames = classNames({
            [style.disabled]: this.props.disabled,
            [style.readOnly]: this.props.readOnly,
            [style.radioContainer]: true
        });
		return (
			<label className={radioClassNames}>
				<input disabled={this.props.disabled} 
					   name={this.props.name}
					   readOnly={this.props.readOnly} 
					   onChange={ () => this.props.onChange} 
					   type="radio" />
				<FontAwesomeIcon className={style.icon} icon={this.props.checked ? ['far', 'dot-circle'] : ['far', 'circle']} />
				{ this.props.label }
			</label>
			)
	}
}

RadioButton.propTypes = {
	name: PropTypes.string, 
	value: PropTypes.string,
	label: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	onChange: PropTypes.func
}

RadioButton.defaultProps = {
	label: '',
	checked: false,
	disabled: false,
	readOnly: false
}

export default RadioButton;