import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind';

import style from './Checkbox.scss';

class Checkbox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			checked: this.props.checked
		}
	}
	toggleChecked(){
		if (!this.props.disabled && !this.props.readOnly){
			this.setState(prevState => ({
				checked: !prevState.checked
			}))
		}
	}
	onChange() {
		if (this.props.onChange){
			this.props.onChange();
		}
		this.toggleChecked()
	}
	render () {
		const checkboxClassNames = classNames({
            [style.disabled]: this.props.disabled,
            [style.readOnly]: this.props.readOnly,
            [style.checkboxContainer]: true
        });
		return (
			<label className={checkboxClassNames}>
				<input disabled={this.props.disabled} 
					   name={this.props.name}
					   readOnly={this.props.readOnly} 
					   onChange={ () => this.onChange() } 
					   type="checkbox" />
				<FontAwesomeIcon className={style.icon}  icon={this.state.checked ?  ['far', 'check-square'] : ['far', 'square']} />
				{ this.props.label }
			</label>
			)
	}
}

Checkbox.propTypes = {
	name: PropTypes.string, 
	value: PropTypes.string,
	label: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	onChange: PropTypes.func
}

Checkbox.defaultProps = {
	label: '',
	checked: false,
	disabled: false,
	readOnly: false
}

export default Checkbox;