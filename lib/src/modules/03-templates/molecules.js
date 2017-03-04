"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style = require('../../style/globalStyle.scss');
const InputField = require("../01-molecules/form-elements/input-field");
const Checkbox = require("../01-molecules/form-elements/checkbox");
const RadioButton = require("../01-molecules/form-elements/radio-button");
const SelectList = require("../01-molecules/form-elements/select-list");
const ButtonRow = require("../01-molecules/buttons/button-row");
const Modal = require("../01-molecules/messaging/modal");
const DragableList = require("../01-molecules/lists/dragable-list");
function default_1() {
    return ` 
		<h2>Buttons</h2>
		<h3>Button row</h3>
		${ButtonRow.getModule({
        id: 'button-row1',
        buttons: [
            {
                id: 'buttonrow-button1',
                content: '',
                iconClass: 'fa fa-home'
            },
            {
                id: 'buttonrow-button1',
                content: 'Home'
            },
            {
                id: 'buttonrow-button1',
                content: 'Home',
                iconClass: 'fa fa-home'
            }
        ]
    })}

		<h2>Form elements</h2>
		<h3>Input field</h3>
		${InputField.getModule({
        id: 'molecule-input1',
        name: 'molecule-inputname1',
        type: 'text',
        placeholder: 'Placeholder text here',
        label: 'Input 1'
    })}

		<h3>Checkbox</h3>
		${Checkbox.getModule({
        id: 'molecule-checkbox1',
        name: 'molecule-checkboxes',
        value: 'one',
        label: 'Checkbox 1'
    })}

		${Checkbox.getModule({
        id: 'molecule-checkbox2',
        name: 'molecule-checkboxes',
        value: 'two',
        label: 'Checkbox 2'
    })}

		<h3>Radio button</h3>
		${RadioButton.getModule({
        id: 'molecule-radio1',
        name: 'molecule-radio-buttons',
        value: 'one',
        label: 'Radio button 1'
    })}
		${RadioButton.getModule({
        id: 'molecule-radio2',
        name: 'molecule-radio-buttons',
        value: 'two',
        label: 'Radio button 2'
    })}

		<h3>Select list</h3>
		${SelectList.getModule({
        id: 'molecule-select1',
        name: 'molecule-selectname1',
        type: 'text',
        placeholder: 'Choose an option',
        label: 'Normal select list',
        options: [
            {
                name: 'first',
                value: 'first'
            },
            {
                name: 'second',
                value: 'second'
            },
            {
                name: 'third',
                value: 'third'
            },
            {
                name: 'fourth',
                value: 'fourth'
            },
            {
                name: 'fifth',
                value: 'fifth'
            }
        ]
    })}

		${SelectList.getModule({
        id: 'molecule-select2',
        name: 'molecule-selectname2',
        type: 'text',
        placeholder: 'Type here',
        label: 'Searchable select list',
        searchable: true,
        options: [
            {
                name: 'first',
                value: 'first'
            },
            {
                name: 'second',
                value: 'second'
            },
            {
                name: 'third',
                value: 'third'
            },
            {
                name: 'fourth',
                value: 'fourth'
            },
            {
                name: 'fifth',
                value: 'fifth'
            }
        ]
    })}

		<h2>Messaging</h2>
		<h3>Modal</h3>
		${Modal.getModule({
        id: 'modal1',
        title: 'Modal title',
        content: `<p>modal content</p>`
    })}

		<h2>Lists</h2>
		<h3>Dragable list</h3>
		${DragableList.getModule({
        id: 'dragable-list1',
        listItems: [
            { content: `first list item content` },
            { content: `second list item content` },
            { content: `third list item content` }
        ]
    })}
`;
}
exports.default = default_1;
